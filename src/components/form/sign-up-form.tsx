"use client";
import { cn } from "@/lib/utils";
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
import { Icons } from "../icons";
import Link from "next/link";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signUpSchema } from "@/lib/schema-validation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import LoadingButton from "../loading-btn";
import { authClient } from "@/lib/auth-client";
import { useToast } from "@/hooks/use-toast";

export function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [showDialog, setShowDialog] = useState(false);
  const [pending, setPending] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
    await authClient.signUp.email(
      {
        email: values.email,
        password: values.password,
        name: values.name,
      },
      {
        onRequest: () => {
          setPending(true);
        },
        onSuccess: () => {
          toast({
            variant: "success",
            title: "¡Bienvenido al club de los desesperados!",
            description:
              "Tu cuenta ha sido creada. Revisa tu email para el link de verificación... si es que recuerdas revisar tu correo más que tus redes sociales.",
          });
        },
        onError: (ctx) => {
          console.log("error", ctx);

          // Mensajes personalizados según el tipo de error
          let errorMessage =
            "El sistema está tan confundido como tú en un examen sorpresa.";

          if (ctx.error.message?.includes("email")) {
            errorMessage =
              "Ese email ya existe o es tan inválido como tus excusas para no entregar la tarea a tiempo.";
          } else if (ctx.error.message?.includes("password")) {
            errorMessage =
              "Tu contraseña es tan débil como tu voluntad para estudiar el fin de semana.";
          } else if (ctx.error.message?.includes("network")) {
            errorMessage =
              "Tu conexión falló. ¿También usas el WiFi de la cafetería de la universidad?";
          }

          toast({
            variant: "destructive",
            title: "¡Oops! Algo salió terriblemente mal",
            description: ctx.error.message
              ? errorMessage
              : "Algo salió mal. Igual que tus planes de estudiar con anticipación.",
          });
        },
      },
    );
    setPending(false);
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-center text-2xl">Bienvenido</CardTitle>
          <CardDescription className="text-center">
            Inicia sesión con tu cuenta de Google{" "}
          </CardDescription>
          <CardDescription className="text-center italic text-yellow-600">
            ¡Prepárate para registrar tus logros académicos con precisión
            milimétrica! Tu GPA te lo agradecerá... si sobrevive al primer
            semestre.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-1 gap-3">
            <Button variant="reverse" className="w-full">
              <Icons.google className="mr-2 h-4 w-4" />
              Inicia sesión con Google
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border dark:after:border-white">
              <span className="relative z-10 bg-white px-2 dark:bg-black dark:text-white">
                O crea una cuenta nueva con
              </span>
            </div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="Juan Pérez" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correo electrónico</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="estudiante@procrastinar.edu"
                        {...field}
                      />
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
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Algo más creativo que '12345678'"
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
                    <FormLabel>Confirmar contraseña</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="¡Que no sea '12345678'!"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="pt-4">
                <LoadingButton pending={pending}>
                  Acepto mi destino académico
                </LoadingButton>
              </div>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="border-t border-border pt-4 text-center text-xs text-muted-foreground">
          <div className="w-full text-sm">
            ¿Ya tienes una cuenta?{" "}
            <Link
              href="/auth/sign-in"
              className="underline underline-offset-4 hover:text-primary"
            >
              Inicia sesión
            </Link>
          </div>
        </CardFooter>
      </Card>
      <div className="text-center text-sm text-muted-foreground">
        Al hacer click en continuar, aceptas nuestros{" "}
        <Link
          href="/terms-conditions"
          className="underline underline-offset-4 hover:text-primary"
        >
          Términos de Servicio
        </Link>{" "}
        y{" "}
        <Link
          href="/privacy-policy"
          className="underline underline-offset-4 hover:text-primary"
        >
          Política de Privacidad
        </Link>
        .
      </div>

      {/* Diálogo de aceptación de términos
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Confesión de términos no leídos</DialogTitle>
            <DialogDescription className="font-semibold text-red-500">
              ¡ALERTA DE ESTUDIANTE IMPRUDENTE!
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <p>Al hacer clic en "Acepto", confirmas oficialmente que:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>NO has leído</strong> absolutamente nada de nuestros
                términos y condiciones, como el buen estudiante que eres (igual
                que con tus lecturas obligatorias).
              </li>
              <li>
                Aceptas ceder tu alma digital y el derecho a nombrarte en memes
                universitarios.
              </li>
              <li>
                En caso de apocalipsis zombie en el campus, serás voluntario
                para distraer a los no-muertos mientras los estudiantes con
                mejores calificaciones escapan.
              </li>
              <li>
                Tu cuenta podría ser seleccionada aleatoriamente para recibir
                correos motivacionales a las 3:00 AM antes de cada examen final.
              </li>
              <li>
                También aceptas que tus profesores tendrán derecho a reírse de
                tus calificaciones en privado.
              </li>
            </ul>
            <p className="pt-2 text-xs italic text-muted-foreground">
              Tranquilo, nadie lee esto tampoco.
            </p>
          </div>
          <DialogFooter className="flex flex-col gap-2 sm:flex-row sm:justify-between">
            <Button type="button" onClick={() => setShowDialog(false)}>
              Déjame leer los términos (mentira)
            </Button>
            <LoadingButton pending={pending} onClick={handleConfirmSubmit}>
              Acepto mi destino académico
            </LoadingButton>
          </DialogFooter>
        </DialogContent>
      </Dialog> */}
    </div>
  );
}
