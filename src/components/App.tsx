import randomColor from 'randomcolor'
import React, { useState, useEffect, useRef } from 'react'
import { BackgroundButton } from './BackgroundButton/index'
import { Rocketcard } from './Rocketcard/index'
import { UserInput } from './UserInput/index'
import axios from 'axios'
import html2canvas from 'html2canvas'
import { saveAs } from 'file-saver'

export interface UserProps {
  data: {
    avatar_url: string
    login: string
    location: string
    followers: string
    following: string
    public_repos: string
    company: string
  }
}

function App() {
  const [cardBackgroundColor, setCardBackgroundColor] =
    useState<string>('#272727')

  const [username, setUsername] = useState<string>('Lukasdias')
  const userCard = useRef<any>(null)
  const [isUsernameInvalid, setIsUsernameInvalid] = useState<boolean>(false)
  const [isSearchingForUser, setIsSearchingForUser] = useState<boolean>(false)
  const [isTakingScreenshot, setIsTakingScreenshot] = useState<boolean>(false)
  const [searchedUser, setSearchedUser] = useState<UserProps | null>(null)

  function handleBackgroundButtonClick() {
    setCardBackgroundColor(randomColor({ alpha: 0.5, format: 'rgba' }))
  }

  async function handleCardScreenshot() {
    setIsTakingScreenshot(true)
    try {
      const image = await html2canvas(userCard.current, {
        logging: false,
        // allowTaint: false,
        letterRendering: 1,
        useCORS: true,
        backgroundColor: 'none',
        windowWidth: userCard.current.scrollWidth + 10,
        windowHeight: userCard.current.scrollHeight + 10
      })

      image.toBlob((blob) => {
        saveAs(blob, 'rocket-card.png')
      })
    } catch (error) {
      console.log(error)
    }
    setIsTakingScreenshot(false)
  }

  useEffect(() => {
    async function getUserInfo() {
      setIsSearchingForUser(true)
      try {
        const response: UserProps = await axios.get(
          `https://api.github.com/users/${username}`
        )
        // console.log(response.data)
        setSearchedUser(response)
        setIsUsernameInvalid(false)
      } catch (error) {
        setIsUsernameInvalid(true)
        setTimeout(() => {
          setIsUsernameInvalid(false)
        }, 1500)
        console.error(error)
      }
      setIsSearchingForUser(false)
    }

    getUserInfo()
  }, [username])

  return (
    <main className="flex overflow-hidden flex-col items-center py-10 w-screen min-h-screen bg-rocket-bg-card lg:flex-row lg:justify-center lg:py-0 lg:max-h-screen">
      <Rocketcard
        cardRef={userCard}
        bgColor={cardBackgroundColor}
        user={searchedUser}
      />
      <div className="flex flex-col items-center">
        <UserInput
          isSearchingForUser={isSearchingForUser}
          isUsernameInvalid={isUsernameInvalid}
          onSelectUser={setUsername}
        />
        <BackgroundButton
          onTakeScreenShot={handleCardScreenshot}
          isTakingScreenshot={isTakingScreenshot}
          onChangeBackground={handleBackgroundButtonClick}
        />
      </div>
    </main>
  )
}

export default App
