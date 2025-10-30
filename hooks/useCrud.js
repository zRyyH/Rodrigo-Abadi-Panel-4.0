"use client";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNotification } from "@/hooks/useNotification";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export function useCrud(service, options = {}) {
    const {
        queryKey,
        title = 'Operação',
        messages = {},
        redirects = {},
        autoInvalidate = true,
        onLoadForEdit,
        autoLoadId
    } = options;

    const { success, error: errorNotify } = useNotification();
    const queryClient = useQueryClient();
    const router = useRouter();
    const [selectedId, setSelectedId] = useState(autoLoadId || null);

    // READ ALL
    const readAll = useQuery({
        queryKey: [queryKey, 'list'],
        queryFn: () => service.readAll(),
        enabled: !!service.readAll,
    });

    // READ BY ID
    const readById = useQuery({
        queryKey: [queryKey, 'detail', selectedId],
        queryFn: () => service.readById(selectedId),
        enabled: !!selectedId && !!service.readById,
    });

    // Auto-carrega dados quando o item é carregado
    useEffect(() => {
        if (readById.data && onLoadForEdit) {
            onLoadForEdit(readById.data);
        }
    }, [readById.data]);

    // CREATE
    const create = useMutation({
        mutationFn: (data) => service.create(data),
        onSuccess: () => {
            success(title, messages.create || 'Criado com sucesso!');
            if (redirects.create) router.push(redirects.create);
            if (autoInvalidate) queryClient.invalidateQueries({ queryKey: [queryKey] });
        },
        onError: (e) => {
            errorNotify(title, messages.error || 'Ops... ocorreu um erro :(');
            console.error(e);
        },
    });

    // UPDATE
    const update = useMutation({
        mutationFn: ({ id, data }) => service.update(id, data),
        onSuccess: () => {
            success(title, messages.update || 'Atualizado com sucesso!');
            if (redirects.update) router.push(redirects.update);
            if (autoInvalidate) queryClient.invalidateQueries({ queryKey: [queryKey] });
        },
        onError: (e) => {
            errorNotify(title, messages.error || 'Ops... ocorreu um erro :(');
            console.error(e);
        },
    });

    // DELETE
    const remove = useMutation({
        mutationFn: (id) => service.delete(id),
        onSuccess: () => {
            success(title, messages.delete || 'Excluído com sucesso!');
            if (redirects.delete) router.push(redirects.delete);
            if (autoInvalidate) queryClient.invalidateQueries({ queryKey: [queryKey] });
        },
        onError: (e) => {
            errorNotify(title, messages.error || 'Ops... ocorreu um erro :(');
            console.error(e);
        },
    });

    // Função para carregar item para edição
    const loadForEdit = (id) => {
        setSelectedId(id);
    };

    // Função para limpar seleção
    const clearSelection = () => {
        setSelectedId(null);
    };

    return {
        // Data
        data: readAll.data,
        item: readById.data,

        // Loading states
        isLoading: readAll.isLoading || readById.isLoading,
        isLoadingItem: readById.isLoading,
        isCreating: create.isPending,
        isUpdating: update.isPending,
        isDeleting: remove.isPending,

        // Actions
        create: (data) => create.mutateAsync(data),
        update: (id, data) => update.mutateAsync({ id, data }),
        delete: (id) => remove.mutateAsync(id),
        loadForEdit,
        clearSelection,
        refetch: readAll.refetch,

        // Raw mutations
        createMutation: create,
        updateMutation: update,
        deleteMutation: remove,

        // Raw queries
        readAllQuery: readAll,
        readByIdQuery: readById,
    };
}