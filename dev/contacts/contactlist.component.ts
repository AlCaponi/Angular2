import {Component} from 'angular2/core';
import {ContactComponent} from "./contact.component";
import {ContactService} from "./contact.service";
import {Contact} from "./contact";
import {OnInit} from 'angular2/core';
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
    directives: [ContactComponent],
    providers: [ContactService]
})
export class ContactListComponent implements OnInit {
    selectedContact = {};
    showDetail = false;
    public contacts: Contact[];
    
    // Injecting contact serivce from provider
    constructor(private _contactService: ContactService) {}

    onSelect(contact){
        this.selectedContact = contact;
        this.showDetail = true;
    }

    getContacts(){
        this._contactService.getContacts().then((contacts: Contact[]) => this.contacts = contacts);
    }

    ngOnInit():any{
        this.getContacts();
    }
}