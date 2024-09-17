'use client'

import * as Headless from '@headlessui/react'
import { ArrowLongRightIcon } from '@heroicons/react/20/solid'
import { clsx } from 'clsx'
import {
  MotionValue,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  type HTMLMotionProps,
} from 'framer-motion'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import useMeasure, { type RectReadOnly } from 'react-use-measure'
import { Link } from './link'
import { Heading, Subheading } from './text'
import { Button } from './Button'
import { Container } from './Container'

const testimonials = [
  {
    img: '/ADH Brakes 1.jpg',
    name: 'Brakes',
    title: 'VP of Sales, Protocol',
    quote:
  'Brakes are vital for vehicle safety and must be inspected regularly. For expert advice and competitive prices on brake services, contact us directly. Ensure your brakes are in top condition!'  },
  {
    img: '/ADH Battery 1.jpg',
    name: 'Car Batteries',
    title: 'Head of Customer Success, TaxPal',
    quote:
  'Car battery problems? Faulty batteries are the top cause of breakdowns in the UK. Don’t wait for cold weather to reveal issues. Get a free battery and charging system check today. Call us now!'  },
  {
    img: '/ADH Clutch 1.jpg',
    name: 'Clutch Replacement',
    title: 'Head of GTM, Pocket',
    quote:
      'Experiencing clutch issues with your car or van? Get a free, no-obligation clutch check, including clutch hydraulics. Our experts offer precise diagnostics and reliable solutions. Call us today!',
  },
  {
    img: '/ADH Suspension 1.jpg',
    name: 'Suspension',
    title: 'CSO, Planeteria',
    quote:
      'Top-rated suspension repair services! Our skilled technicians use advanced tools for efficient suspension system diagnostics and repairs. Trust us for expert suspension damage solutions. Contact us today!',
  },
  {
    img: '/ADH Exhausts 1.jpeg',
    name: 'Exhaust Systems',
    title: 'VP of Sales, Detax',
    quote:
      'Free exhaust system check while you wait! Need replacements? We offer competitive prices and free fitting on most exhaust systems. Affordable exhaust repair and replacement services. Call today!',
  },
  {
    img: '/ADH Diagnostics.webp',
    name: 'Diagnostics',
    title: 'VP of Sales, Detax',
    quote:
      'Dashboard warning light on? ADH provides expert vehicle diagnostics for engine, ABS, and airbag issues. Using the latest software, we detect faults accurately. Call us today for a quick check-up!',
  },
]

function TestimonialCard({
  name,
  title,
  img,
  children,
  bounds,
  scrollX,
  ...props
}: {
  img: string
  name: string
  title: string
  children: React.ReactNode
  bounds: RectReadOnly
  scrollX: MotionValue<number>
} & HTMLMotionProps<'div'>) {
  let ref = useRef<HTMLDivElement | null>(null)

  let computeOpacity = useCallback(() => {
    let element = ref.current
    if (!element || bounds.width === 0) return 1

    let rect = element.getBoundingClientRect()

    if (rect.left < bounds.left) {
      let diff = bounds.left - rect.left
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else if (rect.right > bounds.right) {
      let diff = rect.right - bounds.right
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else {
      return 1
    }
  }, [ref, bounds.width, bounds.left, bounds.right])

  let opacity = useSpring(computeOpacity(), {
    stiffness: 154,
    damping: 23,
  })

  useLayoutEffect(() => {
    opacity.set(computeOpacity())
  }, [computeOpacity, opacity])

  useMotionValueEvent(scrollX, 'change', () => {
    opacity.set(computeOpacity())
  })

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      {...props}
      className="relative flex aspect-[3/4] w-[35vh] shrink-0 snap-start scroll-ml-[var(--scroll-padding)] flex-col justify-end overflow-hidden rounded-xl sm:aspect-[3/4] sm:w-[40vh]"
    >
      <img
        alt=""
        src={img}
        className="absolute inset-x-0 top-0 aspect-square w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black from-[calc(7/16*100%)] ring-1 ring-inset ring-gray-950/10 sm:from-25%"
      />

      <figure className="relative flex flex-col gap-y-4 p-6 sm:p-8 xl:p-10">
        <p className="text-2xl/6 font-semibold text-white">{name}</p>

        <blockquote>
          <p className="text-md/4 relative text-white">{children}</p>
        </blockquote>
        <Button href="tel:01217535553">Call Now for {name}</Button>
      </figure>
    </motion.div>
  )
}

function CallToAction() {
  return (
    <div>
      <p className="max-w-md text-sm/6 text-gray-600">
        <strong>Car broken down or stuck?</strong> Our Birmingham recovery
        service will collect, recover, and deliver your vehicle. Contact us for
        a free quote via phone or online.
      </p>
      <div className="mt-2">
        <Link
          href="#"
          className="inline-flex items-center gap-2 text-sm/6 font-semibold text-green-600 hover:opacity-80"
        >
          Yes I need my vehicle recovered
          <ArrowLongRightIcon className="size-5" />
        </Link>
      </div>
    </div>
  )
}

export function Testimonials() {
  let scrollRef = useRef<HTMLDivElement | null>(null)
  let { scrollX } = useScroll({ container: scrollRef })
  let [setReferenceWindowRef, bounds] = useMeasure()
  let [activeIndex, setActiveIndex] = useState(0)

  useMotionValueEvent(scrollX, 'change', (x) => {
    setActiveIndex(Math.floor(x / scrollRef.current!.children[0].clientWidth))
  })

  function scrollTo(index: number) {
    let gap = 32
    let width = (scrollRef.current!.children[0] as HTMLElement).offsetWidth
    scrollRef.current!.scrollTo({ left: (width + gap) * index })
  }

  return (
    <div id='repair-services' className="overflow-hidden py-12 md:py-20 lg:py-32">
      <Container>
        <div ref={setReferenceWindowRef}>
          <Heading as="h3" className="mx-auto mt-2 max-w-5xl">
            Trusted Car Repair Services in Birmingham, Digbeth – Brakes,
            Batteries, Clutch & More
          </Heading>
          <p className="text-md mx-auto mt-6 max-w-2xl text-center leading-6 text-gray-600">
            ADH Automotive in Digbeth, Birmingham, offers expert vehicle
            repairs, including brakes, batteries, clutch replacement,
            suspension, and exhaust systems. Affordable, professional, and
            trusted car repair services.{' '}
          </p>
        </div>
      </Container>
      <div
        ref={scrollRef}
        className={clsx([
          'mt-16 flex gap-4 px-[var(--scroll-padding)] lg:gap-8',
          '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          'snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth',
          '[--scroll-padding:max(theme(spacing.6),calc((100vw-theme(maxWidth.2xl))/2))] lg:[--scroll-padding:max(theme(spacing.8),calc((100vw-theme(maxWidth.7xl))/2))]',
        ])}
      >
        {testimonials.map(({ img, name, title, quote }, testimonialIndex) => (
          <TestimonialCard
            key={testimonialIndex}
            name={name}
            title={title}
            img={img}
            bounds={bounds}
            scrollX={scrollX}
            onClick={() => scrollTo(testimonialIndex)}
          >
            {quote}
          </TestimonialCard>
        ))}
        <div className="w-[42rem] shrink-0 sm:w-[45rem]" />
      </div>
      <Container className="mt-16">
        <div className="flex justify-between">
          <CallToAction />
          <div className="hidden sm:flex sm:gap-2">
            {testimonials.map(({ name }, testimonialIndex) => (
              <Headless.Button
                key={testimonialIndex}
                onClick={() => scrollTo(testimonialIndex)}
                data-active={
                  activeIndex === testimonialIndex ? true : undefined
                }
                aria-label={`Scroll to service from ${name}`}
                className={clsx(
                  'size-2.5 rounded-full border border-transparent bg-gray-300 transition',
                  'transition-all duration-1000 ease-in-out data-[active]:w-6 data-[active]:bg-green-600 data-[hover]:bg-gray-400',
                  'forced-colors:data-[active]:bg-[Highlight] forced-colors:data-[focus]:outline-offset-4',
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
