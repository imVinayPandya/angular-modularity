

import {Injectable} from "@angular/core";
export class Contact {
    constructor(public id: number, public name: string) {}
}

const CONTACTS: Contact[] = [
    new Contact(21, 'Vinay Pandya'),
    new Contact(22, 'Heena Pandya'),
    new Contact(23, 'Shivam Pandya')
];
const FETCH_LATECY = 500;

@Injectable()
export class ContactService {

    getContacts() {
        return new Promise<Contact[]>( resolve=> {
            setTimeout(() => {
                resolve(CONTACTS)
            }, FETCH_LATECY);
        });
    }


    getContact(id: number | string) {
        return this.getContacts()
            .then(heroes => heroes.find(hero => hero.id === +id));
    }
}