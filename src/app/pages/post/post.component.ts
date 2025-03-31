import { DatePipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-post',
  imports: [DatePipe],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})

export class PostComponent {

  @Input() postId: number = 0;
  postService = inject(PostService);

  post: Post | undefined = undefined;

  ngOnInit() {
    const url = window.location.href;
    const idFromUrl = Number(url.substring(url.lastIndexOf('/') + 1));

    if (!isNaN(idFromUrl)) {
      this.post = this.postService.getById(idFromUrl);
      console.log(this.post);
    }
  }
}

