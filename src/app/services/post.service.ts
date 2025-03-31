import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { posts } from '../db/posts';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  //"Buscar, crear, etc"
  getAll(): Post[] {
    //pasar el componente (array de posts ubicado en la db) por este metodo (getAll)
    return posts;
  }

  getByCat(category: string): Post[] {
    // Retorna un array de posts cuya categoría coincida con la categoría dada.
    return posts.filter(post => post.category === category);
  }

  getByName(text: string): Post[] {
    return posts.filter(post => post.title.toLowerCase().includes(text.toLowerCase()));
  }

  getById(id: number): Post | undefined {
    return posts.find(post => post.id === id);
  }

  addPost(newPost: Omit<Post, 'id' | 'date'>): Observable<Post> {
    const lastId = posts.length > 0 ? posts[posts.length - 1].id : 0;
    const newId = lastId + 1;
    const postWithIdAndDate: Post = {
      ...newPost,
      id: newId,
      publicationDate: new Date()
    };
    posts.push(postWithIdAndDate);
    return of(postWithIdAndDate);
  }
}