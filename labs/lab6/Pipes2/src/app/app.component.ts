import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <input [(ngModel)]="num" name="fact">
        <div>Result: {{num | format}}</div>
        <hr/>

        <input #user name="user" class="form-control">
        <button class="btn" (click)="users.push(user.value)">Add</button>
        <p>{{users | join}}</p>`
})

export class AppComponent {
    num: number = 15.45;
    users = ["Tom", "Alice", "Sam", "Kate", "Bob"];
}
