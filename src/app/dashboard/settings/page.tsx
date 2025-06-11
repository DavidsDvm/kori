'use client'

import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { motion } from 'framer-motion'
import {
  User,
  Bell,
  Shield,
  CreditCard,
  Globe,
  Moon,
  Sun,
  LucideIcon,
} from 'lucide-react'

type FieldOption = {
  value: string
  label: string
}

type Field = {
  id: string
  label: string
  type: 'text' | 'email' | 'tel' | 'number' | 'toggle' | 'select'
  value: string | number | boolean
  options?: FieldOption[]
}

type SettingSection = {
  id: string
  name: string
  description: string
  icon: LucideIcon
  fields: Field[]
}

const settings: SettingSection[] = [
  {
    id: 'profile',
    name: 'Profile',
    description: 'Update your personal information and preferences.',
    icon: User,
    fields: [
      {
        id: 'name',
        label: 'Full Name',
        type: 'text',
        value: 'John Doe',
      },
      {
        id: 'email',
        label: 'Email',
        type: 'email',
        value: 'john@example.com',
      },
      {
        id: 'phone',
        label: 'Phone Number',
        type: 'tel',
        value: '+1 (555) 123-4567',
      },
    ],
  },
  {
    id: 'notifications',
    name: 'Notifications',
    description: 'Manage your notification preferences.',
    icon: Bell,
    fields: [
      {
        id: 'email-notifications',
        label: 'Email Notifications',
        type: 'toggle',
        value: true,
      },
      {
        id: 'push-notifications',
        label: 'Push Notifications',
        type: 'toggle',
        value: true,
      },
      {
        id: 'transaction-alerts',
        label: 'Transaction Alerts',
        type: 'toggle',
        value: true,
      },
    ],
  },
  {
    id: 'security',
    name: 'Security',
    description: 'Manage your security settings and preferences.',
    icon: Shield,
    fields: [
      {
        id: '2fa',
        label: 'Two-Factor Authentication',
        type: 'toggle',
        value: true,
      },
      {
        id: 'biometric',
        label: 'Biometric Authentication',
        type: 'toggle',
        value: true,
      },
      {
        id: 'session-timeout',
        label: 'Session Timeout (minutes)',
        type: 'number',
        value: 30,
      },
    ],
  },
  {
    id: 'preferences',
    name: 'Preferences',
    description: 'Customize your Kori experience.',
    icon: Globe,
    fields: [
      {
        id: 'theme',
        label: 'Theme',
        type: 'select',
        value: 'light',
        options: [
          { value: 'light', label: 'Light' },
          { value: 'dark', label: 'Dark' },
          { value: 'system', label: 'System' },
        ],
      },
      {
        id: 'currency',
        label: 'Default Currency',
        type: 'select',
        value: 'USD',
        options: [
          { value: 'USD', label: 'USD' },
          { value: 'EUR', label: 'EUR' },
          { value: 'GBP', label: 'GBP' },
        ],
      },
      {
        id: 'language',
        label: 'Language',
        type: 'select',
        value: 'en',
        options: [
          { value: 'en', label: 'English' },
          { value: 'es', label: 'Spanish' },
          { value: 'fr', label: 'French' },
        ],
      },
    ],
  },
]

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your account settings and preferences.
          </p>
        </div>

        <div className="space-y-6">
          {settings.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg bg-white shadow"
            >
              <div className="px-6 py-4">
                <div className="flex items-center">
                  <section.icon className="h-6 w-6 text-indigo-600" />
                  <div className="ml-4">
                    <h3 className="text-base font-semibold leading-6 text-gray-900">
                      {section.name}
                    </h3>
                    <p className="text-sm text-gray-500">{section.description}</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 px-6 py-4">
                <div className="space-y-4">
                  {section.fields.map((field) => (
                    <div key={field.id} className="flex items-center justify-between">
                      <label
                        htmlFor={field.id}
                        className="text-sm font-medium text-gray-900"
                      >
                        {field.label}
                      </label>
                      <div className="flex items-center">
                        {field.type === 'toggle' ? (
                          <button
                            type="button"
                            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ${
                              field.value ? 'bg-indigo-600' : 'bg-gray-200'
                            }`}
                            role="switch"
                            aria-checked={field.value as boolean}
                          >
                            <span
                              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                                field.value ? 'translate-x-5' : 'translate-x-0'
                              }`}
                            />
                          </button>
                        ) : field.type === 'select' ? (
                          <select
                            id={field.id}
                            name={field.id}
                            className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            defaultValue={field.value as string}
                          >
                            {field.options?.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={field.type}
                            name={field.id}
                            id={field.id}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            defaultValue={field.value as string | number}
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save Changes
          </button>
        </div>
      </div>
    </DashboardLayout>
  )
} 