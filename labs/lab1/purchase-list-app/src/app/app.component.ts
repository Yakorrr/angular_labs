import {Component} from '@angular/core';

class Item {
    purchase: string;
    done: boolean;
    price: number;
    date: object;

    constructor(purchase: string, price: number, date: object) {
        this.purchase = purchase;
        this.price = price;
        this.done = false;
        this.date = (date !instanceof String) ? new Date() : new Date(date.toString());
    }
}

@Component({
    selector: 'my-app',
    template: `
        <div class="page-header">
            <h1> Shopping list </h1>
        </div>
        <div class="panel">
            <div class="form-inline">
                <div class="form-group">
                    <div class="col-md-8">
                        <input class="form-control" [(ngModel)]="text" placeholder="Name"/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-md-6">
                        <input type="number" class="form-control" [(ngModel)]="price"
                               placeholder="Price"/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-md-6">
                        <input type="date" class="form-control" [(ngModel)]="date"
                               placeholder="Date"/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-md-offset-2 col-md-8">
                        <button class="btn btn-default" (click)="addItem(text, price, date)">Add</button>
                    </div>
                </div>
            </div>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Bought</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>                
                <tr *ngFor="let item of items">
                    <td>{{item.purchase}}</td>
                    <td>{{item.price}}</td>
                    <td><input type="checkbox" [(ngModel)]="item.done"/></td>
                    <td>{{item.date.getDate()}}-{{item.date.getMonth()}}-{{item.date.getFullYear()}}</td>
                </tr>
                </tbody>
            </table>
        </div>`
})
export class AppComponent {
    text: string = "";
    price: number = 0;
    date: object;

    items: Item[] =
      [
          {purchase: "Bread", done: false, price: 19.9, date: new Date()},
          {purchase: "Butter", done: false, price: 75, date: new Date()},
          {purchase: "Potato", done: true, price: 15.6, date: new Date()},
          {purchase: "Cheese", done: false, price: 280, date: new Date()}
      ];

    addItem(text: string, price: number, date: object): void {
        if (text == null || text.trim() == "" || price == null || date == null)
            return;
        this.items.push(new Item(text, price, date));
    }
}