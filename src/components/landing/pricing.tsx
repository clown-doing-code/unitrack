import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertCircle,
  BookOpen,
  Check,
  Coffee,
  Eye,
  LineChart,
  LucideIcon,
  PartyPopper,
  Table,
  Verified,
  X,
} from "lucide-react";
import { Separator } from "../ui/separator";

// Define el tipo para las props del componente ColorNote
type ColorNoteProps = {
  color: string;
  icon?: LucideIcon; // Hacemos el icono opcional con '?'
  title?: string; // Hacemos el título opcional con '?'
  children: React.ReactNode;
};

// Componente para notas con colores
const ColorNote = ({ color, icon, title, children }: ColorNoteProps) => {
  const Icon = icon || AlertCircle;

  return (
    <Card
      className={`border-${color}-200 bg-${color}-50 dark:bg-${color}-900/30 dark:border-${color}-900/30`}
    >
      <CardContent className="p-3">
        <div className="flex items-start gap-2">
          <Icon className={`mt-0.5 h-5 w-5 text-${color}-500 flex-shrink-0`} />
          <p className="text-sm">
            {title && <strong>{title}: </strong>}
            {children}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default function PricingPlan() {
  return (
    <section
      id="pricing"
      className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-10"
    >
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Elige tu Plan de Supervivencia Académica
        </h2>
        <p className="mt-1 text-sm text-muted-foreground md:text-base">
          La única app donde tu progreso es más visible que tu futuro
          profesional
        </p>
      </div>

      <div className="mx-auto max-w-4xl">
        {/* Pricing Cards Container */}
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {/* Free Plan */}
          <Card className="flex flex-col">
            <CardHeader className="flex-1 pb-3 pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="mb-1 flex items-center text-xs font-semibold text-orange-500">
                    <AlertCircle className="mr-1 h-3 w-3" />
                    USADO POR EL 99% DE ESTUDIANTES
                  </div>
                  <CardTitle className="text-xl font-bold">
                    Plan "Procrastinador"
                  </CardTitle>
                  <span className="text-xs">
                    Para amantes de la adrenalina de última hora
                  </span>
                </div>
              </div>
              <div className="mt-2 flex items-baseline text-gray-900 dark:text-white">
                <span className="text-3xl font-extrabold tracking-tight">
                  $0
                </span>
                <span className="ml-1 text-lg font-semibold">/año</span>
                <span className="ml-2 text-xs text-muted-foreground">
                  (como tus ahorros)
                </span>
              </div>
              <CardDescription className="mt-2 text-sm">
                Y estudiantes que dejan todo para el último día
              </CardDescription>
            </CardHeader>
            <Separator />

            <CardContent className="flex-1 pb-2 pt-4">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <LineChart className="mr-2 h-6 w-6 text-green-500" />
                  <span>
                    Barra de progreso básica (que aumenta tan rápido como tu
                    promedio)
                  </span>
                </li>
                <li className="flex items-center">
                  <Table className="mr-2 h-6 w-6 text-green-500" />
                  <span>
                    Acceso al pensum completo (para que veas todo lo que te
                    falta)
                  </span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-6 w-6 text-green-500" />
                  <span>
                    Marcado de materias (para presumir las tres que has
                    aprobado)
                  </span>
                </li>

                <li className="flex items-center">
                  <X className="mr-2 h-6 w-6 text-red-500" />
                  <span>
                    Sin acceso a excusas pre-fabricadas para profesores
                  </span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="px-4 pb-4 pt-2">
              <Button size="sm" className="w-full">
                Dejar para mañana
              </Button>
            </CardFooter>
          </Card>

          {/* Premium Plan */}
          <Card className="relative flex flex-col overflow-hidden">
            <div className="absolute right-0 top-0 translate-x-8 translate-y-4 rotate-45 transform bg-primary px-6 py-1 text-xs font-bold text-white shadow-md dark:text-black">
              ¡SALVACIÓN!
            </div>
            <CardHeader className="flex-1 bg-muted pb-3 pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="mb-1 flex items-center text-xs font-semibold text-primary">
                    <Verified className="mr-1 h-4 w-4 text-blue-500" />
                    RECOMENDADO POR GRADUADOS
                  </div>
                  <CardTitle className="text-xl font-bold">
                    Plan "Graduación Garantizada*"
                  </CardTitle>
                  <span className="text-xs">*No realmente garantizada</span>
                </div>
              </div>
              <div className="text-gray- mt-2 flex items-end dark:text-white">
                <span className="text-3xl font-extrabold tracking-tight">
                  $12
                </span>
                <span className="ml-1 text-lg font-semibold">/año*</span>
              </div>
              <div className="flex text-xs text-muted-foreground">
                <span className="italic">
                  De los verdes, no confundir con pesos dominicanos
                </span>
              </div>
              <CardDescription className="mt-2 text-sm">
                Para quienes quieren graduarse esta década
              </CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="flex-1 pb-2 pt-4">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <LineChart className="mr-2 h-6 w-6 text-green-500" />
                  <span>
                    <strong className="text-primary">
                      Barra de progreso avanzada
                    </strong>{" "}
                    (con efectos especiales cuando subes 0.1%)
                  </span>
                </li>
                <li className="flex items-center">
                  <Eye className="mr-2 h-6 w-6 text-blue-500" />
                  <span>
                    <strong className="text-primary">
                      Vista del pensum con modo pesimista/optimista
                    </strong>{" "}
                    (según cuánto café hayas tomado)
                  </span>
                </li>
                <li className="flex items-center">
                  <BookOpen className="mr-2 h-6 w-6 text-amber-500" />
                  <span>
                    <strong className="text-primary">
                      Marcado de materias premium
                    </strong>{" "}
                    (con confeti virtual cuando apruebas algo)
                  </span>
                </li>

                <li className="flex items-center">
                  <PartyPopper className="mr-2 h-6 w-6 text-purple-500" />
                  <span>
                    <strong className="text-primary">Derecho moral</strong> (a
                    quejarte cuando la app no te ayudó a graduarte)
                  </span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="px-4 pb-4 pt-2">
              <Button size="sm" className="w-full">
                ¡Gradúate eventualmente!
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Notas coloridas */}
        <div className="mt-6 space-y-3">
          <ColorNote color="yellow" icon={Coffee} title="Nota">
            La suscripción es completamente opcional por el momento y solo
            existe para ayudar a pagar los meses de atraso del programador que
            vive a base de ramen.
          </ColorNote>

          <ColorNote color="blue" icon={BookOpen} title="Funciones actuales">
            Por ahora solo puedes ver el pensum, marcar materias y seguir tu
            barra de progreso. Más funciones serán agregadas en el futuro,
            cuando el programador termine de aprobar sus propias materias.
          </ColorNote>

          <ColorNote
            color="green"
            icon={AlertCircle}
            title="Aclaración monetaria"
          >
            (para los que ya reprobaron matemáticas financieras tres veces):
            Todos los precios mostrados son en dólares americanos auténticos, no
            los que dibujaste en clase de arte. Convertir a moneda local podría
            causar una crisis inflacionaria en tu cartera y posiblemente la
            caída de un pequeño gobierno.
          </ColorNote>
        </div>
      </div>

      <p className="mt-6 text-center text-xs italic text-muted-foreground">
        *Esta app no sustituye estudiar ni los 47 cafés durante los exámenes
      </p>
    </section>
  );
}
