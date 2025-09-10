"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function CertificationsSection() {
  const certificationsData = [
    {
      value: "cert-1",
      title: "Accredited Training Provider.",
      content: "Details about being an Accredited Training Provider.",
    },
    {
      value: "cert-2",
      title: "National award-making bodies are fully accredited",
      content: "Information about accreditation of national award-making bodies.",
    },
    {
      value: "cert-3",
      title: "The Certified Trainer for Security & Safety Programs",
      content: "Details about certification for Security & Safety Programs.",
    },
    {
      value: "cert-4",
      title: "Enhanced Vocational Skills Development + Award Winner:",
      content: "Information about Enhanced Vocational Skills Development and awards.",
    },
    {
      value: "cert-5",
      title: "ISO Standards Compliant Processes.",
      content: "Details about compliance with ISO Standards.",
    },
    {
      value: "cert-6",
      title: "Accredited by the National Education & Training Authority.",
      content: "Information about accreditation by the National Education & Training Authority.",
    },
    {
      value: "cert-7",
      title: "Member of the Somaliland Chamber of Commerce.",
      content: "Details about membership in the Somaliland Chamber of Commerce.",
    },
    {
      value: "cert-8",
      title: "Official Provider of First Aid and Emergency Response Training",
      content: "Information about being an official provider of First Aid and Emergency Response Training.",
    },
    {
      value: "cert-9",
      title: "The Certified Conflict Management Training Partner",
      content: "Details about certification as a Conflict Management Training Partner.",
    },
    {
      value: "cert-10",
      title: "Certified Centre for Cleaning & Support Services Certifications",
      content: "Information about certification for Cleaning & Support Services.",
    },
    {
      value: "cert-11",
      title: "Endorsed by local government and non-governmental organisations.",
      content: "Details about endorsements by local government and NGOs.",
    },
    {
      value: "cert-12",
      title: "Focused on Ethical and Fair Training Practices.",
      content: "Information about focus on ethical and fair training practices.",
    },
    {
      value: "cert-13",
      title: "Data Protection and Privacy Compliance.",
      content: "Details about compliance with data protection and privacy regulations.",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {certificationsData.map((item) => (
            <AccordionItem key={item.value} value={item.value} className="border-b border-gray-200">
              <AccordionTrigger className="text-gray-800 hover:no-underline text-base md:text-lg font-medium py-4 focus:text-red-600  ">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base pb-4">{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
