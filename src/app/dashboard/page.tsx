'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUserStore } from '@/store/user'
import { useCreditScore } from '@/hooks/useCreditScore'
import { useCreditLineCalculation } from '@/hooks/useCreditLineCalculation'
import { useTransactionHistory } from '@/hooks/useTransactionHistory'
import { useRepaymentHistory } from '@/hooks/useRepaymentHistory'
import { Card } from '@/components/ui/card'
import { CreditScore } from '@/components/dashboard/credit-score'
import { CreditLine } from '@/components/dashboard/credit-line'
import { TransactionHistory } from '@/components/dashboard/transaction-history'
import { RepaymentSchedule } from '@/components/dashboard/repayment-schedule'

export default function DashboardPage() {
  const router = useRouter()
  const { user } = useUserStore()
  const { score, factors } = useCreditScore()
  const { storeLimit, cardLimit, totalLimit } = useCreditLineCalculation()
  const { transactions } = useTransactionHistory()
  const { repayments } = useRepaymentHistory()

  useEffect(() => {
    if (!user) {
      router.push('/')
    }
  }, [user, router])

  if (!user) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Credit Score Card */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Credit Score</h2>
          <CreditScore score={score} factors={factors} />
        </Card>

        {/* Credit Line Card */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Credit Limits</h2>
          <CreditLine
            storeLimit={storeLimit}
            cardLimit={cardLimit}
            totalLimit={totalLimit}
          />
        </Card>

        {/* Recent Activity Card */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Recent Transactions</h3>
              <TransactionHistory transactions={transactions.slice(0, 3)} />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Recent Repayments</h3>
              <RepaymentSchedule repayments={repayments.slice(0, 3)} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
} 