import { Spiral } from 'phosphor-react'
import React from 'react'

export interface CardScreenshotButtonProps {
  isTakingScreenshot: boolean
  onTakeScreenShot: () => void
}

export function CardScreenshotButton({
  isTakingScreenshot,
  onTakeScreenShot
}: CardScreenshotButtonProps) {
  return (
    <button
      type="button"
      className="flex justify-center items-center px-4 min-w-[230px] h-14 text-sm text-white bg-rocket-bg rounded-2xl
  border-transparent ring-2 ring-transparent hover:ring-rocket-img-profile focus:ring-rocket-img-profile transition
  duration-300
  focus:animate-pulse
  "
      onClick={onTakeScreenShot}
    >
      {isTakingScreenshot ? (
        <Spiral weight="bold" className="w-6 h-6 text-blue-500 animate-spin" />
      ) : (
        <>Download</>
      )}
    </button>
  )
}
