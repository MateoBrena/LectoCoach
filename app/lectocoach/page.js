"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [questions, setQuestions] = useState({ literal: [], inferencial: [], global: [] });
  const [answers, setAnswers] = useState({});
  const [feedbacks, setFeedbacks] = useState({});
  const [results, setResults] = useState({});
  const [score, setScore] = useState(null);
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // -------------------------
  // GENERAR PREGUNTAS
  // -------------------------
  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    setScore(null);
    setReport(null);
    setFeedbacks({});
    setResults({});

    try {
      const res = await fetch("/api/generate-questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, level: "secundario" }),
      });

      const data = await res.json();

      if (data.error) {
        setError(data.error);
      } else {
        setQuestions(data.questions);

        const initialAnswers = {};
        const initialFeedbacks = {};

        ["literal", "inferencial", "global"].forEach((type) => {
          data.questions[type].forEach((_, idx) => {
            const key = `${type}-${idx}`;
            initialAnswers[key] = "";
            initialFeedbacks[key] = "";
          });
        });

        setAnswers(initialAnswers);
        setFeedbacks(initialFeedbacks);
      }
    } catch (err) {
      console.error(err);
      setError("Error inesperado al generar preguntas");
    } finally {
      setLoading(false);
    }
  };

  // -------------------------
  // CORREGIR RESPUESTA
  // -------------------------
  const handleCheckAnswer = async (type, index) => {
    const key = `${type}-${index}`;

    try {
      const res = await fetch("/api/check-answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: questions[type][index],
          answer: answers[key],
          text,
          type,
        }),
      });

      const data = await res.json();

      const newFeedbacks = { ...feedbacks, [key]: data.feedback };

      // detectar si es correcta o incorrecta
      const isCorrect = data.feedback.toLowerCase().startsWith("correcta");

      const newResults = { ...results, [key]: isCorrect };

      setFeedbacks(newFeedbacks);
      setResults(newResults);

      // si todas están corregidas → generar informe final
      const totalQuestions = 
        questions.literal.length +
        questions.inferencial.length +
        questions.global.length;

      if (Object.keys(newResults).length === totalQuestions) {
        generateFinalReport(newResults);
      }

    } catch (err) {
      console.error(err);
      setFeedbacks({ ...feedbacks, [key]: "Error al corregir la respuesta" });
    }
  };

  // -------------------------
  // GENERAR INFORME FINAL
  // -------------------------
  const generateFinalReport = (res) => {
    let literalCorrect = 0;
    let inferCorrect = 0;
    let globalCorrect = 0;

    let literalTotal = questions.literal.length;
    let inferTotal = questions.inferencial.length;
    let globalTotal = questions.global.length;

    // Contar aciertos por categoría
    Object.keys(res).forEach((key) => {
      if (key.startsWith("literal") && res[key]) literalCorrect++;
      if (key.startsWith("inferencial") && res[key]) inferCorrect++;
      if (key.startsWith("global") && res[key]) globalCorrect++;
    });

    const totalCorrect = literalCorrect + inferCorrect + globalCorrect;
    const totalQuestions = literalTotal + inferTotal + globalTotal;

    // Nota final 1-10
    const finalScore = Math.round((totalCorrect / totalQuestions) * 10);

    setScore(finalScore);

    // Informe por categoría
    const report = {
      literal: literalCorrect === literalTotal
        ? "Excelente comprensión literal."
        : literalCorrect === 0
        ? "Debe mejorar mucho la comprensión literal: extraer información directa del texto."
        : "Comprensión literal aceptable, pero puede mejorar en identificar datos explícitos.",

      inferencial: inferCorrect === inferTotal
        ? "Muy buena comprensión inferencial."
        : inferCorrect === 0
        ? "Debe mejorar la comprensión inferencial: deducir información a partir de pistas."
        : "Comprensión inferencial parcial: debe practicar interpretar información implícita.",

      global: globalCorrect === globalTotal
        ? "Excelente comprensión global y del mensaje principal."
        : globalCorrect === 0
        ? "Debe mejorar en comprensión global: captar la idea general y propósito del texto."
        : "Comprensión global moderada: entiende la idea principal, pero debe mejorar.",
    };

    setReport(report);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">LectoCoach - Comprensión Lectora</h1>

      {/* TEXT AREA */}
      <textarea
        rows={6}
        className="border p-2 w-full mb-4"
        placeholder="Pega aquí un texto para generar preguntas..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* BOTÓN GENERAR */}
      <button
        onClick={handleGenerate}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        disabled={loading || !text.trim()}
      >
        {loading ? "Generando..." : "Generar preguntas"}
      </button>

      {error && <p className="text-red-500">{error}</p>}

      {/* MOSTRAR PREGUNTAS */}
      {["literal", "inferencial", "global"].map((type) => (
        questions[type].length > 0 && (
          <div key={type} className="mb-6">
            <h2 className="text-xl font-semibold capitalize mb-2">
              Comprensión {type}
            </h2>

            {questions[type].map((q, idx) => {
              const key = `${type}-${idx}`;

              return (
                <div key={key} className="mb-4 border p-3 rounded">
                  <p className="font-medium">{q}</p>

                  <input
                    type="text"
                    placeholder="Escribe tu respuesta aquí"
                    className="border p-1 w-full mb-2"
                    value={answers[key] || ""}
                    onChange={(e) =>
                      setAnswers({ ...answers, [key]: e.target.value })
                    }
                  />

                    <button
                    className={`px-3 py-1 rounded text-white 
                      ${results[key] !== undefined 
                        ? "bg-gray-500 cursor-not-allowed" 
                        : "bg-green-500 hover:bg-green-600"}`}
                    onClick={() => handleCheckAnswer(type, idx)}
                    disabled={results[key] !== undefined}
                  >
                    Revisar respuesta
                  </button>

                  {feedbacks[key] && (
                    <p className="mt-1 text-blue-600">{feedbacks[key]}</p>
                  )}
                </div>
              );
            })}
          </div>
        )
      ))}

      {/* INFORME FINAL */}
      {score !== null && report && (
        <div className="mt-8 p-4 border border-gray-700 rounded bg-gray-900 text-gray-100">
          <h2 className="text-2xl font-bold mb-2 text-white">Resultados finales</h2>

          <p className="text-xl mb-3">
            Nota final: <strong className="text-green-400">{score}/10</strong>
          </p>

          <h3 className="text-lg font-semibold text-white">Informe por área:</h3>

          <ul className="mt-2 space-y-1">
            <li>
              <strong className="text-blue-300">Literal:</strong> {report.literal}
            </li>
            <li>
              <strong className="text-yellow-300">Inferencial:</strong> {report.inferencial}
            </li>
            <li>
              <strong className="text-purple-300">Global:</strong> {report.global}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}