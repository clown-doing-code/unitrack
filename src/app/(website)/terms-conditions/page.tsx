import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsAndConditions() {
  return (
    <div className="mx-auto bg-muted px-4 py-8">
      <Card className="mx-auto max-w-4xl">
        <CardHeader className="border-b border-border">
          <CardTitle className="text-center text-2xl font-bold md:text-3xl">
            Términos y Condiciones
          </CardTitle>
          <p className="text-center text-sm italic text-muted-foreground">
            (¿Sabías que leer esto te ahorrará llamar a servicio al cliente para
            quejarte por algo que posiblemente aceptaste sin haber leído este
            documento?)
          </p>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <section>
              <h2 className="mb-3 text-xl font-semibold">1. Introducción</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Estos Términos y Condiciones ("Términos", "El Contrato que Nadie
                Lee", "Ese Documento Largo") rigen su acceso y uso de nuestro
                sitio web, productos y servicios. Al acceder o utilizar nuestro
                servicio, usted acepta estar sujeto a estos Términos. Si no está
                de acuerdo con alguna parte de estos términos, bueno...
                técnicamente no podrá acceder al servicio, pero seamos honestos,
                ¿quién lee esto completo?
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">
                2. Uso del Servicio
              </h2>
              <p className="mb-3 text-gray-700 dark:text-gray-300">
                Al utilizar nuestro servicio, usted acepta:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
                <li>
                  Proporcionar información precisa y completa cuando se
                  registre, aunque todos sabemos que pondrá su fecha de
                  nacimiento falsa.
                </li>
                <li>
                  Mantener la confidencialidad de su contraseña, a menos que sea
                  "123456" o "contraseña", en cuyo caso ya todos la conocemos.
                </li>
                <li>
                  No utilizar el servicio para fines ilegales o no autorizados,
                  porque tenemos suficientes problemas legales ya.
                </li>
                <li>
                  No intentar dañar, sobrecargar o perjudicar nuestros
                  servidores o redes, que funcionan con el poder de un hamster
                  en una rueda.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">3. Cuentas</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Cuando crea una cuenta con nosotros, debe proporcionarnos
                información precisa, completa y actualizada en todo momento. El
                incumplimiento de esto constituye un incumplimiento de los
                Términos, lo que puede resultar en la terminación inmediata de
                su cuenta en nuestro servicio. Y créanos, lloramos un poco cada
                vez que tenemos que eliminar una cuenta.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">
                4. Propiedad Intelectual
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                El servicio y su contenido original, características y
                funcionalidad son y seguirán siendo propiedad exclusiva de
                nuestra empresa y sus licenciantes. Sí, incluso ese botón feo
                que odiamos pero que nadie quiere cambiar. El servicio está
                protegido por derechos de autor, marcas registradas y otras
                leyes aburridas escritas por personas con trajes caros. Nuestras
                marcas comerciales y elementos de marca no pueden ser utilizados
                sin nuestro permiso, a menos que quiera recibir una carta muy
                formal de nuestros abogados.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">
                5. Enlaces a Otros Sitios Web
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Nuestro servicio puede contener enlaces a sitios web o servicios
                de terceros. Si hace clic en ellos y algo malo ocurre, ¡no es
                culpa nuestra! No tenemos control ni asumimos responsabilidad
                por el contenido, políticas de privacidad o prácticas de otros
                sitios web. Básicamente, si sale de nuestro sitio, está en
                tierra de nadie y no podemos ayudarle. Es como cuando su madre
                le decía que no habla con extraños, pero para Internet.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">6. Terminación</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Podemos terminar o suspender su cuenta inmediatamente, sin
                previo aviso o responsabilidad, por cualquier motivo, incluso si
                nos sentimos un poco malhumorados ese día. Tras la terminación,
                su derecho a utilizar el servicio cesará inmediatamente. Si
                desea terminar su cuenta, puede simplemente discontinuar el uso
                del servicio, aunque secretamente esperamos que vuelva. Le
                extrañaremos.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">
                7. Limitación de Responsabilidad
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                En ningún caso seremos responsables por absolutamente nada.
                ¿Perdió todos sus datos? ¡Qué pena! ¿La aplicación se cayó justo
                antes de entregar su trabajo final? ¡Mala suerte! Esta sección
                básicamente dice que pase lo que pase, no es nuestra culpa.
                Nuestros abogados pasaron mucho tiempo redactando este párrafo
                para asegurarse de ello.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">8. Cambios</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Nos reservamos el derecho, a nuestra sola discreción, de
                modificar o reemplazar estos Términos en cualquier momento y sin
                avisarle, porque sabemos que nadie los lee de todos modos.
                ¿Quién tiene tiempo para eso? Si un día abre la aplicación y
                todo es diferente, ¡sorpresa! Leyó los términos y aceptó los
                cambios.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">9. Suscripciones</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Actualmente ofrecemos una suscripción opcional tan adorable como
                un cachorro, que le da acceso a funciones premium para mejorar
                su experiencia académica. Dicho esto, y con una sonrisa en
                nuestro rostro, nos guardamos el pequeño derecho de ajustar
                ocasionalmente el precio (¡la inflación, ya sabe!). Y entre
                nosotros, existe la posibilidad de que algún día, en un futuro
                que puede o no estar cercano, esta suscripción "opcional" podría
                transformarse mágicamente en una característica esencial del
                servicio. Como cuando tus padres decían que "ver si podías"
                hacer algo, cuando en realidad era una orden disfrazada de
                pregunta. ¡La vida está llena de sorpresas!
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">10. Ley Aplicable</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Estos Términos se regirán por las leyes del país donde nuestro
                CEO decidió establecer la empresa para pagar menos impuestos. Si
                tiene algún problema con esto, puede presentar una queja formal
                que imprimiremos y usaremos como papel de escritorio.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">11. Contacto</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Si tiene alguna pregunta sobre estos Términos, puede enviarnos
                un correo a: terms@ejemplo.com. Le responderemos en un plazo de
                3 a 300 días hábiles, o cuando nos acordemos de revisar esa
                bandeja de entrada.
              </p>
            </section>

            <div className="border-t pt-4 text-sm text-gray-500 dark:text-gray-400">
              <p>
                Última actualización: 14 de marzo de 2025 (o tal vez mañana,
                quién sabe)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
