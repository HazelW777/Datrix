"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function LandingPage() {
  const router = useRouter()

  useEffect(() => {
    // For demo purposes, redirect to dashboard
    // In a real app, you'd check authentication status here
    router.push("/dashboard")
  }, [router])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
          <div className="w-5 h-5 bg-white rounded" />
        </div>
        <p className="text-slate-600">Redirecting to dashboard...</p>
      </div>
    </div>
  )
}
