"use client";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { resetPasswordSchema } from "@/lib/schema-validation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { authClient } from "@/lib/auth-client";
import { useToast } from "@/hooks/use-toast";
import { Suspense, useState } from "react";
import LoadingButton from "@/components/buttons/loading-btn";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export function ResetPasswordForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [pending, setPending] = useState(false);
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const token = searchParams.get("token");
  const router = useRouter();

  const { toast } = useToast();

  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof resetPasswordSchema>) => {
    setPending(true);
    if (!token) {
      toast({
        title: "¡Error al restablecer contraseña!",
        description: "El token no es válido o ha expirado.",
        variant: "destructive",
      });
      return;
    }
    const { error } = await authClient.resetPassword({
      newPassword: data.password,
      token,
    });
    if (error) {
      toast({
        title: "¡Desastre Épico!",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        variant: "success",
        title: "¡Cerebro Desbloqueado!",
        description:
          "Contraseña restablecida. Inicia sesión antes de que se te olvide otra vez.",
      });
      router.push("/sign-in");
    }
    setPending(false);
  };

  if (error === "invalid_token") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted p-4">
        <Card className="w-full max-w-lg">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              Enlace Tan Caducado Como Tus Excusas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-center text-gray-600">
                Este enlace ha expirado más rápido que tu motivación después de
                la primera semana de clases.
              </p>
              <p className="text-center text-sm italic text-gray-500">
                (Igual que ese cupón de descuento para el libro que nunca
                compraste)
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-center text-2xl">
            Has olvidado tu contraseña ¡Qué sorpresa!{" "}
          </CardTitle>
          <CardDescription className="text-center italic text-yellow-600">
            Tu cerebro tiene espacio limitado: eligió recordar memes en lugar de
            contraseñas. No podemos culparlo, las prioridades son claras.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nueva contraseña que olvidarás mañana</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="NoMeReprueben2024"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirma que realmente la memorizaste</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Seguro que era esta..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-4">
                <LoadingButton pending={pending}>
                  Restablecer contraseña
                </LoadingButton>
              </div>
              <p className="mt-2 text-center text-xs text-gray-500">
                *Consejo: "123ProfesorNoMeRepruebe" no es una contraseña segura,
                igual que tus súplicas de último minuto.
              </p>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default function ResetPassword() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Cargando...</CardTitle>
              <CardDescription>
                El sistema está procesando tu solicitud casi tan lento como tú
                procesando la materia de cálculo.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mt-4 space-y-4">
                <div className="h-2 w-full animate-pulse rounded bg-gray-200"></div>
                <div className="h-2 w-3/4 animate-pulse rounded bg-gray-200"></div>
                <p className="mt-6 text-sm italic text-gray-500">
                  Si tardamos tanto como tú con la tarea, podríamos estar aquí
                  un buen rato...
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      }
    >
      <ResetPasswordForm />
    </Suspense>
  );
}
