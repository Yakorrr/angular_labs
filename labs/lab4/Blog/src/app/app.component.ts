import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {PostFormComponent} from "./post-form/post-form.component";
import {PostComponent} from "./post/post.component";

export interface Post {
    title: string;
    text: string;
    id?: number;
}

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, PostFormComponent, PostComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'Blog';
    posts: Post[] = [{title: 'Learning components', text: 'Creating project "Blog"...', id: 1},
        {title: 'Learning directives', text: 'Still creating project "Blog"...', id: 2}]

    updatePosts(post: Post) {
        this.posts.unshift(post);
    }

    deletePost(id: number) {
        this.posts = this.posts.filter(p => p.id !== id);
    }
}
