import { NextResponse } from "next/server";
import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(process.env.HF_TOKEN);

export async function POST(req) {
  try {
    const { question, answer, text, type } = await req.json();

    const prompt = `
Eres un profesor experto en comprensión lectora.

Texto: """${text}"""

Tipo de pregunta: ${type}

Pregunta del docente: "${question}"
Respuesta del estudiante: "${answer}"

Tu tarea:
1. Indica si la respuesta es "Correcta" o "Incorrecta".
2. Da una explicación muy breve (una o dos frases) adecuada al tipo de comprensión:
   - Si es literal: explica si la información aparece o no directamente en el texto.
   - Si es inferencial: explica si la deducción coincide con las pistas del texto.
   - Si es global: explica si la idea principal o intención general fue entendida.
3. No repitas la respuesta del estudiante.
4. Devuélvelo EXACTAMENTE con este formato:

Correcta. Explicación: ...
o
Incorrecta. Explicación: ...

No agregues texto adicional, ni listas, ni notas, ni JSON.
    `;

    const response = await client.chatCompletion({
      model: "deepseek-ai/DeepSeek-V3.2:novita",
      messages: [{ role: "user", content: prompt }],
    });

    let feedback = response.choices[0].message.content.trim();

    // Normalización extra por si el modelo devuelve adornos
    feedback = feedback
      .replace(/```/g, "")
      .replace(/^[\s\S]*?(Correcta\.|Incorrecta\.)/i, match => match)
      .trim();

    return NextResponse.json({ feedback });

  } catch (error) {
    console.error("Error API Hugging Face:", error);
    return NextResponse.json(
      { error: "Algo salió mal al corregir la respuesta" },
      { status: 500 }
    );
  }
}