import { useState } from "react";
import reactLogo from './assets/react.svg'
import tailwindLogo from './assets/tailwind.svg'
import viteLogo from './assets/vite.svg'
import expressLogo from './assets/express.svg'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#242424] w-screen h-screen flex flex-col justify-center items-center text-white font-bold text-3xl gap-14">
      <div className="flex gap-10 items-center">
        <a className="hover:scale-105 transition-all duration-300" href="https://react.dev/"><img alt="React Logo" className="w-24" src={reactLogo} /></a>
        <a className="hover:scale-105 transition-all duration-300" href="https://tailwindcss.com/"><img alt="Tailwind CSS Logo" className="w-24" src={tailwindLogo} /></a>
        <a className="hover:scale-105 transition-all duration-300" href="https://vitejs.dev/"><img alt="Vite Logo" className="w-24" src={viteLogo} /></a>
        <a className="hover:scale-105 transition-all duration-300" href="https://expressjs.com/"><img alt="Express Logo" className="h-28" src={expressLogo} /></a>
      </div>
      <span>React + Tailwind CSS + Vite + Express</span>
      <button className="text-lg py-2 px-4 rounded-lg bg-[#555555] hover:bg-[#444444]" type="button" onClick={() => { setCount(count + 1) }}>Count: {count}</button>
    </div>
  );
}

export default App;