export interface CV {
  name: string;
  avatar: string;
  about: string;
  sumary: string;
  location: Location;
  contact: Contact;
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
