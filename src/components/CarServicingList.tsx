import { Fragment } from 'react'
import { CheckIcon, CheckCircleIcon, MinusIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Interim',
    id: 'tier-basic',
    href: '#',
    priceMonthly: 'From £XX',
    description: 'Quis suspendisse ut fermentum neque vivamus non tellus.',
    mostPopular: false,
  },
  {
    name: 'Full',
    id: 'tier-essential',
    href: '#',
    priceMonthly: 'From £XX',
    description: 'Quis eleifend a tincidunt pellentesque. A tempor in sed.',
    mostPopular: true,
  },
]
const sections = [
  {
    name: 'Items',
    features: [
      { name: 'Engine Oil Changed', tiers: { Interim: true, Full: true, Premium: true } },
      { name: 'Oil Filter Replaced', tiers: { Interim: true, Full: true, Premium: true } },
      { name: 'All fluid levels checked and adjusted (if necessary)', tiers: { Interim: true, Full: true, Premium: true } },
      { name: 'Pollen/dust filter changed (if applicable)', tiers: { Interim: true, Full: true, Premium: 'Up to 50 users' } },
      { name: 'Wheels removed, Brakes checked and adjusted if required', tiers: { Interim: true, Full: true, Premium: true } },
      { name: 'Tyre pressures checked and adjusted', tiers: { Interim: true, Full: true, Premium: true } },
      { name: 'Door hinges lubricated', tiers: { Interim: true, Full: true, Premium: true } },
      { name: 'Wipers and washers checked', tiers: { Interim: true, Full: true, Premium: true } },
      { name: 'Vehicle road tested (any faults are reported)', tiers: { Interim: true, Full: true, Premium: true } },
      { name: 'No unauthorised work carried out without consent', tiers: {Interim: true, Full: true, Premium: true } },
      { name: 'Stamp service book', tiers: { Interim: true,Full: true, Premium: true } },
      { name: 'Spark plugs changed (if applicable)', tiers: { Interim: false, Full: true, Premium: true } },
      { name: 'Air filter changed', tiers: { Interim: false, Full: true, Premium: true } },
      { name: 'Fuel filter changed', tiers: { Interim: false, Full: true, Premium: true } },
    ],
  },

]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function CarServicingList() {
  return (
    <div id='vehicle-servicing' className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-sm font-semibold leading-7 text-green-600">Clear and transparent car servicing prices.</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Car Servicing
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-md leading-6 text-gray-600">
        At ADH Automotive in Birmingham we understand how important it is for you to have your car serviced correctly and efficiently, our aim is to provide good service and have repeat custom We specialise in servicing, repairs, MOT, tyres and diagnostics on any make or model of car, and we have the expertise and experience to get you back on the road swiftly.
        
        </p>

        {/* xs to lg */}
        <div className="mx-auto mt-12 max-w-md space-y-8 sm:mt-16 lg:hidden">
          {tiers.map((tier) => (
            <section
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'rounded-xl bg-gray-400/5 ring-1 ring-inset ring-gray-200' : '',
                'p-8',
              )}
            >
              <h3 id={tier.id} className="text-sm font-semibold leading-6 text-green-700">
                {tier.name} Service
              </h3>
              <p className="mt-2 flex items-baseline gap-x-1 text-gray-900">
                <span className="text-4xl font-bold">{tier.priceMonthly}</span>
                
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-[#005900] text-white hover:bg-indigo-500'
                    : 'text-[#005900] ring-1 ring-inset ring-[#00590020] hover:ring-[#005900]',
                  'mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                )}
              >
                Book Service
              </a>
              <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-gray-900">
                {sections.map((section) => (
                  <li key={section.name}>
                    <ul role="list" className="space-y-4">
                      {section.features.map((feature) =>
                        feature.tiers[tier.name as keyof typeof feature.tiers] ? (
                          <li key={feature.name} className="flex gap-x-3">
                            <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-green-700" />
                            <span>
                              {feature.name}{' '}
                              {typeof feature.tiers[tier.name as keyof typeof feature.tiers] === 'string' ? (
                                <span className="text-sm leading-6 text-gray-500">({feature.tiers[tier.name as keyof typeof feature.tiers]})</span>
                              ) : null}
                            </span>
                          </li>
                        ) : null,
                      )}
                    </ul>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* lg+ */}
        <div className="isolate mt-20 hidden lg:block">
          <div className="relative -mx-8">
            {tiers.some((tier) => tier.mostPopular) ? (
              <div className="absolute inset-x-4 inset-y-0 -z-10 flex">
                <div
                  style={{ marginLeft: `${(tiers.findIndex((tier) => tier.mostPopular) + 1) * 33.33}%` }}
                  aria-hidden="true"
                  className="flex w-1/3 px-4"
                >
                  <div className="w-full rounded-t-xl border-x border-t border-gray-900/10 bg-gray-400/5" />
                </div>
              </div>
            ) : null}
            <table className="w-full table-fixed border-separate border-spacing-x-8 text-left">
              <caption className="sr-only">Pricing plan comparison</caption>
              <colgroup>
                <col className="w-1/3" />
                <col className="w-1/3" />
                <col className="w-1/3" />
              </colgroup>
              <thead>
                <tr>
                  <td />
                  {tiers.map((tier) => (
                    <th key={tier.id} scope="col" className="px-6 pt-6 xl:px-8 xl:pt-8">
                      <div className="text-sm font-semibold leading-7 text-green-600">{tier.name}  Service</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <span className="sr-only">Price</span>
                  </th>
                  {tiers.map((tier) => (
                    <td key={tier.id} className="px-6 pt-2 xl:px-8">
                      <div className="flex items-baseline gap-x-1 text-gray-900">
                        <span className="text-4xl font-bold">{tier.priceMonthly}</span>
                      </div>
                      <a
                        href={tier.href}
                        className={classNames(
                          tier.mostPopular
                            ? 'bg-[#005900] text-white hover:bg-green-700'
                            : 'text-[#005900] ring-1 ring-inset ring-[#00590020] hover:bg-green-50 hover:ring-[#005900]',
                          'mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                        )}
                      >
                        Book {tier.name} Service
                      </a>
                    </td>
                  ))}
                </tr>
                {sections.map((section, sectionIdx) => (
                  <Fragment key={section.name}>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan={3}
                        className={classNames(
                          sectionIdx === 0 ? 'pt-8' : 'pt-16',
                          'pb-4 text-sm font-semibold leading-6 text-gray-900',
                        )}
                      >
                        {section.name}
                        <div className="absolute inset-x-8 mt-4 h-px bg-gray-900/10" />
                      </th>
                    </tr>
                    {section.features.map((feature) => (
                      <tr key={feature.name}>
                        <th scope="row" className="py-4 text-sm font-normal leading-6 text-gray-900">
                          {feature.name}
                          <div className="absolute inset-x-8 mt-4 h-px bg-gray-900/5" />
                        </th>
                        {tiers.map((tier) => (
                          <td key={tier.id} className="px-6 py-4 xl:px-8">
                            {typeof feature.tiers[tier.name as keyof typeof feature.tiers] === 'string' ? (
                              <div className="text-center text-sm leading-6 text-gray-500">
                                {feature.tiers[tier.name as keyof typeof feature.tiers]}
                              </div>
                            ) : (
                              <>
                                {feature.tiers[tier.name as keyof typeof feature.tiers] === true ? (
                                  <CheckCircleIcon aria-hidden="true" className="mx-auto h-5 w-5 text-green-700" />
                                ) : (
                                  <MinusIcon aria-hidden="true" className="mx-auto h-5 w-5 text-gray-400" />
                                )}

                                <span className="sr-only">
                                  {feature.tiers[tier.name as keyof typeof feature.tiers] === true ? 'Included' : 'Not included'} in {tier.name}
                                </span>
                              </>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
