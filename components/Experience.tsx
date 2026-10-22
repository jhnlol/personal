import Config from "@/config/config";
import { FC } from "react";
import Reveal from "./Reveal";

const Experience: FC = () => {
    return (
        <section id="doswiadczenie" className="py-10 flex flex-col gap-y-3.5">
            <Reveal>
                <h4 className="text-content-muted font-mono uppercase">Doświadczenie</h4>
            </Reveal>
            {Config.Experience?.map((exp, index) => (
                <Reveal key={index} delay={index * 100} className="flex flex-col gap-y-3.5">
                    <hr className="border-b border-border-line" />
                    <div className="group flex flex-col sm:flex-row gap-x-4 -mx-3 px-3 py-2 rounded-lg hover:bg-bg-card transition-colors duration-300">
                        <p className="font-mono text-sm text-content-muted w-48 shrink-0">
                            {exp.startDate} - {exp.endDate}
                        </p>
                        <div className="flex flex-col gap-y-1">
                            <h5 className="font-bold text-content-primary group-hover:text-white transition-colors">
                                {exp.position} <span className="text-content-muted">@ {exp.company}</span>
                            </h5>
                            <p className="text-content-bio text-sm leading-relaxed">{exp.description}</p>
                        </div>
                    </div>
                </Reveal>
            ))}
        </section>
    );
};

export default Experience;
