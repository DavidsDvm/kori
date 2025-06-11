'use client'

import { motion } from 'framer-motion'
import { Github, Heart, Users } from 'lucide-react'

export default function JobsPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Join Our Journey</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Kori is a hackathon project built with passion and vision
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none"
        >
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">About the Project</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Kori was born during a hackathon as a solution to bridge the gap between traditional credit systems and the Web3 world. Our team, led by @DavidsDvm and @valenbustamante, is passionate about making credit accessible to everyone in the crypto space.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <div className="h-px flex-auto bg-gray-100" />
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Our Vision</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
              <li className="flex gap-x-3">
                <Heart className="h-6 w-5 flex-none text-indigo-600" />
                Making credit accessible to everyone in Web3
              </li>
              <li className="flex gap-x-3">
                <Users className="h-6 w-5 flex-none text-indigo-600" />
                Building a community-driven project
              </li>
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Open Source</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">100%</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">Community Driven</span>
                </p>
                <a
                  href="https://github.com/your-org/kori"
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <Github className="h-5 w-5 inline mr-2" />
                  Contribute on GitHub
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  We welcome contributions from developers, designers, and crypto enthusiasts who share our vision.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 p-8"
        >
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">How to Contribute</h3>
          <p className="mt-6 text-base leading-7 text-gray-600">
            While we don't have traditional job openings, we're always looking for passionate individuals to join our open-source community. Here's how you can get involved:
          </p>
          <ul className="mt-8 space-y-4 text-base leading-7 text-gray-600">
            <li className="flex gap-x-3">
              <span className="text-indigo-600">•</span>
              Fork our repository and submit pull requests
            </li>
            <li className="flex gap-x-3">
              <span className="text-indigo-600">•</span>
              Report bugs and suggest new features
            </li>
            <li className="flex gap-x-3">
              <span className="text-indigo-600">•</span>
              Help improve our documentation
            </li>
            <li className="flex gap-x-3">
              <span className="text-indigo-600">•</span>
              Share your ideas and feedback
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
} 