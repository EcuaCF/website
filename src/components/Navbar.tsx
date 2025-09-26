"use client";

import Image from 'next/image';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import {useState, useEffect} from "react";
import {BiMenu, BiX} from "react-icons/bi";

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", controlNavbar);

        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, []);

    const navLinks = [
        {href: "/", label: "Home"},
        {href: "/about", label: "About"},
        {href: "/services", label: "Services"},
        {href: "/contact", label: "Contact"},
    ]

    return (
        <nav className={`fixed w-full bg-white shadow-md transition-transform duration-300 z-50 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link href="/">
                            <Image src="/images/Ecuacf_logo.png" alt="Logo" width={120} height={120} />
                        </Link>
                    </div>
                    <div className="hidden md:flex md:items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-black hover:text-blue-500 px-3 py-2 rounded-md text-md font-semibold transition-colors ${pathname === link.href ? "text-blue-600" : ''}`}>
                                    {link.label}
                                </Link>
                        ))}
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                                {isMobileMenuOpen ? (
                                    <BiMenu className="text-3x1" />
                                ) : (
                                    <BiX className="text-3x1" />
                                )}
                            </button>
                        </div>

                        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-64 opcaity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
                                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={'block px-3 py-2 rounded-md text-base font-medium ${pathname === link.href ? "text-blue-600" bg-blue-50" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"}'}>
                                                {link.label}
                                        </Link>
                                    ))}
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;