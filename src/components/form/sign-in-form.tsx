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

export function SignInForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
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
          <form>
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
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="juan@mail.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Contraseña</Label>
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="La que posiblemente ya olvidaste"
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Iniciar sesión
                </Button>
              </div>
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
          </form>
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
