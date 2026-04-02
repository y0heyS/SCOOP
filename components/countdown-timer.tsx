"use client"

import { useState, useEffect } from "react"
import { Clock } from "lucide-react"

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // 次の日曜日の23:59を締切として設定
    const getNextDeadline = () => {
      const now = new Date()
      const dayOfWeek = now.getDay()
      const daysUntilSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek
      const deadline = new Date(now)
      deadline.setDate(now.getDate() + daysUntilSunday)
      deadline.setHours(23, 59, 59, 999)
      
      // もし今日が日曜で締切を過ぎていたら、次の日曜
      if (now > deadline) {
        deadline.setDate(deadline.getDate() + 7)
      }
      
      return deadline
    }

    const calculateTimeLeft = () => {
      const deadline = getNextDeadline()
      const now = new Date()
      const difference = deadline.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex items-center gap-1">
      <span className="w-7 rounded bg-stone-900 py-1 text-center text-sm font-bold text-white">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-xs text-stone-600">{label}</span>
    </div>
  )

  return (
    <div className="flex items-center justify-center gap-3 rounded-full border border-stone-300/30 bg-white/40 px-5 py-2.5 backdrop-blur-md">
      <div className="flex items-center gap-1.5">
        <Clock className="h-4 w-4 text-stone-700" />
        <span className="text-sm font-medium text-stone-700">締切</span>
      </div>
      <div className="flex items-center gap-1.5">
        <TimeBlock value={timeLeft.days} label="日" />
        <TimeBlock value={timeLeft.hours} label="時" />
        <TimeBlock value={timeLeft.minutes} label="分" />
        <TimeBlock value={timeLeft.seconds} label="秒" />
      </div>
    </div>
  )
}
