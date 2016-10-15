import {Component} from 'angular2/core';
@Component ({
    selector: 'contact',
    template: `
        <input [(ngModel)]="selectedContact.firstName" type="text">
        <table>
            <tr>
                <td>
                    Phone Number
                </td>
                <td>
                    {{selectedContact.phone}}
                </td>
            </tr>
            <tr>
                <td>
                    E-Mail
                </td>
                <td>
                    {{selectedContact.eMail}}
                </td> 
            </tr>
        </table>
    `,
    inputs: ["selectedContact"]
})

export class ContactComponent {
    selectedContact = {};
}