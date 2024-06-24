export interface CV {
    about: string;
    avatar: string;
    contact: Contact;
    education: Education[];
    experiences: Experience[];
    location: Location;
    name: string;
    sumary: string;
    work: Work[];
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

export interface Experience {
  endDate?: string;
  highlights: string[];
  name: string;
  position: string;
  startDate: string;
  summary: string;
  url?: string;
}
