"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [questions, setQuestions] = useState({
    literal: [],
    inferencial: [],
    global: [],
  });
  const [answers, setAnswers] = useState({});
  const [feedbacks, setFeedbacks] = useState({});
  const [results, setResults] = useState({});
  const [score, setScore] = useState(null);
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [generated, setGenerated] = useState(false);
  const [corrected, setCorrected] = useState(false);

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
        body: JSON.stringify({ text }),
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
        setGenerated(true);
        setCorrected(false);
      }
    } catch (err) {
      console.error(err);
      setError("Error inesperado al generar preguntas");
    } finally {
      setLoading(false);
    }
  };


const handleCheckAll = async () => {
  setLoading(true);
  setError(null);

  try {
    // Construir responses correctamente
    const responses = [];

    ["literal", "inferencial", "global"].forEach((type) => {
      questions[type].forEach((question, idx) => {
        const key = `${type}-${idx}`;
        responses.push({
          question,
          answer: answers[key] || "",
          type,
        });
      });
    });

    const res = await fetch("/api/check-answers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text,
        responses,
      }),
    });

    const data = await res.json();

    if (data.error) {
      setError(data.error);
      setLoading(false);
      return;
    }
    
    // Parseo del texto devuelto por la IA
    // data.feedback es un único string
    const fb = {};
    const resultsMap = {};
    
    const lines = data.feedback
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l.startsWith("Pregunta"));

    lines.forEach((line, idx) => {
      const match = line.match(
        /^Pregunta (\d+):\s*(Correcta|Incorrecta)\.\s*Explicación:\s*(.*)$/i
      );

      if (!match) return;

      const type =
        idx < questions.literal.length
          ? "literal"
          : idx < questions.literal.length + questions.inferencial.length
          ? "inferencial"
          : "global";

      const indexInType =
        type === "literal"
          ? idx
          : type === "inferencial"
          ? idx - questions.literal.length
          : idx -
            questions.literal.length -
            questions.inferencial.length;

      const key = `${type}-${indexInType}`;

      const correctness = match[2];
      const explanation = match[3];

      fb[key] = `${correctness}. Explicación: ${explanation}`;
      resultsMap[key] = correctness.toLowerCase() === "correcta";
    });

    setFeedbacks(fb);
    setResults(resultsMap);
    generateFinalReport(resultsMap);
    setCorrected(true);

  } catch (err) {
    console.error(err);
    setError("Error al corregir las respuestas.");
  } finally {
    setLoading(false);
  }
};

const handleReset = () => {
  setText("");
  setQuestions({ literal: [], inferencial: [], global: [] });
  setAnswers({});
  setFeedbacks({});
  setResults({});
  setScore(null);
  setReport(null);
  setGenerated(false);
  setCorrected(false);
  setError(null);
};

  const generateFinalReport = (res) => {
    let literalCorrect = 0;
    let inferCorrect = 0;
    let globalCorrect = 0;

    let literalTotal = questions.literal.length;
    let inferTotal = questions.inferencial.length;
    let globalTotal = questions.global.length;

    Object.keys(res).forEach((key) => {
      if (key.startsWith("literal") && res[key]) literalCorrect++;
      if (key.startsWith("inferencial") && res[key]) inferCorrect++;
      if (key.startsWith("global") && res[key]) globalCorrect++;
    });

    const totalCorrect = literalCorrect + inferCorrect + globalCorrect;
    const totalQuestions = literalTotal + inferTotal + globalTotal;

    const finalScore = Math.round((totalCorrect / totalQuestions) * 10);

    setScore(finalScore);

    const report = {
      literal:
        literalCorrect === literalTotal
          ? "Excelente comprensión literal."
          : literalCorrect === 0
          ? "Debe mejorar mucho la comprensión literal: extraer información directa del texto."
          : "Comprensión literal parcial, pero puede mejorar en identificar datos explícitos.",

      inferencial:
        inferCorrect === inferTotal
          ? "Excelente comprensión inferencial."
          : inferCorrect === 0
          ? "Debe mejorar mucho la comprensión inferencial: deducir información a partir de pistas."
          : "Comprensión inferencial parcial: debe practicar interpretar información implícita.",

      global:
        globalCorrect === globalTotal
          ? "Excelente comprensión global y del mensaje principal."
          : globalCorrect === 0
          ? "Debe mejorar mucho en comprensión global: captar la idea general y propósito del texto."
          : "Comprensión global parcial: entiende la idea principal, pero debe mejorar.",
    };

    setReport(report);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">LectoCoach - Tu ayudante de comprensión lectora</h1>

      <textarea
        rows={10}
        name="textarea"
        className="border p-2 w-full mb-4"
        placeholder="Pega aquí un texto para generar preguntas..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={handleGenerate}
        disabled={loading || generated || text.trim() === ""}
        className={`px-4 py-2 rounded mb-4 font-semibold transition ${
          loading || generated || text.trim() === ""
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-700 cursor-pointer"
        }`}
      >
        Generar preguntas
      </button>

      {error && <p className="text-red-500">{error}</p>}

      {["literal", "inferencial", "global"].map(
        (type) =>
          questions[type].length > 0 && (
            <div key={type} className="mb-6">
              <h2 className="text-xl font-semibold capitalize mb-2">
                Comprensión <span
                  className={`capitalize ${
                    {
                      literal: "text-blue-400",
                      inferencial: "text-yellow-400",
                      global: "text-green-400",
                    }[type]
                  }`}>
            {type}
          </span>
              </h2>

              {questions[type].map((q, idx) => {
                const key = `${type}-${idx}`;

                return (
                  <div
                    key={key}
                    className="bg-gray-900 mb-4 border p-3 rounded"
                  >
                    <p className="font-medium mb-3">{q}</p>

                    <input
                      type="text"
                      name={key}
                      placeholder="Escribe tu respuesta aquí"
                      className="border p-1 w-full mb-4 bg-black rounded text-white-400"
                      value={answers[key] || ""}
                      onChange={(e) =>
                        setAnswers({ ...answers, [key]: e.target.value })
                      }
                    />

                    {feedbacks[key] && (
                      <p className="mt-1 text-white-400 font-semibold">{feedbacks[key]}</p>
                    )}
                  </div>
                );
              })}
            </div>
          )
      )}

      {(questions.literal.length > 0 ||
        questions.inferencial.length > 0 ||
        questions.global.length > 0) && (
        <button
          onClick={handleCheckAll}
          className={`px-4 py-2 rounded mb-6 text-white font-semibold transition
            ${loading || corrected
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-700 cursor-pointer"
            }`}
          disabled={loading || corrected}
        >
          {loading ? "Corrigiendo..." : "Corregir respuestas"}
        </button>
      )}

      <button
        onClick={handleReset}
        className="bg-red-500 text-white px-4 py-2 rounded mb-6 ml-3 font-semibold 
                  hover:bg-red-700 cursor-pointer transition"
      >
        Reiniciar
      </button>

      {score !== null && report && (
        <div className="mt-8 p-4 border border-gray-700 rounded bg-gray-900 text-gray-100">
          <h2 className="text-2xl font-bold mb-2 text-white">
            Resultados finales
          </h2>

          <p className="text-xl mb-3">
            Nota final: <strong className="text-white-400">{score}/10</strong>
          </p>

          <h3 className="text-lg font-semibold text-white">
            Informe por área:
          </h3>

          <ul className="mt-2 space-y-1">
            <li>
              <strong className="text-blue-400">Literal:</strong>{" "}
              {report.literal}
            </li>
            <li>
              <strong className="text-yellow-400">Inferencial:</strong>{" "}
              {report.inferencial}
            </li>
            <li>
              <strong className="text-green-400">Global:</strong>{" "}
              {report.global}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}