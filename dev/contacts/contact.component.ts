import {Component} from 'angular2/core';
@Component ({
    selector: 'contact',
    template: `
        <table>
            <tr>
                <td>
                    First Name
                </td>
                <td>
                    <input [(ngModel)]="selectedContact.firstName" type="text">
                </td>
            </tr>
            <tr>
                <td>
                    Last Name
                </td>
                <td>
                    <input [(ngModel)]="selectedContact.lastName" type="text">
                </td>
            </tr>
            <tr>
                <td>
                    Phone Number
                </td>
                <td>
                    <input [(ngModel)]="selectedContact.phone" type="text">
                </td>
            </tr>
            <tr>
                <td>
                    E-Mail
                </td>
                <td>
                    <input [(ngModel)]="selectedContact.eMail" type="text">
                </td> 
            </tr>
        </table>
    `,
    inputs: ["selectedContact"]
})

export class ContactComponent {
    selectedContact = {};
}