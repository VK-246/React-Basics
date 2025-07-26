import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "tailwindcss";
import Card from'./components/Card.jsx';
import Card2 from'./components/Card2.jsx';
function App() {
  const details1 = {title:"real estates",btnTxt:"Deployed->"}
  return (
    <>
      <div className='flex flex-col items-center justify-center  min-h-screen gap-6 '>
        <h1 className='bg-green-400 text-black p-4 rounded-4xl '>Tailwind test</h1>
        <Card details={details1} />
        <Card2 title="Accident Detection" btnTxt="Github ->" />
        <Card2 {...details1} />
        {/* <Card /> */}
      </div>
    </>
  )
}

export default App
