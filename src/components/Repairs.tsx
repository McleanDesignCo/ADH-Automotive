import { Button } from './Button'

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: 'Brakes',
    description:
      'Your brakes are the most important safety-critical system fitted to your vehicle and it is essential that they are inspected regularly to ensure they remain in good working order. To ensure you get the best advice and the best prices on brakes, speak directly to us.',
    color: 'Black',
    price: '$35',
    href: '#',
    imageSrc: '/ADH Brakes 1.jpg',
    imageAlt: 'ADH Brake Pad Repairs and Fitting',
    availableColors: [
      { name: 'Black', colorBg: '#111827' },
      { name: 'Brass', colorBg: '#FDE68A' },
      { name: 'Chrome', colorBg: '#E5E7EB' },
    ],
  },
  {
    id: 2,
    name: 'Car Batteries',
    description:
      'Your car battery is the only power source used for getting your car started and faulty batteries are the number one reason for breakdown calls in the UK. Don’t wait until cold weather shows you how poor your battery health is. We offer Free checks on your battery and charging system.',
    color: 'Black',
    price: '$35',
    href: '#',
    imageSrc: '/ADH Battery 1.jpg',
    imageAlt:
      'Black machined steel pen with hexagonal grip and small white logo at top.',
    availableColors: [
      { name: 'Black', colorBg: '#111827' },
      { name: 'Brass', colorBg: '#FDE68A' },
      { name: 'Chrome', colorBg: '#E5E7EB' },
    ],
  },
  {
    id: 3,
    name: 'Clutch Replacement',
    description:
      'Having trouble with the clutch on your car or van? We will carry out a free no obligation clutch check including the clutch hydraulics.',
    color: 'Black',
    price: '$35',
    href: '#',
    imageSrc: '/ADH Clutch 1.jpg',
    imageAlt:
      'Black machined steel pen with hexagonal grip and small white logo at top.',
    availableColors: [
      { name: 'Black', colorBg: '#111827' },
      { name: 'Brass', colorBg: '#FDE68A' },
      { name: 'Chrome', colorBg: '#E5E7EB' },
    ],
  },
  {
    id: 4,
    name: 'Suspension',
    description:
      'Our well-trained professionals are highly efficient in identifying and repairing faults in the suspension system. Moreover, they know how to use the latest industry-grade tools while dealing with complicated vehicular issues. So, you can consider us as your best bet for resolving all sorts of suspension damages.',
    color: 'Black',
    price: '$35',
    href: '#',
    imageSrc: '/ADH Suspension 1.jpg',
    imageAlt:
      'Black machined steel pen with hexagonal grip and small white logo at top.',
    availableColors: [
      { name: 'Black', colorBg: '#111827' },
      { name: 'Brass', colorBg: '#FDE68A' },
      { name: 'Chrome', colorBg: '#E5E7EB' },
    ],
  },
  {
    id: 5,
    name: 'Exhaust Systems',
    description:
      'We will carry out a free no obligation check of your exhaust system for you while you wait, should you require part or all of the system replacing we can supply you with a competitive price to suit your pocket. We also offer free fitting on most exhaust systems.',
    color: 'Black',
    price: '$35',
    href: '#',
    imageSrc: 'ADH Exhausts 1.jpeg',
    imageAlt:
      'Black machined steel pen with hexagonal grip and small white logo at top.',
    availableColors: [
      { name: 'Black', colorBg: '#111827' },
      { name: 'Brass', colorBg: '#FDE68A' },
      { name: 'Chrome', colorBg: '#E5E7EB' },
    ],
  },

  // More products...
]

export default function Repairs() {
  return (
    <div className="bg-white">
      <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-none overflow-auto px-6 lg:px-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-sm font-semibold leading-7 text-green-600">What we offer</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Trusted Car Repair Services in Birmingham, Digbeth – Brakes, Batteries, Clutch & More
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-md leading-6 text-gray-600">
        ADH Automotive in Digbeth, Birmingham, offers expert vehicle repairs, including brakes, batteries, clutch replacement, suspension, and exhaust systems. Affordable, professional, and trusted car repair services.        </p>
        </div>

        <div className="relative mt-8 mx-auto">
          <div className="relative -mb-6 w-full overflow-x-auto pb-6">
            <ul
              role="list"
              className="inline-flex gap-4 "
            >
              {products.map((product) => (
                <li
                  key={product.id}
                  className="inline-flex w-[30vh] md:w-[40vh] lg:w-[50vh] flex-col"
                >
                  <div className="group relative">
                    <div
                      key={product.id}
                      className=" group aspect-[3/4] overflow-hidden rounded-lg relative h-full"
                    >
                      <img
                        alt={product.imageAlt}
                        src={product.imageSrc}
                        className="object-contain object-center group-hover:opacity-75 absolute inset-0 h-full w-full scale-90"
                      />
                      <div
                        aria-hidden="true"
                        className="bg-gradient-to-b from-transparent to-green-950 opacity-50 absolute inset-0"
                      ></div>
                      <div className="flex items-end p-6 absolute inset-0">
                        <div>
                          <h3 className="font-semibold text-white">
                            <a href="#">
                              <span className="absolute inset-0" />
                              {product.name}
                            </a>
                          </h3>
                          <p
                            aria-hidden="true"
                            className="mt-1 text-sm text-white"
                          >
                            {product.description}
                          </p>
                          <div className="mt-4">
                            <Button
                              href="tel:01217535553"
                              className="relative z-40 w-fit cursor-pointer"
                            >
                              Book Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
