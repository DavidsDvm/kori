'use client'

import { motion } from 'framer-motion'
import { Handshake, TrendingUp, Users, Zap } from 'lucide-react'

export default function PartnersPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Partners</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Join our network of forward-thinking partners in the Web3 ecosystem
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
                <Handshake className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                Why Partner with Kori
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Join us in revolutionizing the Web3 credit landscape. As a partner, you'll have access to our innovative credit infrastructure and a growing community of crypto-native users.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <TrendingUp className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                Growth Opportunities
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Tap into our expanding user base and leverage our credit infrastructure to offer new financial products and services to your customers.
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
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">Partner Benefits</h3>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Zap className="h-6 w-6 text-indigo-600" aria-hidden="true" />
              </div>
              <div className="ml-4">
                <h4 className="text-base font-semibold text-gray-900">Instant Settlements</h4>
                <p className="mt-2 text-base text-gray-600">
                  Receive payments instantly in USDC, eliminating traditional banking delays.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Users className="h-6 w-6 text-indigo-600" aria-hidden="true" />
              </div>
              <div className="ml-4">
                <h4 className="text-base font-semibold text-gray-900">Growing User Base</h4>
                <p className="mt-2 text-base text-gray-600">
                  Access our community of crypto-native users who are ready to spend.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 p-8"
        >
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">Become a Partner</h3>
          <p className="mt-6 text-base leading-7 text-gray-600">
            We're looking for partners who share our vision of making credit accessible in the Web3 world. Whether you're a merchant, DeFi protocol, or blockchain project, we'd love to explore how we can work together.
          </p>
          <div className="mt-8">
            <a
              href="mailto:partners@kori.com"
              className="text-sm font-semibold leading-6 text-indigo-600"
            >
              Contact our Partnership Team
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mx-auto mt-16 max-w-2xl rounded-3xl bg-gray-50 p-8 text-center"
        >
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">Current Partners</h3>
          <p className="mt-6 text-base leading-7 text-gray-600">
            We're currently in the process of building our partner network. Check back soon to see our growing list of partners.
          </p>
        </motion.div>
      </div>
    </div>
  )
} 