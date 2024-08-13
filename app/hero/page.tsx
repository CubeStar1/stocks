import Spline from '@splinetool/react-spline/next';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { IconType } from 'react-icons';
import { FaChartLine, FaRobot, FaNewspaper, FaUsers, FaLightbulb, FaMobileAlt } from 'react-icons/fa';
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Bento from "@/components/hero/bento";



export default function Home() {
  return (

    <div className='flex flex-col overflow-auto'>
      <main className="relative min-h-[calc(100vh-8rem)] overflow-hidden flex flex-col-reverse mt-8 gap-4 lg:flex-row">
        <div className="absolute top-4 left-8 z-10">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  New: AI-powered stock prediction and analysis
              </span>
          </button>   
        </div>
        
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left z-10 px-4 lg:px-8">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">Smart investing for everyone</h1>
          <p className="text-lg lg:text-xl mb-8 max-w-xl">
            Track stocks, analyze market trends, and make informed investment decisions.
            Your all-in-one platform for financial growth.
          </p>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            <button className="bg-white text-black font-bold py-3 px-6 rounded-full hover:bg-gray-300 transition">
              Start Investing
            </button>
            <button className="border-2 border-white  text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex-1 relative mt-8 hidden lg:block lg:mt-0">
          <Spline
            scene="https://prod.spline.design/e1uhNiRlzcOoZgHp/scene.splinecode" 
            className="absolute inset-0 w-full h-full"
          />
        </div>

        <div className = "flex-1 relative mt-8 sm:hidden">
          <Spline
            scene="https://prod.spline.design/e1uhNiRlzcOoZgHp/scene.splinecode" 
            className="absolute inset-0 w-full h-full"
            style={{ width: '100%', height: '300%' }}
          />
        </div>

        <div className="flex-1 relative mt-8 hidden md:block lg:hidden">
          <Spline
            scene="https://prod.spline.design/e1uhNiRlzcOoZgHp/scene.splinecode" 
            className="absolute inset-0 w-full h-full"
            style={{ width: '100%', height: '300%' }}
          />
        </div>
      </main>


      <section className='flex flex-col items-center justify-center py-16 px-4'>
        <h2 className='text-4xl font-bold mb-12'>Smart investing for everyone</h2>
        <Bento />
      </section>
    </div>
  );
}