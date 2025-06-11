import { useState, useCallback } from 'react'

interface Notification {
  id: string
  type: 'success' | 'error' | 'info' | 'warning'
  message: string
  duration?: number
}

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([])

  const addNotification = useCallback(
    (notification: Omit<Notification, 'id'>) => {
      const id = Math.random().toString(36).substring(7)
      const newNotification = { ...notification, id }
      setNotifications((prev) => [...prev, newNotification])

      if (notification.duration !== 0) {
        setTimeout(() => {
          removeNotification(id)
        }, notification.duration || 5000)
      }
    },
    []
  )

  const removeNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id))
  }, [])

  const success = useCallback(
    (message: string, duration?: number) => {
      addNotification({ type: 'success', message, duration })
    },
    [addNotification]
  )

  const error = useCallback(
    (message: string, duration?: number) => {
      addNotification({ type: 'error', message, duration })
    },
    [addNotification]
  )

  const info = useCallback(
    (message: string, duration?: number) => {
      addNotification({ type: 'info', message, duration })
    },
    [addNotification]
  )

  const warning = useCallback(
    (message: string, duration?: number) => {
      addNotification({ type: 'warning', message, duration })
    },
    [addNotification]
  )

  return {
    notifications,
    addNotification,
    removeNotification,
    success,
    error,
    info,
    warning,
  }
} 