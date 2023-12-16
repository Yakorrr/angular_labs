import {HttpService} from "./http.service";
import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";

@Component({
    selector: 'app-root',
    template: `
        <ul>
            <li *ngFor="let user of users | async">
                <p>User Name: {{user.name}}</p>
                <p>User Age: {{user.age}}</p>
            </li>
        </ul>
    `,
    providers: [HttpService]
})

export class AppComponent implements OnInit {
    users: Observable<Object> | any;

    constructor(private httpService: HttpService) {
    }

    ngOnInit() {
        this.users = this.httpService.getUsers();
    }
}
