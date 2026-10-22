import Config from "@/config/config";
import { FC } from "react";
import Reveal from "./Reveal";

const Education: FC = () => {
    const { schools, certificates } = Config.Education;

    return (
        <section id="edukacja" className="py-10 flex flex-col gap-y-8">
            <Reveal>
                <h4 className="text-content-muted font-mono uppercase">Edukacja i Certyfikaty</h4>
            </Reveal>
            <hr className="border-b border-border-line" />
            <div className="flex flex-col gap-y-6">
                <h5 className="text-sm font-mono text-content-nav uppercase tracking-wider">/ Wykształcenie</h5>
                {schools.map((school, index) => (
                    <Reveal key={index} delay={index * 100} className="flex flex-col sm:flex-row gap-x-4">
                        <p className="font-mono text-sm text-content-muted w-48 shrink-0">
                            {school.startDate} - {school.endDate}
                        </p>
                        <div className="flex flex-col gap-y-1">
                            <h6 className="font-bold text-content-primary">
                                {school.degree} <span className="text-content-muted">@ {school.name}</span>
                            </h6>
                            {school.description && (
                                <p className="text-content-bio text-sm mt-1">{school.description}</p>
                            )}
                        </div>
                    </Reveal>
                ))}
            </div>

            <hr className="border-b border-border-line/50" />
            <div className="flex flex-col gap-y-4">
                <h5 className="text-sm font-mono text-content-nav uppercase tracking-wider">/ Certyfikaty</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {certificates.map((cert, index) => (
                        <Reveal key={index} delay={(index % 2) * 100} className="h-full">
                        <div 
                            className="h-full bg-bg-card border border-border-card rounded-lg p-4 flex flex-col justify-between gap-y-2 hover:border-border-card-hover hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <div className="flex flex-col gap-y-1">
                                <h6 className="font-semibold text-sm text-content-primary">
                                    {cert.name}
                                </h6>
                                <p className="text-xs text-content-muted font-mono">
                                    {cert.issuer} • {cert.date}
                                </p>
                            </div>
                        </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;