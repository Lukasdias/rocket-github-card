import React, { Fragment, useState, useEffect } from 'react'
import { GithubLogo, Spiral } from 'phosphor-react'
import { Dialog, Transition } from '@headlessui/react'
import { FeedbackDialog } from '../FeedbackDialog/index'

interface UserInputProps {
  isSearchingForUser: boolean
  isUsernameInvalid: boolean
  onSelectUser: (username: string) => void
}

export function UserInput({
  onSelectUser,
  isUsernameInvalid,
  isSearchingForUser
}: UserInputProps) {
  const [isFeedbackDialogOpen, setIsFeedbackDialogOpen] =
    useState<boolean>(false)
  const [text, setText] = useState<string>('')

  function handleOpenModal() {
    setIsFeedbackDialogOpen(true)
  }

  function handleCloseModal() {
    setIsFeedbackDialogOpen(false)
  }

  useEffect(() => {
    if (isUsernameInvalid) setIsFeedbackDialogOpen(true)
  }, [isUsernameInvalid])

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.currentTarget.value = event.currentTarget.value.replace(/\s/g, '')
    setText(event.target.value)
  }

  return (
    <>
      <div className="flex flex-1 justify-center p-4 w-full">
        <input
          type="text"
          placeholder={`Digite seu nome de usuário`}
          onChange={(event) =>
            event.currentTarget.value.includes(' ')
              ? handleChange(event)
              : setText(event.target.value)
          }
          className={`p-4 bg-zinc-500}`}
        />
        <button
          type="button"
          className="flex  justify-center items-center p-4 bg-zinc-300 ring-2 ring-transparent focus:ring-rocket-img-profile transition duration-200 ease"
          onClick={() => onSelectUser(text)}
        >
          {isSearchingForUser ? (
            <Spiral
              weight="bold"
              className="w-6 h-6 text-blue-500 animate-spin"
            />
          ) : (
            <GithubLogo
              weight="bold"
              className="w-6 h-6 text-rocket-card-button-border"
            />
          )}
        </button>
      </div>

      <FeedbackDialog
        onFeedbackDialogClose={handleCloseModal}
        onFeedbackDialogOpen={handleOpenModal}
        isFeedbackDialogOpen={isFeedbackDialogOpen}
      />
    </>
  )
}
