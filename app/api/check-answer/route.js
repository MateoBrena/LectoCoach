import { NextResponse } from "next/server";
import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(process.env.HF_TOKEN);

export async function POST(req) {
  try {
    const { question, answer, text } = await req.json();

    const prompt = `
Eres un profesor de comprensión lectora. 
El estudiante respondió la siguiente pregunta sobre el texto proporcionado.

Texto: """${text}"""
Pregunta: "${question}"
Respuesta del estudiante: "${answer}"

Tu tarea:
- Indica solo si la respuesta es "Correcta" o "Incorrecta".
- Luego, da una explicación muy breve, clara y comprensible para un estudiante.
- No repitas la respuesta del estudiante.
- Devuelve solo un texto de la forma:
Correcta. Explicación: ...

No uses JSON ni marcas adicionales.
`;

    const response = await client.chatCompletion({
      model: "deepseek-ai/DeepSeek-V3.2:novita",
      messages: [{ role: "user", content: prompt }],
    });

    const feedback = response.choices[0].message.content.trim();

    return NextResponse.json({ feedback });
  } catch (error) {
    console.error("Error API Hugging Face:", error);
    return NextResponse.json(
      { error: "Algo salió mal al corregir la respuesta" },
      { status: 500 }
    );
  }
}