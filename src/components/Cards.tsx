import { Button } from './Button'

const products = [
  {
    id: 1,
    name: 'Brakes',
    description: 'Your brakes are the most important safety-critical system fitted to your vehicle and it is essential that they are inspected regularly to ensure they remain in good working order. To ensure you get the best advice and the best prices on brakes, speak directly to us.',
    color: 'Black',
    price: '$35',
    href: '#',
    imageSrc: '/ADH Brakes 1.jpg',
    imageAlt:
      'ADH Brake Pad Repairs and Fitting',
    availableColors: [
      { name: 'Black', colorBg: '#111827' },
      { name: 'Brass', colorBg: '#FDE68A' },
      { name: 'Chrome', colorBg: '#E5E7EB' },
    ],
  },
  {
    id: 2,
    name: 'Car Batteries',
    description: 'Your car battery is the only power source used for getting your car started and faulty batteries are the number one reason for breakdown calls in the UK. Don’t wait until cold weather shows you how poor your battery health is. We offer Free checks on your battery and charging system.',
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
    description: 'Having trouble with the clutch on your car or van? We will carry out a free no obligation clutch check including the clutch hydraulics.',
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
    description: 'Our well-trained professionals are highly efficient in identifying and repairing faults in the suspension system. Moreover, they know how to use the latest industry-grade tools while dealing with complicated vehicular issues. So, you can consider us as your best bet for resolving all sorts of suspension damages.',
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
    description: 'We will carry out a free no obligation check of your exhaust system for you while you wait, should you require part or all of the system replacing we can supply you with a competitive price to suit your pocket. We also offer free fitting on most exhaust systems.',
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

export default function Cards() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Repairs
          </h2>
        </div>

        <div className="mt-6 grid gap-y-6 grid-cols-2 lg:grid-cols-5 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="sm:aspect-none group aspect-[3/4] overflow-hidden rounded-lg sm:relative sm:h-full"
            >
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="object-contain object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
              />
              <div
                aria-hidden="true"
                className="bg-gradient-to-b from-transparent to-black opacity-70 sm:absolute sm:inset-0"
              ></div>
              <div className="flex items-end p-6 sm:absolute sm:inset-0">
                <div>
                  <h3 className="font-semibold text-white">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p aria-hidden="true" className="mt-1 text-sm text-white">
                    {product.description}
                  </p>
                  <div className="mt-4">
                  <Button href="tel:01217535553" className='relative z-40 w-fit'>Book Now</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  )
}
