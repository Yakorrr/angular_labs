import {Component} from '@angular/core';

export interface Post {
    title: string;
    text: string;
    id?: number;
    date?: Date;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'Blog';
    posts: Post[] = [
        {title: 'Learning components', text: 'Creating project "Blog"...', id: 1, date: new Date},
        {title: 'Learning directives', text: 'Still creating project "Blog"...', id: 2, date: new Date},
    ];

    search: string = '';

    updatePosts(post: Post) {
        console.log('Post', post);
        this.posts.unshift(post);
    }

    deletePost(id: number) {
        this.posts = this.posts.filter(p => p.id !== id)
    }
}
