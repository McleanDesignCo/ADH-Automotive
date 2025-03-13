'use client'

import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import { PhoneIcon } from '@heroicons/react/20/solid'
import Announcement from './Announcement'
import Social from './Social'

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink(
  props: Omit<
    React.ComponentPropsWithoutRef<typeof PopoverButton<typeof Link>>,
    'as' | 'className'
  >,
) {
  return (
    <PopoverButton
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    />
  )
}

export function Header() {
  return (
    <>
    <header className='fixed z-[99]'>
    
      <nav className='w-screen bg-white z-50'>
        <Container className="relative z-50 flex justify-between py-4">
        <Popover className="z-50 flex items-center gap-4">
              {({ open }) => (
                <>
                  <PopoverButton
                    className="relative z-10 -m-2 inline-flex sm:hidden items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 ui-not-focus-visible:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </PopoverButton>
                  <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home" className='flex items-center gap-1'>
              <Logo className="h-12 w-auto hidden sm:flex" />
              <p className='font-bold text-sm lg:text-lg text-[#005900] italic'>ADH Automotive</p>
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks />
            </div>
          </div>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <PopoverBackdrop
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <PopoverPanel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            <MobileNavLink href="/#repair-services">
                              Vehicle Repairs
                            </MobileNavLink>
                            <MobileNavLink href="/#vehicle-servicing">
                              Servicing
                            </MobileNavLink>
                            <MobileNavLink href="/#car-services">
                              MOT Testing
                            </MobileNavLink>
                            <MobileNavLink href="/#tyre-check">Tyres</MobileNavLink>
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                           
                            <Button href="tel:0121 753 5553">
                            <PhoneIcon className='w-4'/> 0121 753 5553
                            </Button>
                            <div className='flex justify-center'>
                            <Social />  
                            </div>
                            
                          </div>
                        </PopoverPanel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>

          
          <div className="flex items-center gap-4">
            
            <div className='flex gap-4'>
              <div className='hidden sm:flex'>
              <Social />
              </div>
            <Button href="tel:0121 753 5553" className="flex items-center gap-2">
              <PhoneIcon className='w-4'/> 0121 753 5553
            </Button>
            </div>
            
            
          </div>
        </Container>
      </nav>
    </header>
    </>
  )
}
