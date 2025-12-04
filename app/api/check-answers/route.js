import { NextResponse } from "next/server";
import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(process.env.HF_TOKEN);

export async function POST(req) {
  try {
    const { text, responses } = await req.json();

    let blocks = responses.map((r, i) => `
        Pregunta ${i + 1}:
        Tipo: ${r.type}
        Pregunta del docente: "${r.question}"
        Respuesta del estudiante: "${r.answer}"
        `).join("\n");

    const prompt = `
    Eres un profesor experto en comprensión lectora.

    Texto a analizar:
    """${text}"""

    A continuación recibirás varias preguntas del docente, cada una con la respuesta del estudiante y el tipo de comprensión (literal, inferencial o global).

    Tu tarea PARA CADA PREGUNTA es:
    1. Indicar si la respuesta es "Correcta" o "Incorrecta".
    2. Dar una explicación muy breve (1-2 frases) adecuada al tipo de comprensión:
        - Literal → si aparece explícitamente o no en el texto.
        - Inferencial → si la deducción coincide con las pistas del texto.
        - Global → si el estudiante entendió la idea principal.
    3. No repetir la respuesta del estudiante.
    4. Devolver el resultado con **el siguiente formato EXCLUSIVO**:

    Para cada pregunta:
    Pregunta X: Correcta. Explicación: ...
    o
    Pregunta X: Incorrecta. Explicación: ...

    No utilices listas, no agregues texto extra, no agregues JSON ni markdown.

    Aquí están las preguntas:

    ${blocks}`;

    const response = await client.chatCompletion({
      model: "openai/gpt-oss-20b:cheapest",
      messages: [{ role: "user", content: prompt }],
    });

    let raw = response.choices[0].message.content.trim();

    return NextResponse.json({ feedback: raw });

  } catch (error) {
    console.error("Error API Hugging Face:", error);
    return NextResponse.json(
      { error: "Algo salió mal al corregir las respuestas" },
      { status: 500 }
    );
  }
}