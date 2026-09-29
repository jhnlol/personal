import Config from "@/config/config";
import { FC } from "react";

const Experience: FC = () => {
    return (
        <section className="py-10 flex flex-col gap-y-3.5">
            <h4 className=" text-content-muted font-mono uppercase ">Doświadczenie</h4>
            {Config.Experience?.map((exp, index) => (
                <div key={index} className="flex flex-col gap-y-3.5">
                    <hr className="border-b border-border-line" />
                    <div className="flex flex-col sm:flex-row gap-x-4">
                        <p className="font-mono text-sm text-content-muted w-48 shrink-0">
                            {exp.startDate} - {exp.endDate}
                        </p>
                        <div className="flex flex-col gap-y-1">
                            <h5 className="font-bold text-content-primary">
                                {exp.position} <span className="text-content-muted">@ {exp.company}</span>
                            </h5>
                            <p className="text-content-bio text-sm">{exp.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Experience;