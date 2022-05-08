import randomColor from 'randomcolor'
import React, { useState, useEffect, useRef } from 'react'
import { BackgroundButton } from './BackgroundButton/index'
import { Rocketcard } from './Rocketcard/index'
import { UserInput } from './UserInput/index'
import axios from 'axios'

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

  const [username, setUsername] = useState('Lukasdias')

  const [isUsernameInvalid, setIsUsernameInvalid] = useState<boolean>(false)
  const [isSearchingForUser, setIsSearchingForUser] = useState<boolean>(false)
  const [searchedUser, setSearchedUser] = useState<UserProps | null>(null)

  function handleBackgroundButtonClick() {
    setCardBackgroundColor(randomColor({ alpha: 0.5, format: 'rgba' }))
  }

  function handleCardScreenshot() {
    return
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
      <Rocketcard bgColor={cardBackgroundColor} user={searchedUser} />
      <div className="flex flex-col items-center">
        <UserInput
          isSearchingForUser={isSearchingForUser}
          isUsernameInvalid={isUsernameInvalid}
          onSelectUser={setUsername}
        />
        <BackgroundButton onChangeBackground={handleBackgroundButtonClick} />
      </div>
    </main>
  )
}

export default App
