'use client'

import * as React from 'react'
import { useChat } from 'ai/react'
import Textarea from 'react-textarea-autosize'
import Markdown from "react-markdown"
import { Button } from '@/components/ui/button'
import { IconArrowElbow, IconPlus } from '@/components/ui/icons'
import { useEnterSubmit } from '@/lib/hooks/use-enter-submit'
import { IconGemini, IconUser } from '@/components/ui/icons'
import Image from 'next/image'

export function ChatComponent() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()
  const { formRef, onKeyDown } = useEnterSubmit()
  const inputRef = React.useRef<HTMLTextAreaElement>(null)
  const fileRef = React.useRef<HTMLInputElement>(null)
  const messagesEndRef = React.useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto px-4 h-[calc(100vh-6rem)]">
      <div className="flex-1 overflow-y-auto scrollbar-hide ">
        <div className="flex-col space-y-4 mb-4">
          {messages.map(m => (
            <div key={m.id} className="flex items-start">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${m.role === 'user' ? 'bg-white-500' : 'bg-white-500'}`}>
                {m.role === 'user' ? <IconUser /> : <Image src="/gemini-logo.webp" alt="Gemini Logo" width={32} height={32} />}
              </div>
              <div className="flex-1">
                <Markdown className="prose">{m.content}</Markdown>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="sticky bottom-0  py-4"
      >
        <input
          type="file"
          className="hidden"
          id="file"
          ref={fileRef}
        />
        <div className="relative flex max-h-60 w-full grow flex-col overflow-hidden bg-zinc-100 px-12 rounded-full sm:rounded-full sm:px-12">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-[14px] size-8 rounded-full bg-background p-0 sm:left-4"
            onClick={() => {
              fileRef.current?.click()
            }}
          >
            <IconPlus />
            <span className="sr-only">New Chat</span>
          </Button>
          <Textarea
            ref={inputRef}
            tabIndex={0}
            onKeyDown={onKeyDown}
            placeholder="Send a message."
            className="min-h-[60px] w-full bg-transparent text-black placeholder:text-zinc-900 resize-none px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
            autoFocus
            spellCheck={false}
            autoComplete="off"
            autoCorrect="off"
            name="message"
            rows={1}
            value={input}
            onChange={handleInputChange}
          />
          <div className="absolute right-4 top-[13px] sm:right-4">
            <Button
              type="submit"
              size="icon"
              disabled={input === ''}
              className="bg-transparent shadow-none text-zinc-950 rounded-full hover:bg-zinc-200"
            >
              <IconArrowElbow />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ChatComponent