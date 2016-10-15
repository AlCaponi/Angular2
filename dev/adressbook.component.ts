import {Component} from 'angular2/core';

@Component ({
    selector: 'adressbook',
    template: `
        <h1>Adressbook</h1>
        <ul>
            <li *ngFor="#contact of contacts"
                (click)="onSelect(contact)" >
                {{contact.firstName}} {{contact.lastName}}
            </li>
        </ul>
       <table *ngIf="showDetail === true">
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
    `
})
export class AdreessbookComponent {
    public contacts = [
        {firstName: "Angelo", lastName: "Conconi", phone: "079 542 66 56", eMail: "angelo.conconi@gmail.com"},
        {firstName: "Luca", lastName: "Conconi", phone: "079 123 45 67", eMail: "luca.conconi@gmail.com"},
        {firstName: "Lorena", lastName: "Malpartida", phone: "079 123 45 67", eMail: "lorena.conconi@gmail.com"},
        {firstName: "Buddy", lastName: "Conconi", phone: "079 987 65 43", eMail: "buddy.conconi@gmail.com"}
    ];

    selectedContact = {};
    showDetail = false;
    
    onSelect(contact){
        this.selectedContact = contact;
        this.showDetail = true;
    }
}