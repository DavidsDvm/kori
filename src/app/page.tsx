'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useUserStore } from '@/store/user'
import { WalletConnect } from '@/components/wallet-connect'
import { motion } from 'framer-motion'
import { ArrowRight, CreditCard, Store, TrendingUp } from 'lucide-react'

export default function HomePage() {
  const router = useRouter()
  const { user } = useUserStore()

  useEffect(() => {
    if (user) {
      router.push('/dashboard')
    }
  }, [user, router])

  const features = [
    {
      title: 'Credit Card Conversion',
      description: 'Turn your MetaMask debit card into a true revolving credit card.',
      icon: CreditCard,
    },
    {
      title: 'Instant Merchant Payments',
      description: 'Merchants get paid in seconds with instant USDC settlements.',
      icon: Store,
    },
    {
      title: 'Build Credit Score',
      description: 'Build your credit score with every transaction and repayment.',
      icon: TrendingUp,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Turn Your MetaMask Debit Card into Credit
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Kori converts your MetaMask debit card into a true revolving credit card while providing instant liquidity to merchants.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-10 flex items-center gap-x-6"
                >
                  <WalletConnect />
                  <a
                    href="#features"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 flex items-center justify-center relative">
            {/* Geometric Background */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <svg
                width="800"
                height="800"
                viewBox="0 0 800 800"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[120%] h-[120%]"
              >
                <path
                  d="M800 0H300v250L0 400v200l300 200v0.2h200v-0.2l300-200h200V0z"
                  fill="#4F46E5"
                  className="opacity-10"
                />
                <path
                  d="M750 50H350v200L100 375v150l250 175v0.1h150v-0.1l250-175h150V50z"
                  fill="#4F46E5"
                  className="opacity-5"
                />
              </svg>
            </div>
            <Image 
              src="/images/metamask-card4x.avif" 
              alt="metamask card" 
              width={500} 
              height={500}
              className="w-full h-auto max-w-lg relative z-10"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Deploy faster
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to deploy your app
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Kori provides a complete solution for converting MetaMask debit cards into credit cards while ensuring instant merchant payments.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col"
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon
                      className="h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    {feature.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-indigo-600"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start building your credit today
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Connect your wallet and start using Kori to build your credit score while enjoying instant merchant payments.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <WalletConnect />
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
