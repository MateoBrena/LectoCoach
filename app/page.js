import Link from "next/link";
import Hero from "./components/Hero";
import FadeIn from "./components/FadeIn";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      
      <Hero />

      <section className="max-w-4xl mx-auto mb-20">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-4">
            ¿Por qué es importante la comprensión lectora?
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-gray-300 mb-4 leading-relaxed">
            La comprensión lectora es una habilidad fundamental para el aprendizaje.  
            No solo permite entender textos, sino también analizar, inferir, tomar decisiones,
            resolver problemas y aprender de forma autónoma.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-gray-300 leading-relaxed">
            Sin una buena comprensión lectora, los estudiantes tienen dificultades en todas las áreas
            académicas, incluso en materias que no parecen relacionadas con la lectura.  
            Es una de las competencias clave para el éxito educativo y profesional.
          </p>
        </FadeIn>
      </section>

      <section className="max-w-4xl mx-auto mb-20">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-4">El problema actual</h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Estudios recientes revelan que la mayoría estudiantes  en Argentina presentan dificultades para interpretar
            textos, identificar ideas clave, hacer inferencias y relacionar información.  
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-gray-300 leading-relaxed">
            Esto no solo afecta su rendimiento académico, sino también su capacidad para comprender
            instrucciones, analizar información en la vida cotidiana y desarrollar pensamiento crítico.
          </p>
        </FadeIn>
      </section>
      <section className="max-w-4xl mx-auto mb-24">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-8">
            ¿Qué hace único a LectoCoach?
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 transition hover:shadow-xl hover:border-gray-700">
              <h3 className="text-2xl font-bold mb-4">❌ IA Tradicional</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Resume textos por vos.</li>
                <li>• Te da las respuestas directamente.</li>
                <li>• No mejora tus habilidades reales.</li>
                <li>• Fomenta dependencia de la herramienta.</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 transition hover:shadow-xl hover:border-gray-700">
              <h3 className="text-2xl font-bold mb-4">✅ LectoCoach</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Te guía para comprender por tu cuenta.</li>
                <li>• Entrena pensamiento crítico y lectura profunda.</li>
                <li>• Te hace preguntas y evalúa tus respuestas.</li>
                <li>• Diseñado para que mejores, no para que copies.</li>
              </ul>
            </div>

          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-center text-gray-400 mt-8 italic">
            LectoCoach no hace el trabajo por vos — te ayuda para que lo hagas mejor.
          </p>
        </FadeIn>
      </section>
      <section className="max-w-4xl mx-auto mb-24">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-4">¿Cómo ayuda LectoCoach?</h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <ul className="space-y-4 text-gray-300">
            <li className="bg-gray-900 p-4 rounded-lg border border-gray-800 transition hover:shadow-xl hover:border-gray-700">
              📘 Genera <strong>preguntas personalizadas</strong> según el texto.
            </li>
            <li className="bg-gray-900 p-4 rounded-lg border border-gray-800 transition hover:shadow-xl hover:border-gray-700">
              🔍 Evalúa tus respuestas y explica <strong>por qué son correctas o incorrectas</strong>.
            </li>
            <li className="bg-gray-900 p-4 rounded-lg border border-gray-800 transition hover:shadow-xl hover:border-gray-700">
              🧠 Trabaja tres áreas clave de la comprensión:  
              <strong> literal, inferencial y global</strong>.
            </li>
            <li className="bg-gray-900 p-4 rounded-lg border border-gray-800 transition hover:shadow-xl hover:border-gray-700">
              ⭐ Ofrece un <strong>informe final</strong> con sugerencias de mejora.
            </li>
            <li className="bg-gray-900 p-4 rounded-lg border border-gray-800 transition hover:shadow-xl hover:border-gray-700">
              ⚡ Funciona en segundos y es accesible para cualquier estudiante.
            </li>
          </ul>
        </FadeIn>
      </section>

      <FadeIn className="text-center pb-20">
        <Link
          href="/lectocoach"
          className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-xl font-semibold transition"
        >
          Comenzar ahora
        </Link>
      </FadeIn>
    </div>
  );
}