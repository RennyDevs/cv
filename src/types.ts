interface Data {
    name: string;
    avatar: string;
    about: string;
    sumary: string;
    location: Location;
    contact: Contact;
}

export interface Contact {
    email: string;
    tel: string;
    socials: Social[];
}

export interface Social {
    name: string;
    url: string;
}

interface Location {
    link: string;
    text: string;
}
