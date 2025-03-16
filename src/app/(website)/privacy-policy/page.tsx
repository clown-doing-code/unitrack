import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto bg-muted px-4 py-8">
      <Card className="mx-auto max-w-4xl">
        <CardHeader className="border-b border-border">
          <CardTitle className="text-center text-2xl font-bold md:text-3xl">
            Sección aburrida... ¡Digo! <br />
            Políticas de Privacidad
          </CardTitle>
          <p className="text-center text-sm italic text-muted-foreground">
            (O como nos gusta llamarlo: "El contrato que nadie lee pero todos
            aceptan")
          </p>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <section>
              <h2 className="mb-3 text-xl font-semibold">1. Introducción</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Bienvenido a nuestra sección Políticas de Privacidad; este
                documento largo que estás a punto de ignorar completamente. En
                cumplimiento con la Ley No. 172-13 sobre Protección de Datos de
                Carácter Personal de la República Dominicana, te explicamos cómo
                usamos tu información mientras tú intentas descifrar por qué
                reprobaste Cálculo por tercera vez.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">
                2. Información que Recopilamos (Sí, es más de lo que imaginas)
              </h2>
              <p className="mb-3 text-gray-700 dark:text-gray-300">
                Recopilamos los siguientes datos mientras tú te preguntas por
                qué necesitas 18 créditos más para graduarte:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
                <li>
                  Información personal básica como nombre, correo electrónico y
                  número de teléfono (para avisarte cuando estés a punto de
                  reprobar).
                </li>
                <li>
                  Tu historial académico completo (incluyendo esas materias que
                  preferirías olvidar).
                </li>
                <li>
                  Información sobre tu horario de estudio (sabemos que es
                  ficticio).
                </li>
                <li>
                  Datos sobre cuántas veces revisas tus calificaciones a las 3
                  AM (más de las que admitirías).
                </li>
                <li>
                  Nivel de cafeína en sangre (estimado por la frecuencia de uso
                  durante época de exámenes).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">
                3. Cómo Utilizamos su Información (Promesa: No para reírnos...
                mucho)
              </h2>
              <p className="mb-3 text-gray-700 dark:text-gray-300">
                De acuerdo con el Artículo 27 de la Ley No. 172-13, utilizamos
                tus datos para:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
                <li>
                  Mostrarte exactamente cuántas materias te faltan para
                  graduarte (prepárate para la sorpresa).
                </li>
                <li>
                  Enviarte recordatorios justo cuando estés viendo Netflix en
                  vez de estar realizando ese trabajo que vale el 40% de tu
                  calificación.
                </li>
                <li>
                  Calcular matemáticamente tus probabilidades de graduarte este
                  siglo.
                </li>
                <li>
                  Generar gráficos impresionantes que demuestren científicamente
                  tu procrastinación. (Esto solo parecía bonito, pero en
                  realidad no lo hacemos. Aún...)
                </li>
                <li>
                  Cumplir con la legislación dominicana mientras intentamos
                  salvarte de ti mismo.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">
                4. Protección de Datos (Más seguro que tus apuntes de última
                hora)
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Protegemos tus datos con el mismo fervor con el que proteges tu
                último peso durante la quincena. Siguiendo los estándares de
                seguridad establecidos por la Ley No. 172-13, implementamos
                encriptación avanzada, firewalls y un estudiante de Informática
                que jura saber lo que hace. Tu historial académico está seguro
                con nosotros (aunque quizás quisieras que no lo estuviera).
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">
                5. Cookies y Tecnologías Similares (No, no las que comes a
                medianoche)
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Usamos cookies, aunque no las que te ayudarían a superar ese
                examen de Estadística. Estas cookies rastrean cómo usas nuestra
                app, como cuánto tiempo pasas mirando fijamente tus
                calificaciones con expresión de horror. Puedes desactivarlas,
                pero como con tus clases, es mejor si asistes regularmente.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">
                6. Sus Derechos (Según la Ley No. 172-13)
              </h2>
              <p className="mb-3 text-gray-700 dark:text-gray-300">
                Como residente dominicano, tienes más derechos aquí que en la
                oficina del decano:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
                <li>
                  Derecho a acceder a tus datos (para confirmar que sí,
                  efectivamente reprobaste ese parcial).
                </li>
                <li>
                  Derecho a rectificar información (tus calificaciones,
                  lamentablemente, no son negociables).
                </li>
                <li>
                  Derecho al olvido (aunque tus profesores nunca olvidarán ese
                  día que llegaste en pijama al examen final).
                </li>
                <li>
                  Derecho a retirar tu consentimiento (casi tan difícil como
                  retirarse de Cálculo después de la fecha límite).
                </li>
                <li>
                  Derecho a presentar una reclamación ante la Superintendencia
                  de Bancos como organismo regulador de la protección de datos
                  en la República Dominicana (lo que suena tan divertido como
                  hacer la tesis).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">
                7. Transferencia Internacional de Datos
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Conforme al Título III de la Ley No. 172-13, podríamos
                transferir tus datos fuera de la República Dominicana, pero te
                prometemos que tus momentos de pánico académico no se
                convertirán en un meme internacional. Solo compartimos
                información con proveedores que cumplan con estándares similares
                de protección de datos, lo que significa que tu historial de
                "dejarlo todo para último minuto" está seguro.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">
                8. Cambios a esta Política (Como tu horario después de la
                matrícula)
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Podemos cambiar esta política más frecuentemente que tú cambias
                tu carrera. Te notificaremos cualquier cambio importante, aunque
                sabemos que solo harás clic en "Aceptar" sin leer, igual que con
                los términos de uso de Instagram. Es parte de la tradición
                universitaria.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">
                9. Contacto (No es el número de tu profesor a las 11:59 PM)
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                ¿Preguntas, comentarios o crisis existenciales sobre esta
                política? Contáctanos a ayuda@estudiante-desesperado.com.do o en
                nuestras oficinas ubicadas convenientemente cerca de la máquina
                de café en el campus. También puedes contactar a la
                Superintendencia de Bancos de la República Dominicana como
                organismo de protección de datos en prousuario@sb.gob.do.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">
                10. Consentimiento Expreso
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Al usar nuestra aplicación, estás dando tu consentimiento
                expreso para el tratamiento de tus datos según lo establecido en
                esta política y en conformidad con la Ley No. 172-13. Este
                consentimiento es revocable en cualquier momento, similar a tu
                promesa de estudiar todos los días desde el inicio del semestre.
              </p>
            </section>

            <div className="border-t pt-4 text-sm text-gray-500 dark:text-gray-400">
              <p>Última actualización: 14 de marzo de 2025</p>
              <p className="mt-2 italic">
                Aprobado mientras el equipo de desarrollo luchaba contra el
                sueño y el plazo de entrega, igual que tú con tus trabajos
                finales.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
