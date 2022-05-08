import React from 'react'

import FollowersIcon from './../../../public/images/followers.svg'
import FollowingIcon from './../../../public/images/following.svg'
import ReposIcon from './../../../public/images/repository.svg'
import LocationIcon from './../../../public/images/location.svg'
import CompanyIcon from './../../../public/images/company.svg'

interface RocketCardStatsProps {
  followers: string
  following: string
  repos: string
  company: string
  location: string
}

interface DataToBeRenderedProps {
  icon: string
  num?: string
  company?: string
  location?: string
  label?: string
}

export function RocketCardStats({ ...stats }: RocketCardStatsProps) {
  const dataToBeRendered: DataToBeRenderedProps[] = [
    {
      icon: FollowersIcon,
      num: stats.followers,
      label: 'Seguidores'
    },
    {
      icon: FollowingIcon,
      num: stats.following,
      label: 'Seguindo'
    },
    {
      icon: ReposIcon,
      num: stats.repos,
      label: 'Repositórios'
    },
    {
      icon: CompanyIcon,
      company: `@${stats.company} `
    },
    {
      icon: LocationIcon,
      location: stats.location
    }
  ]
  return (
    <section className="flex absolute top-[59%] left-5 z-50 flex-col gap-3 justify-center items-center px-2 w-[203px] h-[194px] bg-gradient-to-b from-black via-[rgba(70,69,69,0.5)] to-[rgba(255,255,255,0.25)] rounded-xl">
      {dataToBeRendered.map((element: DataToBeRenderedProps, idx: number) => (
        <div
          key={idx}
          className="flex gap-2 items-center w-full text-base font-bold text-white"
        >
          <img
            className=" w-5 h-5"
            src={element.icon}
            alt={`${element.label} icon`}
          />
          <>
            {element.num && (
              <span className="flex overflow-hidden  max-w-full text-ellipsis whitespace-nowrap">
                {element.num}
              </span>
            )}
          </>
          <>
            {element.company && (
              <span className="flex overflow-hidden  max-w-full text-ellipsis whitespace-nowrap">
                {element.company}
              </span>
            )}
          </>
          <>
            {element.location && (
              <span className="flex overflow-hidden  max-w-full text-ellipsis whitespace-nowrap">
                {element.location}
              </span>
            )}
          </>
          <span>{element.label}</span>
        </div>
      ))}
    </section>
  )
}
