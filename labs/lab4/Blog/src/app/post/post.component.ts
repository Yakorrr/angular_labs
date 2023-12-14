import { Component, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Post } from '../app.component';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnDestroy {
    @Input() myPost!: Post;
    @Output() onRemove = new EventEmitter<number>();

    removePost() {
        this.onRemove.emit(this.myPost.id);
    }

    ngOnDestroy() {
        console.log('Method ngOnDestroy()');
    }
}
