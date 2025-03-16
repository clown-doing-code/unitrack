"use client";

import { GridBackground } from "@/components/grid-background";
import AboutUsSecion from "@/components/landing/about-us";
import Testimonials from "@/components/landing/testimonials";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  BookOpen,
  Award,
  BarChartIcon as ChartBar,
  Calendar,
  Coffee,
  HeartCrack,
  AlertTriangle,
  Clock,
} from "lucide-react";
import PricingPlan from "@/components/landing/pricing";
import Image from "next/image";
import { FlipWords } from "@/components/flip-words";

export default function Home() {
  // Animaciones personalizadas
  const animationStyles = `
    @keyframes float1 {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-15px) rotate(5deg); }
    }
    @keyframes float2 {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(-5deg); }
    }
    @keyframes float3 {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-10px) rotate(3deg); }
    }
    @keyframes panic {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      25% { transform: translateY(-5px) rotate(-3deg); }
      50% { transform: translateY(0px) rotate(0deg); }
      75% { transform: translateY(-5px) rotate(3deg); }
    }
  `;

  const floatingCardClasses =
    " backdrop-filter backdrop-blur-sm absolute z-10 rounded-lg border border-border/40 p-4 shadow-lg transition-all duration-500 text-black";

  return (
    <div className="flex min-h-screen flex-col">
      <style jsx>{animationStyles}</style>

      {/* Hero Section con tono carismático y sarcástico */}
      <section className="relative w-full overflow-hidden py-16 md:py-24">
        {/* Fondo animado con gradiente */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 dark:bg-black" />
          <GridBackground />
        </div>

        {/* Círculos decorativos */}
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-12">
            {/* Contenido de texto con tono sarcástico */}
            <div className="flex flex-col space-y-8 md:w-1/2">
              {/* Badge animada con tono divertido */}
              <div className="inline-flex items-center self-start rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <span className="mr-1.5 inline-block h-2 w-2 animate-pulse rounded-full bg-primary" />
                ¡Nuevo! Por fin alguien que entiende tu sufrimiento
              </div>

              {/* Título con resaltado y sarcasmo */}
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl">
                Para que no
                <FlipWords words={["Sufras", "Llores", "Colapses"]} />
                <br />
                más en la Universidad
              </h1>

              {/* Subtítulo mejorado con humor */}
              <p className="text-md md:text-md text-muted-foreground">
                Porque entre memorizar tu horario, descifrar requisitos de
                materias y sobrevivir con ramen, ya tienes suficiente. Una app
                para que tu título llegue antes que tu crisis de los 30.
              </p>

              {/* CTA con botones múltiples y tono divertido */}
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button size="lg" className="px-8 font-medium">
                  Rescata tu semestre
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" className="px-8 font-medium">
                  Procrastinar un rato más
                  <Clock className="h-4 w-4" />
                </Button>
              </div>

              {/* Datos de confianza con toque sarcástico */}
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="flex flex-col items-center rounded-lg border border-black bg-muted p-3 text-center">
                  <span className="text-2xl font-bold">15+</span>
                  <span className="text-xs text-muted-foreground">
                    Universidades sobreviviendo
                  </span>
                </div>
                <div className="flex flex-col items-center rounded-lg border border-black bg-muted p-3 text-center">
                  <span className="text-2xl font-bold">5.000+</span>
                  <span className="text-xs text-muted-foreground">
                    Estudiantes menos estresados
                  </span>
                </div>
                <div className="flex flex-col items-center rounded-lg border border-black bg-muted p-3 text-center">
                  <span className="text-2xl font-bold">98%</span>
                  <span className="text-xs text-muted-foreground">
                    Menos crisis existenciales
                  </span>
                </div>
                <div className="flex flex-col items-center rounded-lg border border-black bg-muted p-3 text-center">
                  <span className="text-2xl font-bold">∞</span>
                  <span className="text-xs text-muted-foreground">
                    Tazas de café ahorradas
                  </span>
                </div>
              </div>
            </div>

            {/* Imagen mejorada con elementos sarcásticos */}
            <div className="mt-12 md:mt-0 md:w-1/2">
              <div className="relative">
                {/* Imagen principal con sombra y borde */}
                <div className="overflow-hidden rounded-xl border border-border/40 bg-background shadow-xl">
                  <div className="relative aspect-[4/3]">
                    <Image
                      fill
                      src="/placeholder.svg"
                      alt="Dashboard que te salvará la vida universitaria"
                      className="h-full w-full object-cover"
                    />
                    {/* Capa de overlay con gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-50" />
                  </div>
                </div>

                {/* Tarjetas flotantes humorísticas */}
                <div
                  className={`${floatingCardClasses} left-6 top-6`}
                  style={{
                    animation: "float1 15s ease-in-out infinite",
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <Coffee className="h-5 w-5 text-amber-700" />
                    <span className="text-sm font-medium">
                      -37 crisis de cafeína
                    </span>
                  </div>
                </div>
                <div
                  className={`${floatingCardClasses} bottom-6 right-6`}
                  style={{
                    animation: "float2 18s ease-in-out infinite",
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-red-500" />
                    <span className="text-sm font-medium">
                      4 semestres restantes (¡ojalá!)
                    </span>
                  </div>
                </div>

                {/* Tarjeta flotante adicional cómica */}
                <div
                  className={`${floatingCardClasses} bottom-24 left-10`}
                  style={{
                    animation: "panic 3s ease-in-out infinite",
                    backgroundColor: "rgba(254, 68, 68, 0.1)",
                    borderColor: "#f97316",
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <HeartCrack className="h-5 w-5 text-red-500" />
                    <span className="text-sm font-medium">
                      ¡Respira, sobrevivirás!
                    </span>
                  </div>
                </div>

                {/* Tarjeta de alerta humorística */}
                <div
                  className={`${floatingCardClasses} right-10 top-16`}
                  style={{
                    animation: "float3 20s ease-in-out infinite",
                    backgroundColor: "rgba(255, 247, 237, 0.8)",
                    borderColor: "#f97316",
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                    <span className="text-sm font-medium">
                      Alerta: Solo te faltan 57 créditos
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Características destacadas con tono carismático */}
          <section
            id="features"
            className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4"
          >
            <Card className="flex flex-col bg-background/60 p-6 backdrop-blur transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none">
              <BookOpen className="mb-4 h-8 w-8 text-primary" />
              <h3 className="text-md mb-2 font-semibold">
                Pensum desencriptado
              </h3>
              <p className="text-sm text-muted-foreground">
                Porque ni los creadores del plan de estudios entienden cómo
                funciona.
              </p>
            </Card>
            <Card className="flex flex-col bg-background/60 p-6 backdrop-blur transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none">
              <Calendar className="mb-4 h-8 w-8 text-primary" />
              <h3 className="text-md mb-2 font-semibold">
                Planifica como adulto
              </h3>
              <p className="text-sm text-muted-foreground">
                Porque improvisar te ha funcionado fatal hasta ahora, admítelo.
              </p>
            </Card>
            <Card className="flex flex-col bg-background/60 p-6 backdrop-blur transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none">
              <ChartBar className="mb-4 h-8 w-8 text-primary" />
              <h3 className="text-md mb-2 font-semibold">
                Detecta desastres académicos
              </h3>
              <p className="text-sm text-muted-foreground">
                Antes de que tengas que explicarle a tus padres por qué
                necesitas un semestre extra.
              </p>
            </Card>
            <Card className="flex flex-col bg-background/60 p-6 backdrop-blur transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none">
              <Award className="mb-4 h-8 w-8 text-primary" />
              <h3 className="text-md mb-2 font-semibold">
                ¡Mira, estás progresando!
              </h3>
              <p className="text-sm text-muted-foreground">
                Celebra cada pequeña victoria, aunque sea no dormirte en clase.
              </p>
            </Card>
          </section>
        </div>
      </section>
      <Separator className="dark:bg-white" />
      <AboutUsSecion />
      <Separator className="dark:bg-white" />
      <Testimonials />
      <Separator className="dark:bg-white" />
      <PricingPlan />
    </div>
  );
}
