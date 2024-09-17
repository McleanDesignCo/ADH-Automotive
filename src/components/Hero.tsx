import { useId } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Heading } from './text'

export function Hero() {
  return (
    <>
      <section className="relative bg-gray-800 text-white">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden ">
          <Image
          width={1920}
          height={693}
            src="/ADH Workshop.webp" // Replace with your background image URL
            alt="Hero Background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>{' '}
          {/* Color Overlay */}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 py-48 text-center lg:py-96">
          <div className="mx-auto max-w-5xl">
            <div className="max-w-2xl">
              <Heading dark={true} as="h1">
                Whatever your vehicle needs we have the tools and the know how.
              </Heading>
              <p className="mx-auto max-w-2xl text-lg leading-8 text-white/90">
                ADH Automotive is an independently run vehicle service and
                repair centre established over 10 years ago with a simple but
                effective policy of offering the customer proffesional top level
                service at a competative rate
              </p>
              <div className="mt-6 space-x-4">
                <Button href="tel:01217535553" variant="solid">
                  Call us
                </Button>
                <Button href="#repair-services" variant="outline" color="white">
                  View Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative hidden overflow-hidden">
        <div className="aspect-square h-[60vh] w-full sm:aspect-video">
          <div className="absolute -z-0 h-full w-full bg-green-900" />
          <div className="flex items-center justify-center">
            <div className="relative z-10 mx-auto max-w-5xl p-6 py-48 lg:py-56">
              <div className="text-center">
                <Heading dark="true" as="h1">
                  Whatever your vehicle needs we have the tools and the know
                  how.
                </Heading>
                <p className="mt-6 text-lg leading-8 text-white/90">
                  ADH Automotive is an independently run vehicle service and
                  repair centre established over 10 years ago with a simple but
                  effective policy of offering the customer proffesional top
                  level service at a competative rate
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Button href="tel:01217535553" variant="solid">
                    Call us
                  </Button>
                  <Button href="/" variant="outline" color="white">
                    View Services
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
