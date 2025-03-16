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
import { Label } from "@/components/ui/label";
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
import LoadingButton from "../loading-btn";

export function SignInForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof signInSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

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
              <Button variant="reverse" className="w-full">
                <Icons.google />
                Inicia sesión con Google
              </Button>
            </div>
            <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border dark:after:border-white">
              <span className="relative z-10 bg-white px-2 dark:bg-black dark:text-white">
                O continua con
              </span>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
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
                          href="#"
                          className="ml-auto text-sm underline-offset-4 hover:underline"
                        >
                          ¿Olvidaste tu contraseña?
                        </a>
                      </div>
                      <FormControl>
                        <Input
                          placeholder="La que posiblemente ya olvidaste"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <LoadingButton pending={form.formState.isSubmitting}>
                  Iniciar sesión
                </LoadingButton>
              </form>
            </Form>

            <div className="text-center text-sm">
              ¿Aún no tienes una cuenta?{" "}
              <Link
                href="/auth/sign-up"
                className="underline underline-offset-4"
              >
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
