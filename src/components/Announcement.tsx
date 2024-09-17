import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { Container } from './Container'
import Marquee from 'react-fast-marquee'

export default function Announcement() {
  return (

      <div className="relative z-[99] bg-green-50 p-4">
      <Container>
        <div className="flex items-center justify-center text-center max-w-2xl mx-auto text-xs">
          <div className="flex flex-shrink-0 items-center gap-2">
            <CheckCircleIcon
              aria-hidden="true"
              className="h-5 w-5 text-green-400"
            />
            <span className="font-bold uppercase text-green-800"> Offer: </span>
          </div>
          <div className="ml-3">
            <Marquee>
              <p className="font-medium text-green-800">
              <strong>£5 Off MOT test fee</strong> when carried out in conjunction with servicing. Offer on through <span className='underline underline-offset-2'>August & September</span>.

              </p>
            </Marquee>
          </div>
        </div>
      </Container>
    </div>

    
  )
}
