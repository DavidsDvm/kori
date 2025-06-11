'use client'

import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { motion } from 'framer-motion'
import { Search, MapPin, Star, ShoppingBag } from 'lucide-react'

const merchants = [
  {
    id: 1,
    name: 'Tech Haven',
    category: 'Electronics',
    rating: 4.8,
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    description: 'Premium electronics and gadgets store with instant USDC payments.',
  },
  {
    id: 2,
    name: 'Fashion Forward',
    category: 'Clothing',
    rating: 4.5,
    location: 'Los Angeles, CA',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    description: 'Trendy fashion store accepting Kori credit with instant settlements.',
  },
  {
    id: 3,
    name: 'Home Essentials',
    category: 'Home & Living',
    rating: 4.7,
    location: 'Chicago, IL',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    description: 'Your one-stop shop for home decor and essentials.',
  },
  {
    id: 4,
    name: 'Gourmet Delights',
    category: 'Food & Dining',
    rating: 4.9,
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    description: 'Fine dining experience with instant USDC payments.',
  },
]

export default function MerchantsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Merchants</h1>
          <p className="mt-1 text-sm text-gray-500">
            Browse and shop at Kori partner merchants with instant USDC settlements.
          </p>
        </div>

        {/* Search */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            className="block w-full rounded-lg border-0 py-3 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Search merchants..."
          />
        </div>

        {/* Merchant Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {merchants.map((merchant) => (
            <motion.div
              key={merchant.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none sm:h-48">
                <img
                  src={merchant.image}
                  alt={merchant.name}
                  className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {merchant.name}
                  </a>
                </h3>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm text-gray-500">{merchant.rating}</span>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">{merchant.category}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <MapPin className="h-4 w-4" />
                  <span>{merchant.location}</span>
                </div>
                <p className="text-sm text-gray-500">{merchant.description}</p>
                <div className="mt-4 flex flex-1 items-end justify-between">
                  <div className="flex items-center space-x-2">
                    <ShoppingBag className="h-5 w-5 text-indigo-600" />
                    <span className="text-sm font-medium text-indigo-600">
                      Shop Now
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
} 