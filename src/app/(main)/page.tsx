
import Announcement from '@/components/Announcement'
import CarServicingList from '@/components/CarServicingList'
import Contact from '@/components/Contact'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import GoogleReviews from '@/components/GoogleReviews'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import Repairs from '@/components/Repairs'
import { Reviews } from '@/components/Reviews'
import SecondaryCarServices from '@/components/SecondaryCarServices'
import { Testimonials } from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <CarServicingList />
      <SecondaryCarServices />
      <GoogleReviews />
      <Contact />
    </>
  )
}
