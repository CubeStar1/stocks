import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ViewTransitions } from "next-view-transitions"
import { ThemeProvider } from "@/components/ui/theme-provider"
import Navigation from "@/components/ui/navigation"
import Footer from "@/components/ui/footer"
import Image from 'next/image';
import QueryProvider from "@/components/query-provider";
import QueryClientProvider from "@/components/query-provider";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Finly: Stock Quotes, Market News, & Analysis",
  description:
    "Finly is a source of free stock quotes, business and finance news, portfolio management tools, and international market data.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
        <html lang="en" suppressHydrationWarning>
          <body
            className={`${inter.className} min-h-screen bg-background pb-6 antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black`}
          >
            <QueryClientProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
                      <Image src="/bghero.webp" alt="hero" width={100} height={100} className="pointer-events-none absolute -top-20 left-0 right-0 z-0 mx-auto hidden h-full w-full select-none md:block" />

              <Navigation />
              <main className="container">{children}</main>
              {/* <Footer /> */}
            </ThemeProvider>
            </QueryClientProvider>
          </body>
        </html>
  )
}
