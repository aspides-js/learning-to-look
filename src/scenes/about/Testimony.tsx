import useMediaQuery from '@/hooks/useMediaQuery';
import { useState } from 'react';

type Props = {
  quote: string;
  writer: string;
};

type TestimonyProps = {
  items: Props[];
};

const Testimony = ({ items }: TestimonyProps) => {
  // const [hoveredId, setHoveredId] = useState<string | null>(null);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div className={`grid ${isAboveMediumScreens ? 'grid-cols-3' : 'grid-cols-1'} gap-6 w-full`}>
      {items.map((item, index) => (
        <div key={index}>
          <p className="text-text-primary font-sans">{item.quote}</p>
          <p className="text-sm mt-4 text-text-primary font-sans italic">{item.writer}</p>
        </div>
      ))} 
    </div>  

  );
};

export default Testimony;