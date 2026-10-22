import Config from "@/config/config";
import { FC } from "react";
import Reveal from "./Reveal";

const Stack: FC = () => {
    return (
        <section id="stack" className="py-10 flex flex-col gap-y-6">
            <Reveal>
                <h4 className="text-content-muted font-mono uppercase">Stack</h4>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Config.Stack?.map((category, index) => {
                    const Icon = category.icon;
                    return (
                        <Reveal key={index} delay={(index % 2) * 120} className="h-full">
                            <div className="h-full bg-bg-card border border-border-card hover:border-border-card-hover rounded-xl p-5 flex flex-col gap-y-4 transition-all duration-300 group">
                                <div className="flex items-center gap-x-2.5">
                                    <span className="flex items-center justify-center h-8 w-8 rounded-lg bg-bg-stripe border border-border-tag text-content-nav group-hover:text-github-4 transition-colors duration-300">
                                        <Icon size={16} />
                                    </span>
                                    <h5 className="font-bold text-content-primary group-hover:text-white transition-colors">
                                        {category.name}
                                    </h5>
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                    {category.items.map((item, i) => (
                                        <span
                                            key={i}
                                            className="text-xs font-mono text-content-stack bg-bg-stripe border border-border-tag hover:border-border-card-hover hover:text-content-primary px-2 py-0.5 rounded transition-colors"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    );
                })}
            </div>
        </section>
    );
};

export default Stack;
