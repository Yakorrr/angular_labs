import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Post} from '../app.component';
import {Observable} from "rxjs";

@Component({
    selector: 'app-post-form',
    templateUrl: './post-form.component.html',
    styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
    @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();
    title = '';
    text = '';

    myDate$: Observable<Date> = new Observable(obs => {
        setInterval(() => {
            obs.next(new Date())
        }, 1000)
    })


    newDate!: Date

    ngOnInit(): void {
        this.myDate$.subscribe(date => {
            this.newDate = date;
        })
    }

    addPost() {
        if (this.title.trim() && this.text.trim()) {
            const post: Post = {
                title: this.title,
                text: this.text,
                id: Math.floor(Math.random() * 1000) + 1,
                date: this.newDate
            }

            this.onAdd.emit(post);
            this.title = this.text = '';
        }
    }
}
