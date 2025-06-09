import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Sidebar } from "@/components/sidebar"
import { AnalysisProvider } from "@/contexts/analysis-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Datrix - Your Virtual Data Team",
  description: "AI-powered data analysis tool for business professionals",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnalysisProvider>
          <div className="flex h-screen bg-slate-50">
            <Sidebar />
            <main className="flex-1 overflow-auto">{children}</main>
          </div>
        </AnalysisProvider>
      </body>
    </html>
  )
}
