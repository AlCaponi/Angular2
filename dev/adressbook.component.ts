import {Component} from 'angular2/core';
import {ContactListComponent} from "./contacts/contactlist.component";

@Component ({
    selector: 'adressbook',
    template: `
       <h1>Adressbook</h1>
       <contactlist></contactlist>
    `,
    directives: [ContactListComponent]
})
export class AdressbookComponent {

}