import React from 'react'
import { RocketcardId } from './RocketCardId/index'
import { RocketCardAvatar } from './RocketCardAvatar/index'
import { UserProps } from 'components/App'
import { RocketCardStats } from './RocketCardStats/index'

export interface RocketcardProps {
  bgColor: string
  user: UserProps | null
}

export function Rocketcard({ bgColor, user }: RocketcardProps) {
  return (
    <>
      {user != null && (
        <section className="flex overflow-hidden flex-col items-center px-3 w-full lg:w-1/2">
          <div className="flex flex-col flex-1 p-4">
            <header className="flex justify-center w-full">
              <h1 className="text-xl text-white">
                Compartilhe seu #rocketcard
              </h1>
            </header>
          </div>

          <div
            className="flex py-3 px-2 w-full max-w-[438px] h-[691px] rounded-[50px] transition-colors duration-200 md:h-[576px] 2xl:h-[700px]"
            style={{
              backgroundColor: bgColor
            }}
          >
            <div className="flex overflow-hidden relative w-full bg-rocket-card-button-border rounded-[50px]">
              <RocketcardId id={user.data.login} />
              <RocketCardAvatar
                image={user.data.avatar_url}
                borderColor={bgColor}
              />
              <RocketCardStats
                followers={user.data.followers}
                following={user.data.following}
                location={user.data.location}
                company={user.data.company}
                repos={user.data.public_repos}
              />
            </div>
          </div>
        </section>
      )}
    </>
  )
}
