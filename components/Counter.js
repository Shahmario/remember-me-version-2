"use client";
import { useState } from "react";
import daisyui from 'daisyui';

function Counter(props) {
    const[count, setCount] = useState(0);
  
  return (
    <div className="flex flex-col gap-4 items-center p-6 rounded-lg border border-gray-300">
        <h2 className="text-xl fontsemi-bold">{props.title}</h2>
            <div className="flex gap-4 items-center">
                <button
                    className="btn btn-active"
                    onClick={() => setCount((prev) => prev - 1)}
                > 
                    - 
                </button>
                <span className="text-2xl font-mono min-w-[3ch] text-center">
                    {count}
                </span>
                <button
                    className="btn btn-circle"
                    onClick={() => setCount((prev) => prev + 1)}
                > 
                    + 
                </button>
            </div>
    </div>
  );
}

export default Counter;