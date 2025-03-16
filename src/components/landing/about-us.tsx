import {
  BrainCircuit,
  Eye,
  GraduationCap,
  Quote,
  HeartCrack,
  Clock,
  Sparkles,
  Brain,
  Smile,
} from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function AboutUsSection() {
  return (
    <section
      id="nosotros"
      className="w-full py-12 transition-colors duration-300 lg:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-5xl">
            Sobre Nosotros
          </h2>
          <p className="text-xl text-muted-foreground">Historias casi reales</p>
          <div className="mt-6 h-1 w-16 bg-primary dark:bg-primary" />
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:grid-rows-1">
          {/* Imagen destacada - ocupa 2x2 */}
          <div className="relative md:col-span-2 md:row-span-2">
            <Card className="h-full overflow-hidden">
              <CardContent className="h-full p-0">
                <div className="relative h-64 w-full md:h-full">
                  <Image
                    src="/placeholder.svg"
                    alt="Estudiantes sobreviviendo al sistema académico"
                    fill
                    className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-xl font-bold text-white md:text-2xl">
                      Creado por supervivientes del sistema académico
                    </h3>
                    <p className="mt-2 text-sm text-white/80 md:text-base">
                      Convirtiendo el caos académico en claridad desde 2024
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Historia principal - ocupa 2x1 */}
          <div className="md:col-span-2">
            <Card className="h-full">
              <CardHeader className="pb-2">
                <CardTitle>Nuestra Historia</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert">
                <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                  Somos un grupo de estudiantes que pasamos más tiempo
                  descifrando nuestro plan de estudios que estudiando para los
                  exámenes. Un día, después de nuestra quinta crisis existencial
                  colectiva, decidimos que era hora de hacer algo al respecto...
                  o seguir llorando. Elegimos la primera opción (aunque hubo
                  bastante de la segunda también).
                </p>
                <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                  Nuestra app nació de la desesperación y fue alimentada por
                  lágrimas, café y el deseo ardiente de no ver a nadie más
                  sufriendo como nosotros.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Confesión traumática - ocupa 1x1 */}
          <div className="md:col-span-2">
            <Card className="h-full bg-primary/10 dark:bg-muted">
              <CardContent className="p-4">
                <Quote className="mb-2 h-6 w-6 text-primary" />
                <p className="text-sm italic text-slate-700 dark:text-white">
                  "Descubrí que me faltaba UN crédito para graduarme el último
                  día del semestre final. La expresión en la cara del
                  coordinador cuando entré a su oficina llorando con 17 cafés en
                  mi sistema fue épica."
                </p>
                <p className="mt-2 text-xs text-slate-600 dark:text-muted-foreground">
                  — Emilio, fundador y experto en ataques de pánico académicos
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Comentario estudiante 1 - ocupa 1x1 */}
          <div className="md:col-span-1">
            <Card className="h-full bg-slate-200 dark:bg-muted">
              <CardContent className="p-4">
                <Brain className="mb-2 h-6 w-6 text-slate-900 dark:text-white" />
                <p className="text-sm italic text-slate-700 dark:text-white">
                  "Antes de usar esta app, mi plan de estudios era tan confuso
                  que mi tutor me sugirió cambiarme a Filosofía porque 'al menos
                  allí la confusión es intencional'."
                </p>
                <p className="mt-2 text-xs text-slate-600 dark:text-muted-foreground">
                  — Estudiante de Ingeniería
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Comentario estudiante 2 - ocupa 1x1 */}
          <div className="md:col-span-1">
            <Card className="h-full bg-slate-200 dark:bg-muted">
              <CardContent className="p-4">
                <Smile className="mb-2 h-6 w-6 text-slate-900 dark:text-white" />
                <p className="text-sm italic text-slate-700 dark:text-white">
                  "Mi terapeuta me dijo que tenía que enfrentar mis miedos. Le
                  mostré mi plan de estudios y me dio incapacidad por una
                  semana."
                </p>
                <p className="mt-2 text-xs text-slate-600 dark:text-muted-foreground">
                  — Estudiante de Psicología
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Comentario estudiante 3 - ocupa 1x1 */}
          <div className="md:col-span-1">
            <Card className="h-full bg-slate-200 dark:bg-muted">
              <CardContent className="p-4">
                <Clock className="mb-2 h-6 w-6 text-slate-900 dark:text-white" />
                <p className="text-sm italic text-slate-700 dark:text-white">
                  "Llevo tanto tiempo en la universidad que ya me confunden con
                  profesor. El otro día un estudiante me pidió una carta de
                  recomendación."
                </p>
                <p className="mt-2 text-xs text-slate-600 dark:text-muted-foreground">
                  — Estudiante de Medicina
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Momento de revelación - ocupa 1x1 */}
          <div className="md:col-span-1">
            <Card className="h-full bg-slate-200 dark:bg-muted">
              <CardContent className="p-4">
                <HeartCrack className="mb-2 h-6 w-6 text-slate-900 dark:text-white" />
                <p className="text-sm italic text-slate-700 dark:text-white">
                  "Un día me di cuenta de que había memorizado todos los códigos
                  de los cursos pero no podía recordar el nombre de mi propia
                  madre. Ahí supe que necesitábamos esta app."
                </p>
                <p className="mt-2 text-xs text-slate-600 dark:text-muted-foreground">
                  — Estudiante de Lenguas Mordernas
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Beneficios - ocupa 3x1 */}
          <div className="hidden md:col-span-3 md:block">
            <Card className="h-full">
              <CardHeader className="pb-2">
                <CardTitle>Beneficios</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="flex flex-col items-center justify-center p-4 text-center">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Eye className="h-6 w-6" />
                    </div>
                    <p className="font-medium">Visualiza sin lágrimas</p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 text-center">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <BrainCircuit className="h-6 w-6" />
                    </div>
                    <p className="font-medium">Conserva tu cordura</p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 text-center">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <p className="font-medium">Gradúate (eventualmente)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Llamada a la acción - ocupa 1x1 */}
          <div className="md:col-span-1">
            <Card className="h-full">
              <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                <Sparkles className="mb-2 h-8 w-8" />
                <h4 className="text-lg font-bold">¡Únete a nosotros!</h4>
                <p className="mt-2 text-sm">
                  Porque nadie debería sufrir solo en la universidad
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
