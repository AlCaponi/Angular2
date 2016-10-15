import {Component} from 'angular2/core';
import {MyComponentComponent} from "./my-component.component";
import {AdreessbookComponent} from "./adressbook.component";
@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Tutorial</h1>
        <p>Ciao Pfau!</p>
        <my-component></my-component>
        <adressbook></adressbook>
    `,
    directives: [MyComponentComponent, AdreessbookComponent]
})
export class AppComponent {

}