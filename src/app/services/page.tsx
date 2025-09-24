"use client";

import { AnimatedServices } from "@/components/ui/animated-services"
import Footer from "@/components/Footer"
import { div } from "motion/react-client";

export default function Services(){
    return (
        <div>
            <section className="bg-black">
                <div className="flex items-center justify-center py-4">
                    {AnimatedServices({ services: [
                    { 
                        name: "AI & ML Solutions", 
                        description: "Leverage our expertise in artificial intelligence and machine learning to automate processes, gain insights from data, and make smarter business decisions.",
                        subtitle: "You should add a subtitle here",
                        src: "/images/Artificial-intelligence.jpg"
                    },
                    { 
                        name: "Custom Software Development", 
                        description: "From concept to deployment, our team of expert developers builds tailor-made software solutions that address your specific business requirements.",
                        subtitle: "You should add a subtitle here",
                        src: "/images/Coding.jpeg"
                    },
                    { 
                        name: "Insurance Technology", 
                        description: "Specialized solutions for P&C insurance and claims processing, optimizing workflows and enhancing customer experiences in the insurance sector.",
                        subtitle: "You should add a subtitle here",
                        src: "/images/Insurance.jpg"
                    }
                    ] })}
                </div>
            </section>
            <section className="w-full bg-white h-100">
                <div>KNOW YOUR REQUIREMENTS</div>
            </section>
        </div>
    );
}

