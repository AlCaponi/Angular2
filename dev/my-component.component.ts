import {Component} from 'angular2/core';
@Component({
    selector: 'my-component',
    template: `
        Hi, I'm {{name}} and this is my very first Angular2 component! <span [class.is-awesome]="inputElement.value === 'yes'">It's so awesome!</span>
        <br />
        <br />
        Is it awesome?
        <input type="text" #inputElement (keyup)="0">
    `,
    styleUrls: ['src/css/mycomponent.css']
})
export class MyComponentComponent{
    name = "Angelo Conconi!";
}