import React, { Fragment, useState, useEffect } from 'react'
import { GithubLogo, Spiral } from 'phosphor-react'
import { Dialog, Transition } from '@headlessui/react'

interface FeedbackDialogProps {
  onFeedbackDialogClose: () => void
  onFeedbackDialogOpen: () => void
  isFeedbackDialogOpen: boolean
}
export function FeedbackDialog({
  onFeedbackDialogClose,
  isFeedbackDialogOpen,
  onFeedbackDialogOpen
}: FeedbackDialogProps) {
  return (
    <>
      <Transition appear show={isFeedbackDialogOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={onFeedbackDialogClose}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="overflow-y-auto fixed inset-0">
            <div className="flex justify-center items-center p-4 min-h-full text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="overflow-hidden p-6 w-full max-w-md text-left align-middle bg-rocket-bg-card rounded-2xl shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 text-center text-red-600"
                  >
                    Nome de usuário inválido
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm font-medium text-white">
                      Tente inserir outro nome, se precisar, veja o nome
                      corretamente no perfil da pessoa.
                    </p>
                  </div>

                  <div className="flex flex-1 justify-center mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center py-2 px-4 text-sm font-medium text-green-900 bg-green-100 hover:bg-green-200 rounded-md border border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 transition-colors duration-300"
                      onClick={onFeedbackDialogClose}
                    >
                      Entendido, obrigado!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
