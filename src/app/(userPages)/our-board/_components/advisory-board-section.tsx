"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import TitleWithUnderline from "../../components/common/Title-with-underline"

export default function AdvisoryBoardSection() {
    const advisoryBoardData = [
        {
            value: "item-1",
            title: "Business Support and Business Finance",
            content:
                "Content for Business Support and Business Finance goes here. This section might include details about the members, their roles, and the specific areas they cover.",
        },
        {
            value: "item-2",
            title: "Internationalisation and Marketing",
            content:
                "Content for Internationalisation and Marketing goes here. This section might include details about the members, their roles, and the specific areas they cover.",
        },
        {
            value: "item-3",
            title: "Subsidiary Boards",
            content:
                "Content for Subsidiary Boards goes here. This section might include details about the members, their roles, and the specific areas they cover.",
        },
        {
            value: "item-4",
            title: "Sub-committees",
            content:
                "Content for Sub-committees goes here. This section might include details about the members, their roles, and the specific areas they cover.",
        },
    ]

    return (
        <section className=" bg-gray-50">
            <div className="max-w-[1366px] mx-auto py-12 px-4 md:px-8 lg:px-16">
                <div className="mb-3 max-w-[250px]">
                    <TitleWithUnderline title="Advisory Board" />
                </div>
                <p className="text-gray-700 text-base md:text-lg mb-8">
                    The Growth Company Board is supported by three Advisory Boards with external membership drawn from or approved
                    by The Growth Company Board. The Advisory Boards cover the three main business areas of the organisation:
                </p>

                <Accordion type="single" collapsible className="w-full">
                    {advisoryBoardData.map((item) => (
                        <AccordionItem key={item.value} value={item.value} className="border-b border-gray-200">
                            <AccordionTrigger className="text-[#ff2424] hover:no-underline text-lg md:text-xl font-medium py-4">
                                {item.title}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 text-base md:text-lg pb-4">{item.content}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
