"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect, cloneElement } from "react";
import { useNotification } from "@/hooks/useNotification";
import { useRouter } from "next/navigation";

export default function FormManager({
    children,
    queryKey,
    queryFn,
    createFn,
    updateFn,
    itemId = null,
    redirectTo,
    initialData = {},
    onSuccess
}) {
    const [formData, setFormData] = useState(initialData);
    
    const { success, error } = useNotification();
    const queryClient = useQueryClient();
    const isEditMode = Boolean(itemId);
    const router = useRouter();

    const { data: fetchedData, isLoading: isLoadingData } = useQuery({
        queryKey: [queryKey, itemId],
        queryFn: () => queryFn(itemId),
        enabled: isEditMode && !!queryFn,
    });

    const createMutation = useMutation({
        mutationFn: createFn,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: [queryKey] });
            onSuccess?.(data);
            if (redirectTo) router.push(redirectTo);
            success("Create", "Item criado com sucesso")
        },
        onError: (e) => {
            error("Create", "Ops... Ocorreu um erro")
        },
    });

    const updateMutation = useMutation({
        mutationFn: (data) => updateFn(itemId, data),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: [queryKey] });
            onSuccess?.(data);
            if (redirectTo) router.push(redirectTo);
            success("Update", "Item atualizado com sucesso")
        },
        onError: (e) => {
            error("Update", "Ops... Ocorreu um erro")
        },
    });

    useEffect(() => {
        if (fetchedData) setFormData(fetchedData);
    }, [fetchedData]);

    const handleSubmit = (e) => {
        e?.preventDefault();
        (isEditMode ? updateMutation : createMutation).mutate(formData);
    };

    const handleCancel = () => redirectTo && router.push(redirectTo);

    return cloneElement(children, {
        formData,
        setFormData,
        onSubmit: handleSubmit,
        onCancel: handleCancel,
        loading: isLoadingData || createMutation.isPending || updateMutation.isPending,
        mode: isEditMode ? "edit" : "create",
        error: createMutation.error || updateMutation.error,
    });
}