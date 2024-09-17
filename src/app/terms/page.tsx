import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { Heading, Lead, Paragraph } from '@/components/text'
import React from 'react'

export default function page() {
  return (
    <section className="bg-white py-48">
      <Container>
        <div className="flex max-w-5xl flex-col gap-16">
          <div className="flex flex-col gap-6">
            <Heading>Terms & Conditions</Heading>

            <Lead>Introduction</Lead>
            <Paragraph>
              Welcome to ADH Automotive ("we," "our," "us"). These Terms and
              Conditions ("Terms") govern your use of our website{' '}
              <a href="/" className="underline">
                https://www.adhautomotive.co.uk
              </a>{' '}
              (the "Site"). By accessing or using our Site, you agree to comply
              with and be bound by these Terms. If you do not agree with these
              Terms, please do not use our Site.
            </Paragraph>
          </div>

          <div className="flex flex-col gap-6">
            <Heading>Use of the Site</Heading>

            <ul className="max-w-2xl list-inside list-disc space-y-4">
              <li>
                <strong>Eligibility:</strong> You must be at least 18 years old
                or have the consent of a parent or guardian to use our Site.
              </li>
              <li>
                <strong> License:</strong> We grant you a limited,
                non-exclusive, non-transferable, and revocable license to access
                and use our Site for personal, non-commercial purposes in
                accordance with these Terms.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <Heading>Intellectual Property</Heading>
            <ul className="max-w-2xl list-inside list-disc space-y-4">
              <li>
                <strong>Ownership: </strong> All content, trademarks, and other
                intellectual property on the Site are owned by or licensed to
                ADH Automotive. You may not use, reproduce, modify, or
                distribute any content from our Site without our prior written
                consent.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <Heading>User Conduct</Heading>

            <Lead className="max-w-2xl">
              <strong>Prohibited Activities:</strong> You agree not to engage in
              any activities that may:
            </Lead>
            <ul className="max-w-2xl list-inside list-disc space-y-4">
              <li>Violate any applicable laws or regulations.</li>
              <li>Infringe on the rights of others.</li>
              <li>Interfere with or disrupt the Site or its servers.</li>
              <li>Transmit any harmful or malicious code.</li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <Heading>Third-Party Links</Heading>

            <Paragraph>
              Our Site may contain links to third-party websites. These links
              are provided for your convenience and do not imply endorsement or
              responsibility for the content or practices of those sites. We
              encourage you to review the terms and privacy policies of any
              third-party sites you visit.
            </Paragraph>
          </div>

          <div className="flex flex-col gap-6">
            <Heading>Disclaimer of Warranties</Heading>

            <Paragraph>
              Our Site and its content are provided on an "as is" and "as
              available" basis. We make no representations or warranties of any
              kind, express or implied, regarding the operation or availability
              of the Site or the information, content, materials, or products
              included on it.
            </Paragraph>
          </div>

          <div className="flex flex-col gap-6">
            <Heading>Limitation of Liability</Heading>

            <Paragraph>
              To the fullest extent permitted by law, ADH Automotive shall not
              be liable for any indirect, incidental, special, consequential, or
              punitive damages arising out of or in connection with your use of
              our Site, including but not limited to loss of data, loss of
              profits, or business interruption.
            </Paragraph>
          </div>

          <div className="flex flex-col gap-6">
            <Heading>Indemnification</Heading>

            <Paragraph>
              You agree to indemnify, defend, and hold harmless ADH Automotive,
              its affiliates, and their respective officers, directors,
              employees, and agents from and against any claims, liabilities,
              damages, losses, or expenses arising out of or related to your use
              of the Site or your violation of these Terms.
            </Paragraph>
          </div>

          <div className="flex flex-col gap-6">
            <Heading>Changes to Terms</Heading>

            <Paragraph>
              We reserve the right to update or modify these Terms at any time.
              Any changes will be posted on this page, and your continued use of
              the Site after such changes constitutes your acceptance of the
              revised Terms.
            </Paragraph>
          </div>

          <div className="flex flex-col gap-6">
            <Heading>Termination</Heading>

            <Paragraph>
              We may terminate or suspend your access to our Site at our sole
              discretion, without notice, for conduct that we believe violates
              these Terms or is harmful to other users or the Site.
            </Paragraph>
          </div>

          <div className="flex flex-col gap-6">
            <Heading>Governing Law

</Heading>

            <Paragraph>
            These Terms shall be governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law principles. Any disputes arising out of or related to these Terms or the Site shall be resolved in the courts of the United Kingdom.


            </Paragraph>
          </div>



          <div className="flex flex-col gap-6">
            <Heading>Contact Us</Heading>
            <Lead className="max-w-xl">
              If you have any questions or concerns about these Terms, please contact us at:
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
