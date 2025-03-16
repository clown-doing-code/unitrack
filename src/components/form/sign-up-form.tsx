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
import { Label } from "@/components/ui/label";
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

export function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [showDialog, setShowDialog] = useState(false);

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
          <div className="grid gap-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              id="email"
              type="email"
              placeholder="estudiante@procrastinar.edu"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              placeholder="Algo más creativo que '12345678'"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirm-password">Confirmar contraseña</Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="¡Que no sea '12345678'!"
            />
          </div>
          <Button className="w-full" onClick={() => setShowDialog(true)}>
            Continuar hacia la inevitable deuda estudiantil
          </Button>
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

      {/* Diálogo de aceptación de términos */}
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
            <Button onClick={() => setShowDialog(false)}>
              Déjame leer los términos (mentira)
            </Button>
            <Button onClick={() => setShowDialog(false)}>
              Acepto mi destino académico
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
