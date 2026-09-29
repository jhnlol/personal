import Config from "@/config/config";
import { FC } from "react";

const Projects: FC = () => {
    return (
        <section id="projekty" className="py-10 flex flex-col gap-y-6">
            <h4 className=" text-content-muted font-mono uppercase">Projekty</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Config.Projects?.map((project, index) => (
                    <div 
                        key={index}
                        className="bg-bg-card border border-border-card hover:border-border-card-hover rounded-xl p-5 flex flex-col justify-between gap-y-4 transition-all duration-300 group"
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
                                        className="text-xs font-mono text-content-stack bg-bg-stripe border border-border-tag px-2 py-0.5 rounded"
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
                                        className="text-content-nav hover:text-content-primary transition-colors flex items-center gap-x-1"
                                    >
                                        GitHub 
                                    </a>
                                )}
                                {project.liveUrl && (
                                    <a 
                                        href={project.liveUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-content-nav hover:text-content-primary transition-colors flex items-center gap-x-1"
                                    >
                                        Live Demo 
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;