"use client";
import { useState } from "react";

export default function Home() {
  const [numState, setnumState] = useState<any> (0)
  const addToNumber = () => {
    setnumState(numState + 1)
  }

  const subtractFromNumber = () => {
    setnumState(numState - 1)
  }
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center text-[80px]">
      <p className="text-[50px]">My Count App</p>
      <p className="font-bold">{numState}</p>
      <div className="flex flex-row gap-10">
        <button onClick = {addToNumber}>+</button>
        <button onClick ={subtractFromNumber}>-</button>
      </div>
    </div>
  );
}
