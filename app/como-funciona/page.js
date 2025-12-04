import Link from "next/link";
import FadeIn from "../components/FadeIn";

export default function ComoFuncionaPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-20">

        <FadeIn>
          <section className="text-center space-y-6">
            <h1 className="text-4xl font-bold">¿Cómo funciona LectoCoach?</h1>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              LectoCoach evalúa la comprensión lectora en tres niveles clave:{" "}
              <strong>literal</strong>, <strong>inferencial</strong> y{" "}
              <strong>global</strong>. Esto permite identificar cómo interpreta un
              estudiante un texto y qué habilidades necesita fortalecer.
            </p>
          </section>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">

          <FadeIn>
            <div className="bg-[#111] p-8 rounded-2xl shadow-lg border border-gray-800 transition hover:shadow-xl hover:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">📘</div>
                <h2 className="text-2xl font-semibold">Literal</h2>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Evalúa la capacidad para recuperar información 
                <strong> explícita</strong> del texto.
              </p>

              <ul className="mt-4 space-y-2 text-gray-400 text-sm">
                <li>• Datos mencionados directamente</li>
                <li>• Hechos concretos</li>
                <li>• Información visible en el texto</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="bg-[#111] p-8 rounded-2xl shadow-lg border border-gray-800 transition hover:shadow-xl hover:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">💡</div>
                <h2 className="text-2xl font-semibold">Inferencial</h2>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Analiza si el estudiante puede deducir información 
                <strong> implícita</strong> a partir del texto.
              </p>

              <ul className="mt-4 space-y-2 text-gray-400 text-sm">
                <li>• Interpretaciones</li>
                <li>• Conexiones entre ideas</li>
                <li>• Lectura entre líneas</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="bg-[#111] p-8 rounded-2xl shadow-lg border border-gray-800 transition hover:shadow-xl hover:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">🌍</div>
                <h2 className="text-2xl font-semibold">Global</h2>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Mide la comprensión del 
                <strong> sentido general</strong> del texto
                y la capacidad de resumir el mismo.
              </p>

              <ul className="mt-4 space-y-2 text-gray-400 text-sm">
                <li>• Idea principal</li>
                <li>• Intención del autor</li>
                <li>• Síntesis del mensaje</li>
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <section className="bg-[#111] p-10 mt-4 rounded-2xl shadow-lg border border-gray-800 space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <span className="text-3xl">📄</span>
              <h2 className="text-2xl font-semibold">Reporte final de LectoCoach</h2>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Al finalizar la corrección, LectoCoach genera un <strong>reporte claro y sintetizado</strong> 
              con los resultados de cada pregunta. Este informe permite visualizar rápidamente 
              los aciertos y errores del estudiante, así como los aspectos específicos de comprensión 
              que necesitan mayor práctica.
            </p>

            <ul className="text-gray-400 space-y-2 text-sm">
              <li>• Estado de cada respuesta: Correcta / Incorrecta</li>
              <li>• Explicación breve y concreta para cada caso</li>
              <li>• Detección del tipo de comprensión (literal, inferencial o global)</li>
            </ul>

            <p className="text-gray-300 leading-relaxed">
              Todo este contenido se presenta de forma ordenada y fácil de interpretar, 
              facilitando el trabajo docente y ayudando al estudiante a comprender qué debe mejorar.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="max-w-3xl mx-auto text-center space-y-6 pt-6">
            <p className="text-gray-300 leading-relaxed">
              LectoCoach transforma la corrección tradicional en un proceso automático, claro 
              y pedagógicamente útil, permitiendo enfocarse en lo más importante: mejorar la 
              comprensión lectora.
            </p>
          </section>
        </FadeIn>

      </div>
     <FadeIn className="text-center pb-20 m-8">
        <Link
          href="/lectocoach"
          className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-xl font-semibold transition"
        >
          Comenzar ahora
        </Link>
      </FadeIn>
    </main>
  );
}