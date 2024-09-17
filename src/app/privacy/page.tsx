import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { Heading, Lead, Paragraph } from '@/components/text'
import React from 'react'

export default function page() {
  return (
    <section className="bg-white py-48">
      <Container>
        <div className="max-w-5xl flex flex-col gap-16">
          <div className="flex flex-col gap-6">
            <Heading>Privacy Policy</Heading>

            <Lead>Introduction</Lead>
            <Paragraph>
              Welcome to ADH Automotive ("we," "our," "us"). We are committed to
              protecting your privacy and ensuring a safe online experience.
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website{' '}
              <a href="/" className="underline">
                https://www.adhautomotive.co.uk
              </a>{' '}
              (the "Site"). Please read this policy carefully.
            </Paragraph>
          </div>

          <div className="flex flex-col gap-6">
            <Heading>Information We Collect</Heading>

            <Lead>
              We may collect and process the following types of information:
            </Lead>
            <ul className="max-w-2xl list-inside list-disc space-y-4">
              <li>
                <strong>Personal Information:</strong> Such as your name, email
                address, phone number, and any other details you provide when
                contacting us or signing up for our services.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about your visit to our
                Site, including your IP address, browser type, operating system,
                referring URLs, pages viewed, and the dates and times of your
                visits.
              </li>
              <li>
                <strong>Cookies and Tracking Technologies:</strong> We use
                cookies and similar technologies to enhance your experience on
                our Site. Cookies are small files stored on your device that
                help us understand how you use our Site and improve its
                functionality.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <Heading>How We Use Your Information</Heading>

            <Lead>We use your information for the following purposes:</Lead>
            <ul className="max-w-2xl list-inside list-disc space-y-4">
              <li>
                <strong>To Provide and Improve Our Services:</strong> Including
                responding to inquiries, processing transactions, and enhancing
                our website.
              </li>
              <li>
                <strong>To Analyze Usage: </strong> Understanding how our Site
                is used to make improvements and ensure its functionality.
              </li>
              <li>
                <strong>To Comply with Legal Obligations:</strong> Ensuring we
                adhere to applicable laws and regulations.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <Heading>How We Share Your Information</Heading>

            <Lead className="max-w-2xl">
              We do not sell, trade, or otherwise transfer your personal
              information to outside parties except in the following
              circumstances:
            </Lead>
            <ul className="max-w-2xl list-inside list-disc space-y-4">
              <li>
                <strong>With Service Providers:</strong> We may share your
                information with trusted third-party service providers who
                assist us in operating our Site and conducting our business.
              </li>
              <li>
                <strong>For Legal Reasons: </strong> If required by law or to
                protect our rights, property, or safety, or that of others.
              </li>
              <li>
                <strong>In the Event of a Business Transfer:</strong> If we are
                involved in a merger, acquisition, or any form of sale of some
                or all of our assets, your information may be transferred.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <Heading>Security of Your Information</Heading>

            <Paragraph>
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the internet or electronic storage is completely
              secure, so we cannot guarantee absolute security.
            </Paragraph>
          </div>

          <div className="flex flex-col gap-6">
            <Heading>Your Rights</Heading>

            <Lead className="max-w-2xl">
              You have the following rights concerning your personal
              information:
            </Lead>
            <ul className="max-w-2xl list-inside list-disc space-y-4">
              <li>
                <strong>Access:</strong> You can request access to the personal
                information we hold about you.
              </li>
              <li>
                <strong>Correction: </strong> You can request correction of any
                inaccurate or incomplete information.
              </li>
              <li>
                <strong>Deletion: </strong> You can request that we delete your
                personal information under certain circumstances.
              </li>
              <li>
                <strong>Opt-Out: </strong> You can opt-out of receiving
                marketing communications from us at any time.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <Heading>Changes to This Privacy Policy</Heading>

            <Paragraph>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on this page.
              Your continued use of the Site after any changes indicates your
              acceptance of the revised policy.
            </Paragraph>
          </div>

          <div className="flex flex-col gap-6">
            <Heading>Contact Us</Heading>
            <Lead className='max-w-2xl'>
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us at:
            </Lead>
            <Paragraph>
              ADH Automotive
              <br />
              65 Cheapside
              <br />
              Digbeth
              <br />
              Birmingham, B12 ORP
              <br />
              <br />
              Telephone: 0121 753 5553
              <br />
              Email: adhautomotive@btconnect.com
            </Paragraph>
          </div>
        </div>
      </Container>
    </section>
  )
}
