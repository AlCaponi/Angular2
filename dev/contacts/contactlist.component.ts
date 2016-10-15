import {Component} from 'angular2/core';
import {ContactComponent} from "./contact.component";
@Component ({
    selector: 'contactlist',
    template: `
        <ul>
            <li *ngFor="#contact of contacts"
                (click)="onSelect(contact)"
                [class.clicked]="selectedContact === contact" >
                {{contact.firstName}} {{contact.lastName}}
            </li>
        </ul>
        <contact [selectedContact]="selectedContact"></contact>
    `,
    directives: [ContactComponent]
})
export class ContactListComponent {
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