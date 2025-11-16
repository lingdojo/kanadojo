"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, toast } from "sonner"
import { HugeiconsIcon } from '@hugeicons/react'
import { AwardIcon as TrophyIcon } from '@hugeicons/core-free-icons'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

interface AchievementToastOptions {
  title: string
  description: string
  icon: string
  points: number
  onClick?: () => void
}

const achievementToast = ({ title, description, icon, points, onClick }: AchievementToastOptions) => {
  toast.custom(
    (t) => (
      <div
        onClick={() => {
          onClick?.()
          toast.dismiss(t)
        }}
        className="w-80 p-4 bg-[var(--card)] border-[var(--border)] border-2 border-l-4 border-l-yellow-500 rounded-lg cursor-pointer"
      >
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-yellow-100 text-yellow-600 text-lg font-bold">
              {icon}
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <HugeiconsIcon icon={TrophyIcon} size={14} color="currentColor" className="text-yellow-500" />
              <span className="text-xs font-semibold text-yellow-600 uppercase tracking-wide">
                Achievement Unlocked
              </span>
            </div>
            <h4 className="font-semibold text-[var(--foreground)] text-sm mb-1 truncate">
              {title}
            </h4>
            <p className="text-xs text-[var(--muted-foreground)] line-clamp-2">
              {description}
            </p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-yellow-600 font-medium">
                +{points} points
              </span>
              <span className="text-xs text-[var(--muted-foreground)]">
                Click to view
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      duration: 8000,
      position: 'top-right',
    }
  )
}

export { Toaster, achievementToast }
