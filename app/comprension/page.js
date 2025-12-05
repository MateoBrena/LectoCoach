import FadeIn from "../components/FadeIn";
import PISABarChart from "../components/PISABarChart";
import PISALineChart from "../components/PISALineChart";

export default function ComprensionLectoraPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-20">

        <FadeIn>
          <section>
            <h1 className="text-4xl font-bold mb-4">
              Comprensión lectora: Un desafío educativo urgente
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              La comprensión lectora es una habilidad fundamental para el aprendizaje,
              la resolución de problemas y el desarrollo del pensamiento crítico. Sin
              embargo, miles de estudiantes enfrentan dificultades para interpretar
              textos, identificar ideas principales o relacionar información, lo que
              genera consecuencias a largo plazo en su rendimiento académico y sus
              oportunidades futuras.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold">
              Un problema global en crecimiento
            </h2>

            <p className="text-gray-300 leading-relaxed">
              De acuerdo con los resultados de PISA 2022, la comprensión lectora 
              continúa siendo una de las áreas con mayor dificultad para los estudiantes 
              de la región. Los datos muestran diferencias significativas entre países 
              y destacan la urgencia de desarrollar herramientas educativas innovadoras.
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Porcentaje de estudiantes por debajo del nivel mínimo (PISA 2022)
              </h3>
              <PISABarChart />
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold">¿Por qué importa la comprensión lectora?</h2>

            <p className="text-gray-300 leading-relaxed">
              Una baja comprensión lectora afecta directamente el rendimiento en todas 
              las áreas académicas y limita las oportunidades futuras. Entre los factores 
              que influyen en el desarrollo de esta habilidad se encuentran:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-900 rounded-xl shadow">
                <h3 className="text-xl font-semibold mb-2">Hábito lector insuficiente</h3>
                <p className="text-gray-300">
                  Las encuestas internacionales muestran una disminución sostenida 
                  del tiempo dedicado a la lectura recreativa.
                </p>
              </div>

              <div className="p-6 bg-gray-900 rounded-xl shadow">
                <h3 className="text-xl font-semibold mb-2">Contenido fragmentado</h3>
                <p className="text-gray-300">
                  La exposición a textos breves en redes sociales dificulta sostener
                  la atención en textos largos o complejos.
                </p>
              </div>

              <div className="p-6 bg-gray-900 rounded-xl shadow">
                <h3 className="text-xl font-semibold mb-2">Falta de estrategias</h3>
                <p className="text-gray-300">
                  Muchos estudiantes no dominan técnicas como inferir, resumir o 
                  identificar ideas principales.
                </p>
              </div>

              <div className="p-6 bg-gray-900 rounded-xl shadow">
                <h3 className="text-xl font-semibold mb-2">Lectura sin participación activa</h3>
                <p className="text-gray-300">
                  La comprensión falla cuando los estudiantes leen de forma pasiva, 
                  sin conectar ideas ni comprender significados.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold">
              Evolución de la comprensión lectora en Argentina
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Los resultados no han variado mucho a lo largo de los años, el porcentaje 
              de estudiantes por debajo del nivel mínimo se ha mantenido elevado. Esto quiere decir
              que más de la mitad de los chicos en edad adolescente no llegan a un nivel mínimo de lectura 
              y comprensión de texto. Los datos sugieren la necesidad de replantear las estrategias pedagógicas y 
              fortalecer el acompañamiento.
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Porcentaje de estudiantes bajo el nivel mínimo (PISA Argentina)
              </h3>
              <PISALineChart />
              <p className="text-center text-gray-400 mt-8 italic">
                *No se muestran resultados de las pruebas PISA 2015 ya que Argentina no produjo muestras representativas
              </p>
            </div>
          </section>
        </FadeIn>

      </div>
    </main>
  );
}