import { NextResponse } from "next/server";
import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(process.env.HF_TOKEN);

export async function POST(req) {
  try {
    const { text } = await req.json();

    const prompt = `
Actúa como un profesor experto en comprensión lectora.

Genera 8 preguntas sobre el siguiente texto, divididas así:
- 3 preguntas de comprensión literal
- 3 preguntas de comprensión inferencial
- 2 preguntas de comprensión global

Texto: """${text}"""

Devuelve un JSON con este formato exacto:
{
  "literal": ["...", "...", "..."],
  "inferencial": ["...", "...", "..."],
  "global": ["...", "..."]
}
NO agregues explicaciones, comentarios ni texto adicional.
    `;

    const response = await client.chatCompletion({
      model: "openai/gpt-oss-20b:cheapest",
      messages: [{ role: "user", content: prompt }],
    });

    let raw = response.choices[0].message.content.trim();
  
    let parsed;

    try {
      parsed = JSON.parse(raw);
    } catch (err) {
      console.error("No se pudo parsear JSON. Respuesta cruda:", raw);
      return NextResponse.json(
        { error: "El modelo devolvió una respuesta inválida." },
        { status: 500 }
      );
    }

    // Validación mínima
    if (
      !parsed.literal ||
      !parsed.inferencial ||
      !parsed.global ||
      !Array.isArray(parsed.literal) ||
      !Array.isArray(parsed.inferencial) ||
      !Array.isArray(parsed.global)
    ) {
      return NextResponse.json(
        { error: "El JSON generado no tiene el formato esperado." },
        { status: 500 }
      );
    }

    return NextResponse.json({ questions: parsed });

  } catch (error) {
    console.error("Error API Hugging Face:", error);
    return NextResponse.json(
      { error: "Error inesperado al generar preguntas" },
      { status: 500 }
    );
  }
}

