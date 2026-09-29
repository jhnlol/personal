import Config from "@/config/config";
import { FC } from "react";

const Education: FC = () => {
    const { schools, certificates } = Config.Education;

    return (
        <section id="edukacja" className="py-10 flex flex-col gap-y-8">
            <h4 className="text-lg text-content-muted font-mono uppercase">Edukacja i Certyfikaty</h4>
            <hr className="border-b border-border-line" />
            <div className="flex flex-col gap-y-6">
                <h5 className="text-sm font-mono text-content-nav uppercase tracking-wider">/ Wykształcenie</h5>
                {schools.map((school, index) => (
                    <div key={index} className="flex flex-col sm:flex-row gap-x-4">
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
                    </div>
                ))}
            </div>

            <hr className="border-b border-border-line/50" />
            <div className="flex flex-col gap-y-4">
                <h5 className="text-sm font-mono text-content-nav uppercase tracking-wider">/ Certyfikaty</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {certificates.map((cert, index) => (
                        <div 
                            key={index}
                            className="bg-bg-card border border-border-card rounded-lg p-4 flex flex-col justify-between gap-y-2 hover:border-border-card-hover transition-colors"
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
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;