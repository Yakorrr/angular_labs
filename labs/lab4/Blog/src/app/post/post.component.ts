import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Post} from "../app.component";

@Component({
    selector: 'app-post',
    standalone: true,
    imports: [],
    templateUrl: './post.component.html',
    styleUrl: './post.component.css'
})

export class PostComponent implements OnInit, OnDestroy {
    @Input() myPost!: Post;
    @Output() onRemove = new EventEmitter<number>();

    constructor() {
    }

    removePost() {
        this.onRemove.emit(this.myPost.id);
    }

    ngOnInit(): void {
    }

    ngOnDestroy() {
        console.log('Method ngOnDestroy()');
    }
}
