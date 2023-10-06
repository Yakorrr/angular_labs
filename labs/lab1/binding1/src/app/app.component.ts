import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <style>
            td {
                border: 1px solid;
            }
        </style>

        <p>Name: {{name}}</p>
        <p>Surname: {{surname}}</p>
        <p>Age: {{age}}</p>
        <br>

        <input type="text" [value]="name"/>
        <input type="text" [value]="surname"/>
        <input type="text" [value]="age"/>
        <p><br></p>

        <table>
            <tr>
                <td [attr.colspan]="colspan">One-Two</td>
            </tr>
            <tr>
                <td>Three</td>
                <td>Four</td>
            </tr>
            <tr>
                <td>Five</td>
                <td>Six</td>
            </tr>
        </table>
        <br>

        <p>Click count: {{count}}</p>
        <button (click)="increase()">Click</button>
        <p><br></p>

        <p>Click count with $event: {{countTwo}}</p>
        <button (click)="anotherIncrease($event)">Click</button>
        <p><br></p>

        <p>Hello, {{tempName}}!</p>
        <input type="text" [(ngModel)]="tempName"/> <br><br>
        <input type="text" [(ngModel)]="tempName"/>
        <br>
    `
})

export class AppComponent {
    name = "John";
    tempName = "John";
    surname = "Smith";
    age = 30;

    colspan = 2;
    count: number = 0;
    countTwo: number = 0;

    increase(): void {
        this.count++;
    }

    anotherIncrease($event: any): void {
        this.countTwo++;
        console.log($event);
    }
}
