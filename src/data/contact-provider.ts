import { Contact } from "src/model/contact";

export const CONTACTS: Contact[] = [
    {
        firstName: 'Prénom',
        lastName: 'Nom de famille',
        email: 'nom@example.com',
        birthdate: new Date('1975-11-28'),
        priority: 10,
    },
    {
        firstName: 'Alice',
        lastName: 'Dupont',
        email: 'adupont@example.com',
        birthdate: new Date('1994-03-12'),
        priority: 5,
    },
    {
        firstName: 'Bob',
        lastName: 'Leponge',
        email: 'bleponge@example.com',
        birthdate: new Date('1983-07-01'),
        priority: 5,
    },
];
