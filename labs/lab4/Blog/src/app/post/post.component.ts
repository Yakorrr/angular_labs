import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../app.component";

@Component({
    selector: 'app-post',
    standalone: true,
    imports: [],
    templateUrl: './post.component.html',
    styleUrl: './post.component.css'
})

export class PostComponent implements OnInit {
    @Input() myPost!: Post;

    constructor() {
    }

    ngOnInit(): void {
    }
}
