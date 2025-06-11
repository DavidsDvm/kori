'use client'

import { motion } from 'framer-motion'
import { Accessibility, Eye, Keyboard, Volume2 } from 'lucide-react'

export default function AccessibilityPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Accessibility</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Our commitment to making Kori accessible to everyone
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Accessibility className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                Our Commitment
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  At Kori, we believe that financial services should be accessible to everyone. We are committed to ensuring that our platform is usable by people of all abilities, including those with disabilities.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Eye className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                Visual Accessibility
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Our platform supports screen readers, offers high contrast modes, and maintains clear visual hierarchy to ensure content is readable for all users.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Keyboard className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                Keyboard Navigation
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  All features can be accessed using keyboard navigation, with clear focus indicators and logical tab order throughout the interface.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Volume2 className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                Audio & Video
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  All multimedia content includes captions, transcripts, and audio descriptions to ensure equal access to information.
                </p>
              </dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 p-8"
        >
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">Standards & Compliance</h3>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Our platform is designed to meet or exceed WCAG 2.1 Level AA standards. We continuously test and improve our accessibility features to ensure the best possible experience for all users.
          </p>
          <div className="mt-8">
            <h4 className="text-base font-semibold leading-7 text-gray-900">Key Features</h4>
            <ul className="mt-4 space-y-4 text-base leading-7 text-gray-600">
              <li className="flex gap-x-3">
                <span className="text-indigo-600">•</span>
                Screen reader compatibility
              </li>
              <li className="flex gap-x-3">
                <span className="text-indigo-600">•</span>
                Keyboard navigation support
              </li>
              <li className="flex gap-x-3">
                <span className="text-indigo-600">•</span>
                High contrast mode
              </li>
              <li className="flex gap-x-3">
                <span className="text-indigo-600">•</span>
                Resizable text
              </li>
              <li className="flex gap-x-3">
                <span className="text-indigo-600">•</span>
                Alternative text for images
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 p-8"
        >
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">Feedback & Support</h3>
          <p className="mt-6 text-base leading-7 text-gray-600">
            We welcome feedback on our accessibility features. If you encounter any issues or have suggestions for improvement, please contact our support team.
          </p>
          <div className="mt-8">
            <a
              href="mailto:accessibility@kori.com"
              className="text-sm font-semibold leading-6 text-indigo-600"
            >
              Contact Accessibility Support
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 