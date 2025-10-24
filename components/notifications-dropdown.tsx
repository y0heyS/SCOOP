"use client"

import { Bell } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface Notification {
  id: string
  title: string
  message: string
  time: string
  read: boolean
  link?: string
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    title: "Prediction Result",
    message: "Your prediction for October 20 has been judged!",
    time: "2 hours ago",
    read: false,
    link: "/results/1",
  },
  {
    id: "2",
    title: "New Round Started",
    message: "Tomorrow's prediction round is now open",
    time: "5 hours ago",
    read: false,
  },
  {
    id: "3",
    title: "Payout Received",
    message: "You received 2.5 USDC for your winning prediction",
    time: "1 day ago",
    read: true,
  },
]

export function NotificationsDropdown() {
  const unreadCount = mockNotifications.filter((n) => !n.read).length

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative h-10 w-10">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">
              {unreadCount}
            </span>
          )}
          <span className="sr-only">Notifications</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <div className="px-4 py-3 border-b">
          <h3 className="font-semibold text-sm">Notifications</h3>
        </div>
        {mockNotifications.length === 0 ? (
          <div className="px-4 py-8 text-center text-sm text-muted-foreground">No notifications yet</div>
        ) : (
          <div className="max-h-[400px] overflow-y-auto">
            {mockNotifications.map((notification) => {
              const content = (
                <DropdownMenuItem
                  key={notification.id}
                  className="flex flex-col items-start gap-1 px-4 py-3 cursor-pointer"
                >
                  <div className="flex w-full items-start justify-between gap-2">
                    <div className="flex-1">
                      <p className="text-sm font-medium leading-none">{notification.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{notification.message}</p>
                    </div>
                    {!notification.read && <span className="mt-1 h-2 w-2 rounded-full bg-orange-500" />}
                  </div>
                  <span className="text-xs text-muted-foreground">{notification.time}</span>
                </DropdownMenuItem>
              )

              return notification.link ? (
                <Link key={notification.id} href={notification.link}>
                  {content}
                </Link>
              ) : (
                content
              )
            })}
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
