import {Component, OnInit} from '@angular/core';
import {Post} from "../app.component";
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-post-form',
    standalone: true,
    imports: [
        FormsModule
    ],
    templateUrl: './post-form.component.html',
    styleUrls: ['./post-form.component.css']
})

export class PostFormComponent implements OnInit {
    title = '';
    text = '';

    constructor() {
    }

    ngOnInit(): void {
    }

    addPost() {
        if (this.title.trim() && this.text.trim()) {
            const post: Post = {
                title: this.title,
                text: this.text
            }

            console.log('New post', post);
            this.title = this.text = '';
        }
    }
}

