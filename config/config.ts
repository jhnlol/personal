export interface IExperience {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
    stack: string[];
}

export interface IProject {
    title: string;
    description: string;
    stack: string[];
    githubUrl?: string;
    liveUrl?: string;
    featured?: boolean;
}

export interface ICertificate {
    name: string;
    issuer: string;
    date: string;
}

export interface ISchool {
    name: string;
    degree: string;
    fieldOfStudy?: string;
    startDate: string;
    endDate: string;
    description?: string;
}

export interface ILinks {
    github: string;
    email: string;
}

export interface IEducation {
    schools: ISchool[];
    certificates: ICertificate[];
}

export interface IConfig {
    Experience: IExperience[];
    Projects: IProject[];
    Education: IEducation;
    Links: ILinks;
}
const Config: IConfig = {
    Experience: [
        {
            company: "Wonderfund",
            position: "Web Developer Internship",
            startDate: "03.2026",
            endDate: "04.2026",
            description: "Podczas projektu Erasmus+ w Szwecji na praktykach w firmie Wonderfund, zajmowałem się modernizacją i rozbudową istniejącej strony internetowej.",
            stack: ["PHP", "WordPress", "JavaScript", "SQL", "Node.js"]
        },
        {
            company: "5City",
            position: "FiveM Lua Game Developer",
            startDate: "04.2025",
            endDate: "06.2025",
            description: "Tworzyłem oraz rozwijałem istniejące rozwiązania dla serwera na platformie FiveM.",
            stack: ["Lua", "FiveM", "SQL"]
        }
    ],
    Projects: [
        {
            title: "Moja strona",
            description: "Moja strona portfolio, którą właśnie oglądasz",
            stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
            githubUrl: "https://github.com/jhnlol/personal",
            liveUrl: "https://jhnlol.pl",
            featured: true
        },
        {
            title: "API Discord",
            description: "API do integracji z Discordem",
            stack: ["Typescript", "Node.js"],
            githubUrl: "https://github.com/jhnlol/api_dc"
        },
        {
            title: "Wyszukiwarka interakcji lekowych",
            description: "Wyszukiwarka interakcji z lekami, która pozwala sprawdzić czy leki mogą wchodzić w interakcje",
            stack: ["PHP", "WordPress", "JavaScript"],
            liveUrl: "https://swilczynski.pl/botulinowa"
        }
    ],
    Education: {
        schools: [
            {
                name: "Zespół Szół Technicznych i Ogólnokształcących nr 2 w Katowicach",
                degree: "Technik Programista",
                startDate: "2022",
                endDate: "Obecnie",
                description: "Nauka programowania, baz danych, projektowania aplikacji webowych oraz inżynierii oprogramowania."
            }
        ],
        certificates: [
            {
                name: "INF.03 – Tworzenie i administrowanie stronami i aplikacjami internetowymi oraz bazami danych",
                issuer: "CKE",
                date: "2026"
            },
            {
                name: "JavaScript Essentials",
                issuer: "CISCO Networking Academy",
                date: "2026"
            }
        ]
    },
    Links: {
        github: "https://github.com/jhnlol",
        email: "mailto:jhn@jhnlol.pl"
    }
};

export default Config;
