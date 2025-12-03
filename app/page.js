"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Generar preguntas
  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    setQuestions([]);
    setAnswers([]);
    setFeedbacks([]);

    try {
      const res = await fetch("/api/generate-questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, level: "primaria" }),
      });

      const data = await res.json();

      if (data.error) {
        setError(data.error);
      } else {
        setQuestions(data.questions);
        setAnswers(Array(data.questions.length).fill(""));
        setFeedbacks(Array(data.questions.length).fill(""));
      }
    } catch (err) {
      console.error(err);
      setError("Error inesperado al generar preguntas");
    } finally {
      setLoading(false);
    }
  };

  // Corregir respuesta individual
  const handleCheckAnswer = async (index) => {
    try {
      const res = await fetch("/api/check-answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: questions[index],
          answer: answers[index],
          text,
        }),
      });
      const data = await res.json();
      const newFeedbacks = [...feedbacks];
      newFeedbacks[index] = data.feedback;
      setFeedbacks(newFeedbacks);
    } catch (err) {
      console.error(err);
      const newFeedbacks = [...feedbacks];
      newFeedbacks[index] = "Error al corregir la respuesta";
      setFeedbacks(newFeedbacks);
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">LectoCoach - Generador y Corrector de Preguntas</h1>

      <textarea
        rows={6}
        className="border p-2 w-full mb-4"
        placeholder="Pega aquí un texto para generar preguntas..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={handleGenerate}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        disabled={loading || !text.trim()}
      >
        {loading ? "Generando..." : "Generar preguntas"}
      </button>

      {error && <p className="text-red-500">{error}</p>}

      {questions.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-2">Preguntas generadas:</h2>
          {questions.map((q, i) => (
            <div key={i} className="mb-4 border p-3 rounded">
              <p className="font-medium">{i + 1}. {q}</p>
              <input
                type="text"
                placeholder="Escribe tu respuesta aquí"
                className="border p-1 w-full mb-2"
                value={answers[i] || ""}
                onChange={(e) => {
                  const newAnswers = [...answers];
                  newAnswers[i] = e.target.value;
                  setAnswers(newAnswers);
                }}
              />
              <button
                className="bg-green-500 text-white px-3 py-1 rounded"
                onClick={() => handleCheckAnswer(i)}
              >
                Revisar respuesta
              </button>
              {feedbacks[i] && (
                <p className="mt-1 text-blue-600">{feedbacks[i]}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}