import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function EmailVerifiedPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <CardTitle className="text-2xl">
            ¡Vaya, realmente existía tu email!
          </CardTitle>
          <CardDescription>
            Increíble. Has logrado verificar tu correo electrónico. Todo un
            logro para tu currículum.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center text-gray-600">
          <p>
            Felicitaciones por completar esta tarea tan compleja como hacer clic
            en un enlace. Ahora puedes acceder a todas las funciones de nuestra
            plataforma y descubrir cuántas asignaturas estás a punto de
            suspender.
          </p>
          <p className="mt-2 text-xs italic">
            (Si no verificaste tu email y estás viendo esto, el sistema
            probablemente ha fallado. Como tu último examen.)
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/dashboard" passHref>
            <Button className="w-full">Entrar al abismo académico</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
