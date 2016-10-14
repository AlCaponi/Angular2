import {Component} from 'angular2/core';
@Component({
    selector: 'my-component',
    template: `
        Hi, I'm {{name}}
    `,
})
export class MyComponentComponent{
    name = "Angelo Conconi!";
}