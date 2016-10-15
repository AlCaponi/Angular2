import {Component} from 'angular2/core';

@Component ({
    selector: 'adressbook',
    template: `
        <h1>Adressbook</h1>
        <br />
        Hier kommen Kontakte:
        <h3>{{contact.firstName}} {{contact.lastName}}</h3>
        <table>
            <tr>
                <td>
                    Phone Number
                </td>
                <td>
                    {{contact.phone}}
                </td>
            </tr>
            <tr>
                <td>
                    E-Mail
                </td>
                <td>
                    {{contact.eMail}}
                </td>
            </tr>
        </table>
    `
})
export class AdreessbookComponent {
    public contact = {firstName: "Angelo", lastName: "Conconi", phone: "079 542 66 56", eMail: "angelo.conconi@gmail.com"};
}