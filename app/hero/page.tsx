import Spline from '@splinetool/react-spline/next';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="relative min-h-[calc(100vh-6rem)] overflow-hidden flex flex-col-reverse lg:flex-row">
      <div className="absolute top-4 left-4 z-10">
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm">
          New: AI-powered stock predictions →
        </button>
      </div>
      
      <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left z-10 px-4 lg:px-8">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">Smart investing for everyone</h1>
        <p className="text-lg lg:text-xl mb-8 max-w-xl">
          Track stocks, analyze market trends, and make informed investment decisions.
          Your all-in-one platform for financial growth.
        </p>
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          <button className="bg-green-500 text-white font-bold py-3 px-6 rounded-full hover:bg-green-600 transition">
            Start Investing
          </button>
          <button className="border border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-black transition">
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
  );
}