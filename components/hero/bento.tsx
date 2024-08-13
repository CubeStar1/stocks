import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { FaChartLine, FaRobot, FaNewspaper, FaUsers, FaLightbulb, FaMobileAlt } from 'react-icons/fa';


export default function Bento() {
    return (
      <BentoGrid className="max-w-6xl mx-auto">
        {features.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={<Skeleton />}
            icon={<item.icon className="h-4 w-4 text-blue-500" />}
            className=""
          />
        ))}
      </BentoGrid>
    );
  }
  
  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  );
  
  const features = [
    {
      icon: FaChartLine,
      title: 'Real-time Market Analysis',
      description: 'Get up-to-the-minute market data and trends to make informed decisions.',
    },
    {
      icon: FaRobot,
      title: 'AI-powered Predictions',
      description: 'Leverage machine learning algorithms for stock performance forecasts.',
    },
    {
      icon: FaNewspaper,
      title: 'Financial News Integration',
      description: 'Stay informed with curated news that impacts your investments.',
    },
    {
      icon: FaUsers,
      title: 'Social Trading',
      description: 'Connect with other investors and share strategies.',
    },
    {
      icon: FaLightbulb,
      title: 'Personalized Insights',
      description: 'Receive tailored investment recommendations based on your profile.',
    },
    {
      icon: FaMobileAlt,
      title: 'Mobile Trading',
      description: 'Trade on-the-go with our powerful mobile app.',
    },
  ];