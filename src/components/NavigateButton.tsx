"use client";
import { useRouter } from "next/navigation"
import React from "react";

interface NavigateButtonProps {
  destination : string , 
  label : string
}

const NavigateButton:React.FC<NavigateButtonProps> = ({destination , label}) => {
  const router = useRouter();

  const handleNavigation = () =>{
    router.push(destination);
  }
  return (
    <>
      <button className="bg-green-500 p-3 rounded-sm font-semibold hover:bg-green-600"
        onClick={handleNavigation}>
        {label}
      </button>
    </>
  )
}

export default NavigateButton
