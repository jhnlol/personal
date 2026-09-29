'use client';

import { FC, useEffect, useState } from "react";

const Footer: FC = () => {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const formattedTime = now.toLocaleTimeString("pl-PL", {
                timeZone: "Europe/Warsaw",
                hour12: false,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            });
            setTime(formattedTime);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="w-full border-t border-border-line py-8 mt-10">
            <div className="max-w-4xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-y-3 font-mono text-xs text-content-muted">
                <div>
                    &#169; {new Date().getFullYear()} Jan Bożek
                </div>
                <div className="flex items-center gap-x-2">
                    <span>
                        Katowice - {time ? `${time} GMT+2` : "13:42:31 GMT+2"}
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;