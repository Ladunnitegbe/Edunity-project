// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './themes/global.css'
import { PageNavigation } from "./components/PageNavigation/PageNavigation.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { Cards_section } from './components/Cards_section/Cards_section.jsx';

function App() {
  return (
    <>
      <PageNavigation />
      <Hero />
      <Cards_section />
    </>
  );
}

export default App;
