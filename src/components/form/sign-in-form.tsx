"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "../icons";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signInSchema } from "@/lib/schema-validation";
import LoadingButton from "../buttons/loading-btn";
import { authClient } from "@/lib/auth-client";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ErrorContext } from "@better-fetch/fetch";

export function SignInForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const router = useRouter();
  const { toast } = useToast();
  const [pendingCredentials, setPendingCredentials] = useState(false);
  const [pendingGoogle, setPendingGoogle] = useState(false);
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleCredentialsSignIn = async (
    values: z.infer<typeof signInSchema>,
  ) => {
    await authClient.signIn.email(
      {
        email: values.email,
        password: values.password,
      },
      {
        onRequest: () => {
          setPendingCredentials(true);
        },
        onSuccess: async () => {
          router.push("/");
          router.refresh();
        },
        onError: (ctx: ErrorContext) => {
          console.log(ctx);

          // Traducciones para los mensajes de error comunes
          const errorTranslations: Record<string, string> = {
            INVALID_EMAIL_OR_PASSWORD:
              "Tu correo y contraseña han decidido tomarse un día libre sin avisarnos.",
            EMAIL_NOT_VERIFIED:
              "Tu correo está tan sin verificar como mis ganas de ir al gimnasio los lunes. ¿Te animas a darle click a ese enlace que te enviamos?",
            USER_NOT_FOUND:
              "No encontramos un usuario con este correo electrónico. Por favor, verifica tus datos o regístrate si eres nuevo.",
          };

          // Obtener el mensaje traducido o usar un mensaje predeterminado
          const errorMessage =
            ctx.error.code && errorTranslations[ctx.error.code]
              ? errorTranslations[ctx.error.code]
              : "Hemos encontrado un error. Nuestros hamsters que hacen funcionar los servidores necesitan un descanso. Volverán pronto.";

          toast({
            title: "ERROR CATASTRÓFICO... ¡Es broma!",
            description: errorMessage,
            variant: "destructive",
          });
        },
      },
    );
    setPendingCredentials(false);
  };

  const handleSignInWithGoogle = async () => {
    await authClient.signIn.social(
      {
        provider: "google",
      },
      {
        onRequest: () => {
          setPendingGoogle(true);
        },
        onSuccess: async () => {
          router.push("/");
          router.refresh();
        },
        onError: (ctx: ErrorContext) => {
          toast({
            title: "Fracaso exitosamente logrado",
            description:
              "Error detectado. Nuestros desarrolladores están actualmente en posición fetal debajo de sus escritorios.",
            variant: "destructive",
          });
        },
      },
    );
    setPendingGoogle(false);
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">
            {" "}
            ¡Bienvenido de regreso al infierno académico!
          </CardTitle>
          <CardDescription>
            Inicia sesión para ver cuántas materias te faltan (spoiler: son más
            de las que crees)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="flex flex-col gap-4">
              <LoadingButton
                pending={pendingGoogle}
                onClick={handleSignInWithGoogle}
                variant="reverse"
                className="w-full"
              >
                <Icons.google />
                Inicia sesión con Google
              </LoadingButton>
            </div>
            <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border dark:after:border-white">
              <span className="relative z-10 bg-white px-2 dark:bg-black dark:text-white">
                O continua con
              </span>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleCredentialsSignIn)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo electrónico</FormLabel>
                      <FormControl>
                        <Input placeholder="juan@mail.com" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center">
                        <FormLabel>Contraseña</FormLabel>
                        <a
                          href="/forgot-password"
                          className="ml-auto text-sm underline-offset-4 hover:underline"
                        >
                          ¿Olvidaste tu contraseña?
                        </a>
                      </div>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="La que posiblemente ya olvidaste"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <LoadingButton pending={pendingCredentials}>
                  Iniciar sesión
                </LoadingButton>
              </form>
            </Form>

            <div className="text-center text-sm">
              ¿Aún no tienes una cuenta?{" "}
              <Link href="/sign-up" className="underline underline-offset-4">
                Regístrate
              </Link>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t border-border pt-4 text-center text-xs text-muted-foreground">
          <p className="w-full italic">
            * Entrar a UniTrack no garantiza que apruebes tus exámenes, pero al
            menos sabrás exactamente qué reprobaste.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
