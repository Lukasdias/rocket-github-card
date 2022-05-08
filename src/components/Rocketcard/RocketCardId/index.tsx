import React from 'react'
import Logo from './../../../public/images/logo.svg'
interface RocketCardIdProps {
  id: string
}
export function RocketcardId({ id }: RocketCardIdProps) {
  return (
    <div className="flex absolute top-5 left-7 gap-4 justify-center items-center py-6">
      <div className="p-3 rounded-[50%] border-2 border-[#c4c4c4]">
        <img src={Logo} alt="logo" className="w-8 h-8" />
      </div>
      <span className="text-2xl font-medium text-white">{id}</span>
    </div>
  )
}
