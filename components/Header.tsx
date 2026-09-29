'use client';

import { FC, useState } from "react";

const Header: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "#doswiadczenie", label: "/DOSWIADCZENIE", id: "doswiadczenie" },
        { href: "#projekty", label: "/PROJEKTY", id: "projekty" },
        { href: "#edukacja", label: "/EDUKACJA", id: "edukacja" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-bg-main/80 backdrop-blur-md border-b border-border-line transition-all duration-300">
            <div className="max-w-4xl mx-auto flex items-center justify-between px-4 md:px-8 h-16">
                <a href="#" className="flex items-center gap-x-2.5 group">
                    <span className="font-bold text-base md:text-lg text-content-primary group-hover:text-white transition-colors tracking-tight">
                        Jan Bożek
                    </span>
                </a>

                <nav className="hidden md:flex items-center gap-x-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            className="text-xs font-mono transition-all duration-200 flex items-center gap-x-1.5 py-1 text-content-nav hover:text-content-primary"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex items-center justify-center p-2 rounded-lg text-content-muted hover:text-content-primary hover:bg-bg-stripe transition-colors"
                    aria-label="Toggle menu"
                >
                    <div className="w-5 h-5 flex flex-col justify-around">
                        <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`h-0.5 w-full bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                        <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </div>
                </button>
            </div>

            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-border-line/50 bg-bg-card/95 backdrop-blur-lg ${
                    isOpen ? "max-h-60 opacity-100 py-4 px-6" : "max-h-0 opacity-0 py-0 px-6"
                }`}
            >
                <nav className="flex flex-col gap-y-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-content-nav hover:text-content-primary font-mono text-xs py-2 transition-colors border-b border-border-line/30 last:border-none flex items-center justify-between"
                        >
                            <span>{link.label}</span>
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;