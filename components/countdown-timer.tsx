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
    <div className="flex flex-col items-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-stone-900 md:h-16 md:w-16">
        <span className="text-xl font-bold text-white md:text-2xl">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="mt-1 text-xs text-stone-600">{label}</span>
    </div>
  )

  return (
    <div className="rounded-2xl border border-stone-300/30 bg-white/40 p-5 backdrop-blur-md">
      <div className="mb-4 flex items-center justify-center gap-2">
        <Clock className="h-5 w-5 text-stone-900" />
        <span className="font-medium text-stone-900">予測締切まで</span>
      </div>
      <div className="flex items-center justify-center gap-2 md:gap-3">
        <TimeBlock value={timeLeft.days} label="日" />
        <span className="text-2xl font-bold text-stone-400">:</span>
        <TimeBlock value={timeLeft.hours} label="時間" />
        <span className="text-2xl font-bold text-stone-400">:</span>
        <TimeBlock value={timeLeft.minutes} label="分" />
        <span className="text-2xl font-bold text-stone-400">:</span>
        <TimeBlock value={timeLeft.seconds} label="秒" />
      </div>
    </div>
  )
}
