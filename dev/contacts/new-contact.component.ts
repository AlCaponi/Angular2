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
                    <input type="text">
                </td>
            </tr>
            <tr>
                <td>
                    Last Name
                </td> 
                <td>
                    <input type="text">
                </td>
            </tr>
            <tr>
                <td>
                    Phone Number
                </td>
                <td>
                    <input  type="text">
                </td>
            </tr>
            <tr>
                <td>
                    E-Mail
                </td>
                <td>
                    <input type="text">
                </td> 
            </tr>
        </table>
        <button (click)="onAddContact()">Create Contact</button>
    `,
    providers: [ContactService]
})

export class NewContactComponent {

    constructor(private _contactService: ContactService) {}

    onAddContact(){
        const dummyContact = {firstName: "Dummy", lastName: "Contact", phone: "", eMail: ""};
        this._contactService.insertContact(dummyContact);
    }
}

