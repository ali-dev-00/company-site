"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function CertificationsSection() {
  const certificationsData = [
    {
      value: "cert-1",
      title: "Business Declares and UN's Race to Net Zero",
      content: "Details about Business Declares and UN's Race to Net Zero commitment.",
    },
    {
      value: "cert-2",
      title: "Authorised and regulated by the Financial Conduct Authority, FRN 727252",
      content: "Information regarding authorization and regulation by the Financial Conduct Authority.",
    },
    {
      value: "cert-3",
      title: "Cyber Essential and Cyber Essentials PLUS",
      content: "Details on Cyber Essential and Cyber Essentials PLUS certifications.",
    },
    {
      value: "cert-4",
      title: "Disability Confident Scheme - Leader (level 3)",
      content: "Information about the Disability Confident Scheme at Leader level 3.",
    },
    {
      value: "cert-5",
      title: "Investors in People (IIP) - Gold accreditation",
      content: "Details on the Investors in People Gold accreditation.",
    },
    {
      value: "cert-6",
      title: "Real Living Wage Employer",
      content: "Information about being a Real Living Wage Employer.",
    },
    {
      value: "cert-7",
      title: "All Equals Charter - Good Practice (level 3)",
      content: "Details on the All Equals Charter Good Practice at level 3.",
    },
    {
      value: "cert-8",
      title: "Working Families Employer Member",
      content: "Information about being a Working Families Employer Member.",
    },
    {
      value: "cert-9",
      title: "Greater Manchester Good Employment Charter",
      content: "Details on the Greater Manchester Good Employment Charter.",
    },
    {
      value: "cert-10",
      title: "Armed Forces Covenant (and 'Silver Award' in Employer Recognition Scheme)",
      content: "Information about the Armed Forces Covenant and Silver Award.",
    },
    {
      value: "cert-11",
      title: "PeoplePlus Social Recruitment Covenant",
      content: "Details on the PeoplePlus Social Recruitment Covenant.",
    },
    {
      value: "cert-12",
      title: "ISO 9001 certification",
      content: "Information about ISO 9001 certification.",
    },
    {
      value: "cert-13",
      title: "ISO 14001 certification",
      content: "Information about ISO 14001 certification.",
    },
    {
      value: "cert-14",
      title: "ISO 27001 certification",
      content: "Information about ISO 27001 certification.",
    },
    {
      value: "cert-15",
      title: "matrix Standard",
      content: "Details on the matrix Standard.",
    },
    {
      value: "cert-16",
      title: "Mental Health at Work Commitment",
      content: "Information about the Mental Health at Work Commitment.",
    },
    {
      value: "cert-17",
      title: "The Disability Employment Charter",
      content: "Details on The Disability Employment Charter.",
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
