import { ChatWrapper } from "./components/ChatWrapper"
import { ragChat } from "@/lib/rag-chat/ragchat"
import { redis } from "@/lib/redis/redis"
import { cookies } from "next/headers"
import { NextUIProvider } from "@nextui-org/react"

interface PageProps {
  params: {
    url: string | string[] | undefined
  }
}

function reconstructUrl({ url }: { url: string[] }) {
  const decodedComponents = url.map((component) => decodeURIComponent(component))

  return decodedComponents.join("/")
}

const Page = async ({ params }: PageProps) => {
  const sessionCookie = cookies().get("sessionId")?.value
  const reconstructedUrl = reconstructUrl({ url: params.url as string[] })

  const sessionId = (reconstructedUrl + "--" + sessionCookie).replace(/\//g, "")

  const isAlreadyIndexed = await redis.sismember("indexed-urls", reconstructedUrl)

  const initialMessages = await ragChat.history.getMessages({ amount: 10, sessionId })

  if (!isAlreadyIndexed) {
    await ragChat.context.add({
      type: "html",
      source: reconstructedUrl,
      config: { chunkOverlap: 50, chunkSize: 200 },
    })

    await redis.sadd("indexed-urls", reconstructedUrl)
  }

  return (
    <NextUIProvider>
      <main className="h-[calc(100vh-100px)] dark text-foreground">
        <ChatWrapper sessionId={sessionId} initialMessages={initialMessages} />
      </main>
    </NextUIProvider>
  )
}

export default Page