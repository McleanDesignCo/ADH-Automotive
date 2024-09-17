import Image from "next/image";
import { Button } from "./Button";
import { Container } from "./Container";

export default function CleanAirZone() {
    return (
        <section
        id="get-free-shares-today"
        className="relative overflow-hidden bg-green-900 p-6 py-20 sm:py-28"
      >
        <Container className="relative">
          <div className="mx-auto max-w-xl sm:text-center">
            <Image 
            src='/CleanAirZoneSigns.webp'
            alt=""
            width={600}
            height={131}
            className="w-auto h-12 sm:mx-auto mb-6"/>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
              Clean Air Zone - Is your car exempt from the charge?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            If your vehicle is subject to Birmingham City Councils clean air zone charges, contact us at ADH Automotive, we maybe able to help with the charge. Birmingham's Clean air zone came into force in June 2021.
            </p>
            
              <Button href='https://multiple-vehiclecheck-pay.drive-clean-air-zone.service.gov.uk/what_would_you_like_to_do' variant="outline" color="white" className="mt-8 flex sm:justify-center">Check your vehicle today</Button>
   
          </div>
        </Container>
      </section>
    )
  }
  