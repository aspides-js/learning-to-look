import Navbar from "@/scenes/navbar";
import Testimony from '@/scenes/about/Testimony';
import webpageHomeSmall from '@/assets/webpage_home_small.png';
import type { SectionType } from '@/shared/types';
import { useSectionObserver } from '@/hooks/useSectionObserver';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useEffect, useState } from 'react';
import handImg from '@/assets/hand.png';

type Props = {
  onBack: () => void;
  selectedSection: SectionType;
  setSelectedSection: (value: SectionType) => void;
}

const IntroPage = ({ selectedSection, setSelectedSection }: Props) => {useSectionObserver({ setSelectedSection });
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "We simply invite you to look";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    if (selectedSection !== 'buy?') {
      setDisplayedText('');
      return;
    }

    const startDelay = setTimeout(() => {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 75); // Adjust typing speed here (100ms per character)
      
      return () => clearInterval(typingInterval);
    }, 300);

    return () => clearTimeout(startDelay);
  }, [selectedSection]);


  // Project items (can be different from portfolio)
  const TestimonyItems = [
    {
      id: '1',
      quote: "The first time I looked at my vulva... it looked so different from ones I had seen before. \
              So many bits poking out that I wasn't expecting. It wasn't neat. Honestly, the first time I saw it I thought it was a wild monstrosity.  \
              But I don't know, after a while, after looking, I started to kinda love it. I found it sexy.",
      writer: 'Jessica, 31', 
    },
    {
      id: '2',
      quote: "I had a look and it was scary at first, my vagina hole looked quite wide, deep and dark and it scared me. \
            But honestly it’s actually quite cool to see your own fanny and weirdly I couldn’t stop looking at it.",
      writer: 'Rhiana, 30', 
    },
    {
      id: '3',
      quote: "The first time I looked was when I was using a tampon for the first time. Nowadays, I like to \
      take a little look once in a while. I think she’s kinda cute.",
      writer: 'Talulla, 26', 
    },
  ];

  return (
    <div className="min-h-screen">
       <Navbar 
          selectedSection={selectedSection} 
          setSelectedSection={setSelectedSection} 
          
        />
      
      {/* First Section - Full Height */}
      <div id="home" className="min-h-screen w-full relative bg-secondary">
          <img
            src={webpageHomeSmall}
            alt="Home background"
            className="absolute top-0 left-1/2 -translate-x-1/2 z-0 h-1/2"
            loading="eager"
          />
        <div className={`${isAboveMediumScreens ? 'max-w-6xl' : 'max-w-2xl'} mx-auto px-6 py-24 w-full`}>
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
              <div className="text-center mb-16">
                {/* <h1 className="text-[145px] text-text-tertiary font-cursive mb-1"> */}
                <h1 className={`${isAboveMediumScreens ? 'text-[145px]' : 'text-8xl'} text-text-tertiary font-cursive mb-1`}>
                  The Vulva Mirror 
                </h1>
                <p className="text-text-tertiary text-3xl font-semibold font-sans">by Canesten<sup>®</sup></p>
              </div>
          </div>
        </div>
      </div>

    {/* About Section */}
    <div id="buy?" className="min-h-screen bg-primary flex items-center">
      <div className={`${isAboveMediumScreens ? 'max-w-6xl' : 'max-w-2xl'} mx-auto px-6 py-24 w-full`}>
        <h2 className="text-5xl font-bold text-secondary mb-2">SORRY NOT FOR SALE</h2>
          <p className={`${isAboveMediumScreens ? 'text-7xl' : 'text-5xl'} text-secondary font-cursive min-h-[1em]`}>
            {displayedText}
          </p>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={handImg} alt="Product image" className="absolute left-0 h-1/2 w-auto object-cover" />
          </a>
      </div>
    </div>


      {/* Education Section */}
      <div id="whatamilookingat" className="min-h-screen bg-secondary flex items-center">
        <div className={`${isAboveMediumScreens ? 'max-w-6xl' : 'max-w-2xl'} mx-auto px-6 py-24 w-full`}>
          <h2 className="text-5xl font-bold text-primary mb-8 mt-10">WHAT AM I LOOKING AT</h2>
            <div className={`${isAboveMediumScreens ? 'text-1xl' : 'text-lg'} text-primary mb-12 font-serif space-y-6`}>
              <h3 className="text-4xl text-primary font-cursive mt-10">
                The Vulva!
              </h3>
              <p>
                We are looking at the external genitalia - the labia, the clitoris, the vaginal and urethral openings. This is collectively known as the <span className="underline">vulva</span>. The word vagina refers to the internal part, the muscular tube that connects the vaginal opening to the cervix.
              </p>
              <p>
                So, who has looked at your vulva? Maybe a partner or lover? A doctor? Have you seen it?
              </p>
              <p>
                Most people have only seen their vulva once or twice in their lifetimes, if at all. For those that have looked, many dislike the look of their vulva, reporting finding it weird or abnormal. Our study at Canesten found that 67% of UK women would change the look of their vulva if they could <span className="text-sm">*.</span>
              </p>
              <p>
                But all vulvas look different and that is normal. (Don't believe us? Have a look at all the diversity and beauty of human form <a href="https://www.truthundressed.co.uk/" target="_blank" rel="noopener noreferrer" className="underline"> here</a>).
              </p>
              <p>
                With familiarity comes normalisation. Let's build confidence and understanding of our bodies.
              </p>
              <h3 className="text-3xl text-primary font-cursive mt-10">
                Let's learn to look again.
              </h3>
              <br /><br />
              <span className="text-sm">* Survey of 1,000 UK women (aged 18-24) – ‘Different Is Normal’ research by Canesten and sexual health charity Brook, conducted by 3GEM October 2020</span>
            </div>
        </div>
      </div>

      {/* Testimony */}
      <div id="testimonies" className="min-h-screen bg-primary flex items-center">
        <div className={`${isAboveMediumScreens ? 'max-w-6xl' : 'max-w-2xl'} mx-auto px-6 py-24 w-full`}>
          <h2 className="text-5xl font-bold text-text-primary mb-2">TESTIMONIES</h2>
                    < h3 className="text-4xl text-secondary font-cursive mb-10">#lookatmelooking</h3>
          <Testimony items={TestimonyItems} />

        </div>
        </div>
      </div>
  );
};

export default IntroPage