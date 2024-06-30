export interface CV {
    about: string;
    avatar: string;
    contact: Contact;
    educations: Education[];
    experiences: Experience[];
    location: Location;
    name: string;
    sumary: string;
    skills: Skill[];
}

interface Contact {
    email: string;
    socials: Social[];
    tel: string;
}

interface Social {
    name: string;
    url: string;
}

interface Location {
    link: string;
    text: string;
}

export interface Education {
    area: string;
    courses?: string[];
    endDate: string;
    institution: string;
    score?: string;
    startDate: string;
    studyType?: string;
    url: string;
}

interface Experience {
    endDate?: string;
    highlights: string[];
    name: string;
    position: string;
    startDate: string;
    summary: string;
    url?: string;
}

interface Skill {
    name: string;
    level: string;
    keywords: string[];
}
