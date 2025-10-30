"use client";

import { useState, useEffect, cloneElement } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
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
    onSuccess,
    onError,
}) {
    const router = useRouter();
    const queryClient = useQueryClient();
    const [formData, setFormData] = useState(initialData);
    const isEditMode = Boolean(itemId);

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
        },
        onError,
    });

    const updateMutation = useMutation({
        mutationFn: (data) => updateFn(itemId, data),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: [queryKey] });
            onSuccess?.(data);
            if (redirectTo) router.push(redirectTo);
        },
        onError,
    });

    useEffect(() => {
        if (fetchedData) setFormData(fetchedData);
    }, [fetchedData]);

    const handleSubmit = (e) => {
        console.log(e)

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