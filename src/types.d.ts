export interface CV {
    name: string;
    avatar: string;
    about: string;
    sumary: string;
    location: Location;
    contact: Contact;
    work: Work[];
    education: Education[];
}

interface Work {
    name: string;
    position: string;
    url?: string;
    startDate: string;
    endDate: null | string;
    summary: string;
    highlights: string[];
}

interface Contact {
    email: string;
    tel: string;
    socials: Social[];
}

interface Social {
    name: string;
    url: string;
}

interface Location {
    link: string;
    text: string;
}

interface Education {
    institution: string;
    url: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
    score: string;
    courses: string[];
}
