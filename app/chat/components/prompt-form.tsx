'use client'

import * as React from 'react'
import Textarea from 'react-textarea-autosize'
import { useChat } from 'ai/react'
import { Button } from '@/components/ui/button'
import { IconArrowElbow, IconPlus } from '@/components/ui/icons'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { useEnterSubmit } from '@/lib/hooks/use-enter-submit'

export function PromptForm() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()
  const { formRef, onKeyDown } = useEnterSubmit()
  const inputRef = React.useRef<HTMLTextAreaElement>(null)
  const fileRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <input
        type="file"
        className="hidden"
        id="file"
        ref={fileRef}
      />
      <div className="relative flex max-h-60 w-full grow flex-col overflow-hidden bg-zinc-100 px-12 sm:rounded-full sm:px-12">
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
          className="min-h-[60px] w-full bg-transparent placeholder:text-zinc-900 resize-none px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
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
          {/* <Tooltip>
            <TooltipTrigger asChild> */}
              <Button
                type="submit"
                size="icon"
                disabled={input === ''}
                className="bg-transparent shadow-none text-zinc-950 rounded-full hover:bg-zinc-200"
              >
                <IconArrowElbow />
                <span className="sr-only">Send message</span>
              </Button>
            {/* </TooltipTrigger> */}
            {/* <TooltipContent>Send message</TooltipContent> */}
          {/* </Tooltip> */}
        </div>
      </div>
    </form>
  )
}