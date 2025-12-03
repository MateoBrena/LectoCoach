import { NextResponse } from "next/server";
import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(process.env.HF_TOKEN);

export async function POST(req) {
  try {
    const { text, level } = await req.json();

    const prompt = `Actúa como un profesor de comprensión lectora. 
Genera 5 preguntas sobre este texto para un estudiante de nivel ${level}: 
"${text}". Devuelve solo las preguntas en JSON como array de strings.`;

    const response = await client.chatCompletion({
      model: "deepseek-ai/DeepSeek-V3.2:novita",
      messages: [{ role: "user", content: prompt }],
    });

    let raw = response.choices[0].message.content;

    // 🔹 Limpiar bloque Markdown ```json ... ```
    raw = raw.replace(/```json/g, "")
             .replace(/```/g, "")
             .trim();

    let questions = [];
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        // Quitar números iniciales si los hay
        questions = parsed.map(q => q.replace(/^\d+\.\s*/, "").trim());
      } else {
        questions = [String(parsed).trim()];
      }
    } catch {
      // fallback: separar por líneas
      questions = raw.split("\n").map(q => q.trim()).filter(q => q);
    }

    return NextResponse.json({ questions });
  } catch (error) {
    console.error("Error API Hugging Face:", error);
    return NextResponse.json(
      { error: "Algo salió mal con Hugging Face" },
      { status: 500 }
    );
  }
}