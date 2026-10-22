import Config from "@/config/config";
import { ArrowUpRight } from "lucide-react";
import { FC } from "react";
import Reveal from "./Reveal";

const Projects: FC = () => {
    return (
        <section id="projekty" className="py-10 flex flex-col gap-y-6">
            <Reveal>
                <h4 className="text-content-muted font-mono uppercase">Projekty</h4>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Config.Projects?.map((project, index) => (
                    <Reveal key={index} delay={(index % 2) * 120} className="h-full">
                    <div 
                        className="h-full bg-bg-card border border-border-card hover:border-border-card-hover hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.8)] rounded-xl p-5 flex flex-col justify-between gap-y-4 transition-all duration-300 group"
                    >
                        <div className="flex flex-col gap-y-2.5">
                            <div className="flex items-center justify-between">
                                <h5 className="font-bold text-lg text-content-primary group-hover:text-white transition-colors">
                                    {project.title}
                                </h5>
                                {project.featured && (
                                    <span className="text-xs font-mono bg-bg-stripe border border-border-tag text-content-muted px-2 py-0.5 rounded">
                                        Wyróżniony
                                    </span>
                                )}
                            </div>
                            <p className="text-content-bio text-sm leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        <div className="flex flex-col gap-y-4">
                            <div className="flex flex-wrap gap-1.5">
                                {project.stack.map((tech, i) => (
                                    <span 
                                        key={i} 
                                        className="text-xs font-mono text-content-stack bg-bg-stripe border border-border-tag px-2 py-0.5 rounded transition-colors group-hover:border-border-btn"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center gap-x-4 pt-2 border-t border-border-line text-xs font-mono">
                                {project.githubUrl && (
                                    <a 
                                        href={project.githubUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="group/link text-content-nav hover:text-content-primary transition-colors flex items-center gap-x-1"
                                    >
                                        GitHub <ArrowUpRight size={14} className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                    </a>
                                )}
                                {project.liveUrl && (
                                    <a 
                                        href={project.liveUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="group/link text-content-nav hover:text-content-primary transition-colors flex items-center gap-x-1"
                                    >
                                        Live Demo <ArrowUpRight size={14} className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
};

export default Projects;