'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CreditCard, Shield, Users } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl lg:mx-0"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About Kori</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We're revolutionizing the way people access credit in the Web3 world, making it possible to turn your MetaMask debit card into a true credit card while helping merchants get paid instantly.
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
                <CreditCard className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                Our Mission
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">To democratize access to credit in the Web3 ecosystem by leveraging on-chain data and smart contracts to create a fair, transparent, and efficient credit system.</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Shield className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                Our Vision
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">A world where everyone has access to fair credit based on their on-chain reputation, and merchants can receive instant payments without the traditional banking delays.</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Users className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                Our Team
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Built by passionate developers and fintech experts who believe in the power of blockchain technology to transform traditional financial services.</p>
              </dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-32 sm:mt-40"
        >
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Join us in building the future of Web3 credit
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              We're always looking for talented individuals who share our vision and want to make a difference in the world of decentralized finance.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/jobs"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                View Open Positions
                <ArrowRight className="ml-2 -mr-1 h-4 w-4 inline" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 