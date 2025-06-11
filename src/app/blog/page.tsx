'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export default function BlogPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Kori Blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Insights, updates, and stories from the world of Web3 credit
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-1"
        >
          <article className="flex flex-col items-start">
            <div className="relative w-full">
              {/* Image placeholder - Replace with actual blog image */}
              <div className="aspect-[16/9] w-full rounded-2xl bg-gray-100 sm:aspect-[2/1] lg:aspect-[3/2]">
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
            <div className="max-w-xl">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <time dateTime="2024-03-16" className="text-gray-500 flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  March 16, 2024
                </time>
                <span className="text-gray-500 flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  5 min read
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0" />
                    The Future of Credit: How Web3 is Revolutionizing Traditional Lending
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  In this inaugural post, we explore how blockchain technology and smart contracts are transforming the traditional credit system. We'll dive into how Kori is leveraging on-chain data to create a more fair and efficient credit scoring system, and what this means for both consumers and merchants in the Web3 ecosystem.
                </p>
              </div>
            </div>
          </article>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="rounded-2xl bg-gray-50 p-8">
            <h3 className="text-lg font-semibold leading-8 text-gray-900">More Posts Coming Soon</h3>
            <p className="mt-4 text-base leading-7 text-gray-600">
              We're working on more exciting content about Web3 credit, DeFi, and the future of finance. Stay tuned!
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-indigo-600 inline-flex items-center"
              >
                Subscribe to our newsletter
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 