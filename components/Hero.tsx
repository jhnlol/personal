'use client';

import Config from "@/config/config";
import { FC } from "react";

const Hero: FC = () => {
    const redirect = (url: string) => {
        window.open(url, "_blank");
    }
    return (
        <section className="py-10 flex flex-col gap-y-3.5">
            <h1 className="text-6xl font-bold">Jan Bożek</h1>
            <h4 className="text-2xl font-semibold text-content-muted">Full-stack Developer</h4>
            <p className="text-lg text-content-bio md:max-w-3xl">Od 3 lat buduję aplikacje webowe od bazy danych po interfejs. Pracuję głównie z TypeScript, React i .NET. Mieszkam w Katowicach.</p>
            <div className="flex gap-x-2.5">
                <button className="bg-content-primary text-bg-main hover:bg-content-secondary px-5 py-2 rounded-lg cursor-pointer" onClick={() => redirect(Config.Links.github)}>GitHub</button>
                <button className="bg-bg-main text-content-primary px-5 py-2 rounded-lg border border-border-btn cursor-pointer" onClick={() => redirect(Config.Links.email)}>Kontakt</button>
            </div>
        </section>
    )
}
export default Hero;