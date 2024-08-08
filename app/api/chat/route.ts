import { google } from '@ai-sdk/google';
import { streamText, StreamData } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const data = new StreamData();
  data.append({ test: 'value' });

  try {
    const result = await streamText({
      model: google('models/gemini-1.5-pro-latest'),
      messages,
      onFinish() {
        data.close();
      },
    });

    return result.toDataStreamResponse({ data });
  } catch (error) {
    console.error('Error in chat stream:', error);
    data.close();
    return new Response('Error in chat stream', { status: 500 });
  } finally {
    // Ensure data is closed even if there's an error
    if (!data.close) {
      data.close();
    }
  }
}