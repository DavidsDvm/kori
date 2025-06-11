'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  CreditCard,
  Store,
  TrendingUp,
  Users,
  Settings,
  BarChart3,
} from 'lucide-react'

const navigation = [
  { name: 'Overview', href: '/dashboard', icon: BarChart3 },
  { name: 'Credit Score', href: '/dashboard/credit', icon: TrendingUp },
  { name: 'Merchants', href: '/dashboard/merchants', icon: Store },
  { name: 'Card', href: '/dashboard/card', icon: CreditCard },
  { name: 'Referrals', href: '/dashboard/referrals', icon: Users },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="min-h-full">
      <div className="flex min-h-full">
        {/* Sidebar */}
        <div className="hidden w-64 flex-col lg:flex">
          <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <nav className="mt-5 flex-1 space-y-1 bg-white px-2">
                {navigation.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`group flex items-center rounded-md px-2 py-2 text-sm font-medium ${
                        isActive
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <item.icon
                        className={`mr-3 h-6 w-6 flex-shrink-0 ${
                          isActive ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500'
                        }`}
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  )
                })}
              </nav>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-1 flex-col">
          <main className="flex-1">
            <div className="py-6">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
} 