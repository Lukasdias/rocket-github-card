import React from 'react'

interface RocketCardAvatarProps {
  image: string
  borderColor: string
}
export function RocketCardAvatar({
  image,
  borderColor
}: RocketCardAvatarProps) {
  return (
    <div className="absolute top-1/4 left-1/4">
      <div
        className={`flex overflow-hidden justify-center items-center min-w-[370px] min-h-[370px] rounded-full border-8 transition-colors `}
        style={{
          borderColor: borderColor
        }}
      >
        <div className="flex justify-center items-center w-full h-full">
          <img src={image} className="flex flex-1" />
        </div>
      </div>
    </div>
  )
}
