import FadeIn from "../components/FadeIn";

export default function ComprensionLectoraPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Sección 1 */}
        <FadeIn>
          <section>
            <h1 className="text-4xl font-bold mb-4">
              Comprensión Lectora: Un Desafío Educativo Urgente
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              La comprensión lectora es una de las habilidades fundamentales para el aprendizaje,
              la resolución de problemas y el desarrollo del pensamiento crítico. Sin embargo,
              miles de estudiantes enfrentan dificultades para interpretar textos, identificar ideas
              principales o relacionar información, lo que genera consecuencias a largo plazo en su
              rendimiento académico y sus oportunidades futuras.
            </p>
          </section>
        </FadeIn>

        {/* Sección 2 */}
        <FadeIn>
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold">Una problemática global y creciente</h2>

            <p className="text-gray-300 leading-relaxed">
              Diversos estudios internacionales y nacionales demuestran que la comprensión lectora
              es un problema serio que afecta a estudiantes de todas las edades. Algunos datos clave:
            </p>

            <ul className="list-disc list-inside space-y-3 text-gray-300">

              <FadeIn>
                <li>
                  Según el informe PISA 2022, <strong>más del 50%</strong> de los estudiantes de Argentina no alcanza
                  el nivel mínimo de comprensión lectora esperado para su edad.
                </li>
              </FadeIn>

              <FadeIn>
                <li>
                  A nivel mundial, aproximadamente uno de cada cuatro jóvenes tiene dificultades
                  importantes para entender textos de complejidad media.
                </li>
              </FadeIn>

              <FadeIn>
                <li>
                  Estudios de la UNESCO indican que la baja comprensión lectora está asociada a un
                  40% menos de rendimiento promedio en materias como historia, ciencias y matemáticas.
                </li>
              </FadeIn>

              <FadeIn>
                <li>
                  En evaluaciones nacionales, un porcentaje significativo de estudiantes no logra
                  identificar ideas principales ni conectar información explícita e implícita.
                </li>
              </FadeIn>

            </ul>
          </section>
        </FadeIn>

        {/* Sección 3 */}
        <FadeIn>
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold">¿Por qué es tan importante la comprensión lectora?</h2>

            <p className="text-gray-300 leading-relaxed">
              La comprensión lectora no solo afecta el desempeño en lengua y literatura. Es una
              habilidad transversal que impacta directamente en casi todas las áreas de aprendizaje
              y en la vida diaria. Entre sus beneficios más importantes se encuentran:
            </p>

            <ul className="list-disc list-inside space-y-3 text-gray-300">
              <li>Permite interpretar consignas, instrucciones y problemas complejos.</li>
              <li>Favorece el pensamiento crítico y la toma de decisiones informadas.</li>
              <li>Mejora la capacidad de aprender nuevos contenidos de manera autónoma.</li>
              <li>Prepara a los estudiantes para desafíos académicos y laborales futuros.</li>
              <li>Reduce la frustración al enfrentarse a textos largos, técnicos o densos.</li>
            </ul>

            <p className="text-gray-300 leading-relaxed">
              Trabajar la comprensión lectora desde edades tempranas es clave para reducir brechas
              educativas, mejorar el rendimiento general y fomentar estudiantes capaces de
              desenvolverse en un mundo cada vez más complejo y lleno de información.
            </p>
          </section>
        </FadeIn>

      </div>
    </main>
  );
}