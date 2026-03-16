import { useState } from "react"
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
// import useMediaQuery from "@/hooks/useMediaQuery"
import Link from "./link"
import type { SectionType } from '@/shared/types';
import { useEffect } from "react";

type Props = {
    selectedSection: SectionType;
    setSelectedSection: (value: SectionType) => void;
    // sectionBackground: string;
}


const Navbar = ({ selectedSection, setSelectedSection }: Props) => {
  const flexBetween = "flex items-center justify-between"
  // const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  // const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isAtTop, setIsAtTop] = useState(true);

  const navBackground = isAtTop ? 'bg-transparent' : 'bg-secondary';

  useEffect(() => {
    const handleScroll = () => setIsAtTop(window.scrollY < 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6 ${navBackground} transition duration-300`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <h1 className={`text-4xl font-semibold font-sans text-primary`}>
              Canesten<sup>®</sup>
              {/* CANESTEN */}
            </h1>

            {/* RIGHT SIDE */}
            {/* { isAboveMediumScreens ? ( */}
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-1xl`}>
              </div>
              <div className={`${flexBetween} gap-8 font-sans font-bold text-1xl text-primary`}>
                <Link 
                  page="BUY?" 
                  selectedSection={selectedSection} 
                  setSelectedSection={setSelectedSection} 
                />
                <Link 
                  page="WHAT AM I LOOKING AT" 
                  selectedSection={selectedSection} 
                  setSelectedSection={setSelectedSection} 
                />
                <Link 
                  page="TESTIMONIES" 
                  selectedSection={selectedSection} 
                  setSelectedSection={setSelectedSection} 
                />
              </div>
            </div>
            {/* ) : (
            <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-text-tertiary" />
              </button>
            )} */}
          </div>
        </div>
      </div>

            {/* MOBILE MENU MODAL
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary drop-shadow-xl">
          {/* CLOSE ICON */}
          {/* <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-text-primary" />
            </button>
          </div>

          {/* MENU ITEMS */}
          {/* <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="home"
              selectedSection={selectedSection}
              setSelectedSection={setSelectedSection}
            />
            <Link
              page="buy?"
              selectedSection={selectedSection}
              setSelectedSection={setSelectedSection}
            />
            <Link
              page="whatamilookingat"
              selectedSection={selectedSection}
              setSelectedSection={setSelectedSection}
            />
            <Link
              page="testimony"
              selectedSection={selectedSection}
              setSelectedSection={setSelectedSection}
            />
          </div>
        </div>
      )} */}
    </nav>
  )
}

export default Navbar