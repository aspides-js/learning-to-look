import { useState } from 'react'
// import LandingPage from "@/scenes/landing";
import IntroPage from "@/scenes/about";
import type { SectionType } from './shared/types';

function App() {
  const [selectedSection, setSelectedSection] = useState<SectionType>('home');

  return (
    <div className="app bg-secondary">
        <IntroPage 
          onBack={() => setSelectedSection('home')}
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />
    </div>
  );
} 

export default App;
