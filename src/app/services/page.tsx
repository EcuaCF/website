"use client";

import { AnimatedServices } from "@/components/ui/animated-services"
import { div } from "motion/react-client";

export default function Services(){
    return (
        <div>
            <section className="bg-black">
                <div className="text-white flex flex-col items-center justify-center py-2 px-4 md:px-8 lg:px-12">
                    <h1 className="lg:text-4xl font-bold py-8 text-white mt-28">Our Specialized Solutions</h1>
                    <p>From custom software development to advanced AI implementation, we deliver tailored solutions to meet your unique business challenges.</p>
                </div>
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
                <div className="text-black text-center mt-10">KNOW YOUR REQUIREMENTS</div>
            </section>
        </div>
    );
}

