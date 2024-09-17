import { Button } from './Button'
import CleanAirZone from './CleanAirZone'
import { Container } from './Container'
import { InformationCircleIcon } from '@heroicons/react/24/solid'

const people = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]

export default function SecondaryCarServices() {
  return (
    <section id='car-services' className="py-20 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
          <div className="relative aspect-[3/4] items-center rounded-lg border border-gray-300 bg-[#167aeb] px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400 sm:col-span-3">
            <div className="">
              <img
                alt=""
                src="/MOTsymbol.jpg"
                className="h-10 w-10 rounded-full sm:h-20 sm:w-20"
              />
            </div>

            <div className="absolute inset-0 flex items-end p-6">
             <div>
                <h3 className="pt-8 text-3xl font-semibold text-white sm:text-5xl">
                  MOT Test Centre
                </h3>
                <p className="mt-2 text-sm text-white sm:text-base">
                Your car’s MOT doesn’t have to be stressful. At ADH Automotive, we offer a friendly, jargon-free service. Relax in our waiting room with a tea or coffee, or explore nearby Digbeth shops and restaurants while we handle everything.
                </p>

                  <Button
                    href="tel:01217535553"
                    variant="outline"
                    color="white"
                    className="w-full mt-6"
                  >
                    Book your MOT Test Today
                  </Button>
                  </div>
            </div>
          </div>

          <div id='tyre-check' className="relative aspect-[3/4] items-center overflow-auto rounded-lg border border-gray-300 bg-white shadow-sm focus-within:ring-2 focus-within:ring-green-600 focus-within:ring-offset-2 hover:border-green-400 sm:col-span-3">
            <div className="h-full w-full">
              <img
                alt=""
                src="/car-tyres.webp"
                className="h-full w-full items-center object-cover"
              />
              <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-black opacity-100"></div>
            </div>

            <div className="absolute inset-0 z-10 flex items-end p-6">
              <div className="absolute top-4">
                <div className="sm:mb-8">
                  <div className="relative flex gap-1 truncate rounded-full bg-green-500 px-3 py-1.5 text-sm font-bold leading-6 text-white ring-1 ring-green-900/10 hover:ring-gray-900/20">
                    <InformationCircleIcon className="h-6 w-6" />
                    FREE Wheel alignment*
                  </div>
                </div>
              </div>
              <div>
                <p className="text-3xl font-semibold text-white sm:text-5xl">
                  Unsure about the condition of your tyres?
                </p>
                <p className="mt-2 text-base text-white/90">
                  We will carry out a free no obligation check of all your tyres
                  including tyre pressures. Should you require replacement tyres
                  we can price a tyre to suit most budgets and most cars and
                  vans.
                  <br />
                  <br />

                  <span className='text-sm font-semibold'>*When you purchase four tyres</span>
                </p>
           
                  <Button href="tel:01217535553" className="mt-6 w-full">
                    Book in for Tyre fittings
                  </Button>
       
              </div>
            </div>
          </div>

          <div id='car-sanitisation' className="relative aspect-[3/4] items-center overflow-auto rounded-lg border border-gray-300 bg-white shadow-sm focus-within:ring-2 focus-within:ring-green-600 focus-within:ring-offset-2 hover:border-green-400 sm:col-span-2">
            <div className="h-full w-full">
              <img
                alt=""
                src="/ADH Car Sanitisation 1.jpg"
                className="h-full w-full items-center object-cover"
              />
              <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-black opacity-100"></div>
            </div>

            <div className="absolute inset-0 z-10 flex items-end p-6">
              
              <div>
                <p className="text-xl font-semibold text-white sm:text-3xl">
                  Car Sanitisation
                </p>
                <p className="mt-2 text-base text-white/90">
                Our antibacterial machine emits fog through the car's ventilation system, sanitizing the entire interior and leaving your vehicle clean and fresh.
                  <br />
                  <br />
                </p>
           
                  <Button href="tel:01217535553" className="mt-6 w-full">
                    Book in for Car Sanitisation
                  </Button>
       
              </div>
            </div>
          </div>

          <div id='recovery' className="relative aspect-[3/4] items-center overflow-auto rounded-lg border border-gray-300 bg-white shadow-sm focus-within:ring-2 focus-within:ring-green-600 focus-within:ring-offset-2 hover:border-green-400 sm:col-span-2">
            <div className="h-full w-full">
              <img
                alt=""
                src="/ADH Hero.webp"
                className="h-full w-full items-center object-cover"
              />
              <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-black opacity-100"></div>
            </div>

            <div className="absolute inset-0 z-10 flex items-end p-6">
              
              <div>
                <p className="text-xl font-semibold text-white sm:text-3xl">
                  24/7 Car breakdown & recovery service
                </p>
                <p className="mt-2 text-base text-white/90">

                Car broken down or stuck? Our Birmingham recovery service will collect, recover, and deliver your vehicle. Contact us for a free quote via phone or online.                  <br />
                  <br />
                </p>
           
                  <Button href="tel:01217535553" className="mt-6 w-full">
                    Contact us for Recovery Service
                  </Button>
       
              </div>
            </div>
          </div>

          <div id='dpf' className="relative aspect-[3/4] items-center overflow-auto rounded-lg border border-gray-300 bg-white shadow-sm focus-within:ring-2 focus-within:ring-green-600 focus-within:ring-offset-2 hover:border-green-400 sm:col-span-2">
            <div className="h-full w-full">
              <img
                alt=""
                src="/ADH DPF 1.jpg"
                className="h-full w-full items-center object-cover"
              />
              <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-black opacity-100"></div>
            </div>

            <div className="absolute inset-0 z-10 flex items-end p-6">
              
              <div>
                <p className="text-xl font-semibold text-white sm:text-3xl">
                Diesel Particulate Filter
                </p>
                <p className="mt-2 text-base text-white/90">
                Modern diesel vehicles have a DPF to reduce emissions. If the warning light shows, we offer forced regeneration. Contact us for help or DPF advice.                  <br />
                  <br />
                </p>
           
                  <Button href="tel:01217535553" className="mt-6 w-full">
                    Contact Us
                  </Button>
       
              </div>
            </div>
          </div>



          <div id='cleanairzone' className="relative items-center overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400 sm:col-span-6">
            <CleanAirZone />
          </div>
        </div>
      </Container>
    </section>
  )
}
