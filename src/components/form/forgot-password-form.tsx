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
import { forgotPasswordSchema } from "@/lib/schema-validation";
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
import { useState } from "react";
import LoadingButton from "@/components/buttons/loading-btn";

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [pending, setPending] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof forgotPasswordSchema>) => {
    setPending(true);
    const { error } = await authClient.forgetPassword({
      email: data.email,
      redirectTo: "/reset-password",
    });

    if (error) {
      toast({
        title: "¡Catástrofe Digital!",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        variant: "success",
        title: "¡Milagro Académico!",
        description:
          "Si existe una cuenta con este email (y no lo inventaste como tus excusas para no entregar a tiempo), recibirás un enlace para resetear tu contraseña.",
      });
    }
    setPending(false);
  };
  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-center text-2xl">
            Has olvidado tu contraseña ¡Qué sorpresa!
          </CardTitle>
          <CardDescription className="text-center">
            ¿Olvidaste tu contraseña? Tranquilo, al menos esta no tiene fecha de
            entrega ni afecta tu promedio.
          </CardDescription>
          <CardDescription className="text-center italic text-yellow-600">
            Si recuerdas tus apuntes como recuerdas tus contraseñas, entendemos
            por qué estás aquí. ¡Al menos esta vez hay solución!
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correo electrónico</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="olvidadizo@noentregaatiempo.edu"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="pt-4">
                <LoadingButton pending={pending}>
                  Enviar enlace de restablecimiento
                </LoadingButton>
              </div>
              <p className="mt-2 text-center text-xs text-gray-500">
                *Consejo: "ContraseñaSegura123" es tan original como tu excusa
                para no entregar a tiempo.
              </p>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
