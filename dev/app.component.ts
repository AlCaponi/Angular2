import {Component} from 'angular2/core';
import {MyComponentComponent} from "./my-component.component";
import {AdressbookComponent} from "./adressbook.component";
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteConfig} from 'angular2/router';
import {NewContactComponent} from "./contacts/new-contact.component";
@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Tutorial</h1>
        <p>Ciao Pfau!</p>
        <header>
            <nav>
                <a [routerLink]="['Contacts']">Contacts</a>
                <a [routerLink]="['NewContact']">Create Contact</a>
            </nav>
        </header>
        <router-outlet></router-outlet>
       <!-- <my-component></my-component> -->
    `,
    directives: [MyComponentComponent, AdressbookComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: "/contacts", name: "Contacts", component: AdressbookComponent},
    {path: "/NewContact", name: "NewContact", component: NewContactComponent},
])
export class AppComponent {

}