'use client'

import { motion } from 'framer-motion'
import { Download, Mail, FileText } from 'lucide-react'

export default function PressPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Press & Media</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Resources and information for journalists and media professionals
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <FileText className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                Press Kit
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Download our press kit containing company information, logos, and key facts about Kori.
                </p>
                <p className="mt-6">
                  <a href="#" className="text-sm font-semibold leading-6 text-indigo-600 inline-flex items-center">
                    <Download className="h-4 w-4 mr-2" />
                    Download Press Kit
                  </a>
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Mail className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                Media Inquiries
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  For media inquiries, interviews, or additional information, please contact our press team.
                </p>
                <p className="mt-6">
                  <a href="mailto:press@kori.com" className="text-sm font-semibold leading-6 text-indigo-600">
                    press@kori.com
                  </a>
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <FileText className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                Brand Assets
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Access our brand guidelines, logos, and other visual assets for media use.
                </p>
                <p className="mt-6">
                  <a href="#" className="text-sm font-semibold leading-6 text-indigo-600 inline-flex items-center">
                    <Download className="h-4 w-4 mr-2" />
                    Download Assets
                  </a>
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
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">Latest News</h3>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Kori is currently in development as a hackathon project. We'll be sharing our progress and announcements here as we move forward with our vision of revolutionizing Web3 credit.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-indigo-600"
            >
              Subscribe to our press releases
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 