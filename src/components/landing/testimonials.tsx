import React from "react";
import { InfiniteMovingCards } from "../infinite-moving-cards";
import MaxWidthWrapper from "../max-width-wrapper";

const testimonios = [
  {
    quote:
      "UniTrack me ha ayudado a organizar mi carrera de una manera que nunca imaginé. Ahora puedo ver claramente las materias que me faltan y planificar mejor mis semestres.",
    name: "María Rodríguez",
    title: "Estudiante",
    avatar: "",
    career: "Licenciatura en Administración de Empresas",
    university: "Universidad Autónoma de Santo Domingo (UASD)",
  },
  {
    quote:
      "Gracias a esta plataforma, pude adelantar materias estratégicamente y ahora me graduaré un semestre antes de lo previsto. ¡Increíble herramienta!",
    name: "Carlos Méndez",
    title: "Estudiante de último año",
    avatar: "",
    career: "Ingeniería Civil",
    university: "Pontificia Universidad Católica Madre y Maestra (PUCMM)",
  },
  {
    quote:
      "Como estudiante que trabaja, necesitaba una forma de organizar mi tiempo eficientemente. UniTrack me ha dado la visibilidad que necesitaba para equilibrar mis estudios y mi trabajo.",
    name: "Laura Santana",
    title: "Estudiante",
    avatar: "",
    career: "Licenciatura en Psicología",
    university: "Universidad Nacional Pedro Henríquez Ureña (UNPHU)",
  },
  {
    quote:
      "Antes me sentía perdido con los requisitos de mi carrera. Ahora tengo todo claro y puedo concentrarme en aprender en lugar de preocuparme por la planificación.",
    name: "José Luis Ramírez",
    title: "Estudiante de tercer año",
    avatar: "",
    career: "Medicina",
    university: "Universidad Iberoamericana (UNIBE)",
  },
  {
    quote:
      "UniTrack ha sido fundamental para mi éxito académico. Me ha permitido visualizar mi progreso y mantenerme motivada cuando el camino se pone difícil.",
    name: "Ana Batista",
    title: "Recién graduada",
    avatar: "",
    career: "Contabilidad",
    university: "Universidad APEC (UNAPEC)",
  },
];
export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="w-full bg-white py-12 dark:bg-muted md:py-12 lg:py-16"
    >
      <MaxWidthWrapper>
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                ¡Juro Que No Son Mis Primos!
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Testimonios de estudiantes que aseguran haber aprobado gracias a
                nosotros. Algunos podrían ser inventados porque aún estamos
                esperando que nuestros usuarios reales se gradúen para confirmar
                que funciona.
              </p>
            </div>
          </div>
          <div className="mx-auto grid gap-6 py-6">
            <InfiniteMovingCards
              items={testimonios}
              direction="right"
              speed="slow"
            />
            <InfiniteMovingCards
              items={testimonios}
              direction="left"
              speed="slow"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
