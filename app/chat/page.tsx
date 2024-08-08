import { Suspense } from 'react'
import { ChatComponent } from '@/app/chat/components/ChatComponent'

export default function ChatPage() {
    

  return (
    <main className="flex flex-col  ">
      {/* <main className=""> */}
        {/* <Suspense fallback={<div>Loading...</div>}> */}
          {/* <Sidebar /> */}
        {/* </Suspense> */}
        <ChatComponent />
      {/* </main> */}
    </main>
  )
}