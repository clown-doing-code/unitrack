// Archivo: utils/toast-messages.ts

// Colección de títulos satíricos para errores
export const errorTitles = [
  "¡Houston, tenemos un problema!",
  "ERROR CATASTRÓFICO... ¡Es broma!",
  "404: Éxito no encontrado",
  "Oops, la tecnología se rebeló",
  "¡Vaya! Parece que rompiste el internet",
  "Error: Exceso de mala suerte detectado",
  "Fracaso exitosamente logrado",
  "Alerta: Momento incómodo digital",
  "La app necesita una siesta",
  "Operación fallida con gran estilo",
];

// Colección de descripciones satíricas para errores (sin mensaje específico)
export const errorDescriptions = [
  "Algo salió mal. Probablemente sea culpa de los martes... o de tu conexión a Internet, pero culpemos a los martes.",
  "Parece que tu solicitud decidió tomar vacaciones anticipadas. Volverá cuando se le acabe el dinero.",
  "Hemos encontrado un error. Nuestros hamsters que hacen funcionar los servidores necesitan un descanso.",
  "Tu solicitud ha sido enviada a un agujero negro digital. Intentaremos rescatarla, pero no prometo nada.",
  "Esto es un error, pero no te preocupes, probablemente sea solo el universo conspirando contra ti.",
  "Algo salió mal. Seguramente es culpa de Mercury retrógrado, no de nuestro código.",
  "Error detectado. Nuestros desarrolladores están actualmente en posición fetal debajo de sus escritorios.",
  "Parece que nuestros servidores están teniendo una crisis existencial. Les daremos un momento.",
  "Esto no funcionó. Pero ey, fallaste en el intento y eso es lo importante.",
  "Error encontrado. Estamos trabajando en ello... o procrastinando. Probablemente lo segundo.",
];

// Función para obtener un mensaje de error aleatorio
export function getRandomErrorToast(errorMessage?: string) {
  const randomTitle =
    errorTitles[Math.floor(Math.random() * errorTitles.length)];
  const randomDescription =
    errorDescriptions[Math.floor(Math.random() * errorDescriptions.length)];

  return {
    title: randomTitle,
    description: errorMessage || randomDescription,
    variant: "destructive" as const,
  };
}

// También puedes crear funciones similares para otros tipos de mensajes
export function getRandomSuccessToast(successMessage?: string) {
  const titles = [
    "¡Misión cumplida! 🎉",
    "¡Éxito! ¡Contra todo pronóstico!",
    "¡Increíble! ¡Funcionó a la primera!",
    "¡Victoria! ¡Toma eso, universo!",
  ];

  const descriptions = [
    "Operación completada con éxito. El departamento de TI está tan sorprendido como tú.",
    "Todo salió bien. Guarda este momento, no pasa muy a menudo.",
    "Éxito rotundo. Probablemente deberías tomar una captura de pantalla como evidencia.",
    "Objetivo logrado. El equipo de desarrollo está bailando de alegría (o tal vez solo es café).",
  ];

  return {
    title: titles[Math.floor(Math.random() * titles.length)],
    description:
      successMessage ||
      descriptions[Math.floor(Math.random() * descriptions.length)],
    variant: "success" as const,
  };
}

export function getRandomWarningToast(warningMessage?: string) {
  const titles = [
    "Mmm... esto es sospechoso 🤔",
    "Advertencia: Momento incómodo detectado",
    "Alerta amarilla: No es rojo, pero tampoco es verde",
    "Aviso: Posible desastre en el horizonte",
  ];

  const descriptions = [
    "Algo no está del todo bien, pero tampoco está completamente mal. Estamos en esa zona gris de la vida.",
    "Esto podría ser un problema en el futuro. O no. Quién sabe, la vida es una caja de sorpresas.",
    "Técnicamente funciona, pero no estamos seguros de por qué. Crucemos los dedos y sigamos adelante.",
    "Hemos detectado una advertencia. Probablemente no sea nada, pero queríamos que te sintieras importante.",
  ];

  return {
    title: titles[Math.floor(Math.random() * titles.length)],
    description:
      warningMessage ||
      descriptions[Math.floor(Math.random() * descriptions.length)],
    variant: "warning" as const,
  };
}
