"use client";

import { useNotification } from "@/hooks/useNotification";
import LoginForm from "@/components/forms/LoginForm";
import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/auth";
import { useRouter } from 'next/navigation';
import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const { success, error } = useNotification();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: authService.login,

    onSuccess: () => {
      success("Autenticação", "Usuário autenticado!");
      router.push("/products");
    },

    onError: (e) => {
      error("Auth", "Credenciais incorretas!");
    },
  });

  function onSubmit() {
    mutation.mutate(formData)
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <LoginForm
        loading={mutation.isPending}
        setFormData={setFormData}
        formData={formData}
        onSubmit={onSubmit}
      />
    </div>
  );
}