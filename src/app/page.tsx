import { Arrows } from '@/components/Arrows'
import { Card01 } from '@/components/Card01'
import { DailyMix } from '@/components/DailyMix'
import { Footer } from '@/components/Footer'
import { Sidebar } from '@/components/Sidebar'

export default function Home() {
  return (
    <div className=' h-screen flex flex-col'>
      <div className=' flex flex-1'>
        <Sidebar />

        <main className=' flex-1 p-6 mb-36'>

          <Arrows />

          <h1 className=' font-semibold text-3xl mt-10 mb-5'>Good morning</h1>
          <div className=' grid grid-cols-3 gap-6'>
            <Card01 />

            <Card01 />

            <Card01 />

            <Card01 />

            <Card01 />

            <Card01 />
          </div>

          <h2 className=' font-semibold text-2xl mt-10'>Made for Zira</h2>
          <div className=' grid grid-cols-5 gap-4 mt-4'>
            <DailyMix />

            <DailyMix />

            <DailyMix />

            <DailyMix />

            <DailyMix />
          </div>

        </main>

        <Footer />
      </div>
      
    </div>
  )
}
