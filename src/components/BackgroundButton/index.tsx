import React from 'react'
import {
  CardScreenshotButtonProps,
  CardScreenshotButton
} from '../CardScreenshotButton/index'

interface BackgroundButtonProps extends CardScreenshotButtonProps {
  onChangeBackground: () => void
}

export function BackgroundButton({
  onChangeBackground,
  isTakingScreenshot,
  onTakeScreenShot
}: BackgroundButtonProps) {
  return (
    <div className="flex flex-col gap-6 items-center p-4 w-full">
      <h1 className="font-sans text-xl text-white">Customizar Rocketcard</h1>
      <button
        type="button"
        className="px-4 min-w-[230px] h-14 text-sm text-white bg-rocket-bg rounded-2xl 
        border-transparent ring-2 ring-transparent hover:ring-rocket-img-profile focus:ring-rocket-img-profile transition
        duration-300
        focus:animate-pulse
        "
        onClick={onChangeBackground}
      >
        Gerar background
      </button>
      <CardScreenshotButton
        isTakingScreenshot={isTakingScreenshot}
        onTakeScreenShot={onTakeScreenShot}
      />
    </div>
  )
}
