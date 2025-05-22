import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages, topic, context } = await req.json();

    const systemPrompt = `אתה עוזר למידה המתמחה בנושא: ${topic}.
    הקשר השיעור: ${context}
    
    הנחיות:
    1. ספק תשובות ברורות ומותאמות לרמת התלמידים
    2. עודד חשיבה ביקורתית ושאילת שאלות
    3. השתמש בדוגמאות ואנלוגיות להמחשת רעיונות
    4. שמור על שפה ידידותית ומעודדת
    5. הפנה לחומרי העשרה כשרלוונטי`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    return NextResponse.json({ 
      response: completion.choices[0].message.content,
      usage: completion.usage
    });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 