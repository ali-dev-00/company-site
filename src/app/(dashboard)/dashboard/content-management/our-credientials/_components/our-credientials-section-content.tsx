'use client'
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


type QAItem = {
    question: string;
    answer: string;
};

const OurCredentialsSectionsContent: React.FC = () => {
    // Internal state for advisoryBoard with title, subtitle, and questions
    const [advisoryBoard, setAdvisoryBoard] = useState({
        questions: [
            { question: "", answer: "" },
            { question: "", answer: "" },
            { question: "", answer: "" },
            { question: "", answer: "" },
            { question: "", answer: "" },
            { question: "", answer: "" },
            { question: "", answer: "" },
            { question: "", answer: "" },
            { question: "", answer: "" },
            { question: "", answer: "" },
        ],
    });

    const handleQAChange = (
        index: number,
        field: keyof QAItem,
        value: string
    ) => {
        setAdvisoryBoard((prev) => {
            const updatedQuestions = prev.questions.map((q, i) =>
                i === index ? { ...q, [field]: value } : q
            );
            return { ...prev, questions: updatedQuestions };
        });
    };

    return (
        <section className="px-6 py-2">
            <div className="border-gray-200 border mx-auto bg-white p-8 rounded-xl shadow-sm">
                <div className="space-y-6">

                    {/* Styled Numbered Q&A */}
                    {advisoryBoard.questions.map((qa, index) => (
                        <div key={index} className="space-y-2">
                            <div className="flex items-center font-semibold">
                                {index + 1}-
                                <span className="ml-1">Question</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input
                                    placeholder="Question"
                                    value={qa.question}
                                    onChange={(e) =>
                                        handleQAChange(index, "question", e.target.value)
                                    }
                                    className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                                />
                                <Input
                                    placeholder="Answer"
                                    value={qa.answer}
                                    onChange={(e) =>
                                        handleQAChange(index, "answer", e.target.value)
                                    }
                                    className="w-full h-12 border-gray-300 focus:border-red-600 focus:ring-red-600"
                                />
                            </div>
                        </div>
                    ))}


                </div>
                <div className="flex justify-end pt-4">
                    <Button className="bg-red-600 hover:bg-red-600/90 text-white font-semibold px-6 py-3 rounded-md">
                        Save
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default OurCredentialsSectionsContent;
