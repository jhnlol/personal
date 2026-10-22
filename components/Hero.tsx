'use client';

import Config from "@/config/config";
import { ArrowRight } from "lucide-react";
import { FC } from "react";

const Hero: FC = () => {
    const redirect = (url: string) => {
        window.open(url, "_blank");
    }
    return (
        <section className="relative py-16 md:py-20 flex flex-col gap-y-4">
            <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-github-2/10 blur-3xl"
            />
            <div className="flex items-center gap-x-2 font-mono text-xs text-content-muted animate-fade-up">
                <span className="h-2 w-2 rounded-full bg-github-4 animate-pulse-dot" />
                Katowice, PL
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight animate-fade-up [animation-delay:100ms]">
                Jan Bożek
            </h1>
            <h4 className="text-xl md:text-2xl font-semibold text-content-muted font-mono animate-fade-up [animation-delay:200ms]">
                Full-stack Developer<span className="text-github-4 animate-blink">_</span>
            </h4>
            <p className="text-lg leading-relaxed text-content-bio md:max-w-3xl animate-fade-up [animation-delay:300ms]">
                Od 3 lat buduję aplikacje webowe od bazy danych po interfejs. Pracuję głównie z TypeScript, React i .NET. Mieszkam w Katowicach.
            </p>
            <div className="flex gap-x-2.5 pt-2 animate-fade-up [animation-delay:400ms]">
                <button
                    className="bg-content-primary text-bg-main hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_rgba(255,255,255,0.35)] active:translate-y-0 px-5 py-2 rounded-lg cursor-pointer font-semibold transition-all duration-200"
                    onClick={() => redirect(Config.Links.github)}
                >
                    GitHub
                </button>
                <button
                    className="group inline-flex items-center gap-x-1.5 bg-bg-main text-content-primary hover:bg-bg-stripe hover:border-border-card-hover hover:-translate-y-0.5 active:translate-y-0 px-5 py-2 rounded-lg border border-border-btn cursor-pointer font-semibold transition-all duration-200"
                    onClick={() => redirect(Config.Links.email)}
                >
                    Kontakt
                    <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                </button>
            </div>
        </section>
    )
}
export default Hero;
