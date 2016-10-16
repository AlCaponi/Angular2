import { Router } from 'angular2/router';
import { Contact } from './contact';
import { ContactService } from './contact.service';
import {Component} from 'angular2/core';

@Component ({
    template: `
        <table>
            <tr>
                <td>
                    First Name
                </td>
                <td>
                    <input type="text" id="firstName" #firstName>
                </td>
            </tr>
            <tr>
                <td>
                    Last Name
                </td> 
                <td>
                    <input type="text" id="lastName" #lastName>
                </td>
            </tr>
            <tr>
                <td>
                    Phone Number
                </td>
                <td>
                    <input  type="text" id="phone" #phone>
                </td>
            </tr>
            <tr>
                <td>
                    E-Mail
                </td>
                <td>
                    <input type="text" id="eMail" #eMail>
                </td> 
            </tr>
        </table>
        <button (click)="onAddContact(firstName.value, lastName.value, phone.value, eMail.value)">Create Contact</button>
    `,
    providers: [ContactService]
})

export class NewContactComponent {

    constructor(private _contactService: ContactService, private _router: Router) {}

    onAddContact(firstName, lastName, phone, eMail){
        let contact: Contact = {firstName: firstName, lastName: lastName, phone: phone, eMail: eMail};
        this._contactService.insertContact(contact);
        this._router.navigate(['Contacts'])
    }
}

