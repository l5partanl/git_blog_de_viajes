import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { posts } from '../db/posts';
import { Category } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  //"Buscar, crear, etc"
  getAll(): Post[] {
    //pasar el componente (array de posts ubicado en la db) por este metodo (getAll)
    return posts;
  }

  getByCat(category: Category): Post[] {
    // El ID de la categoría que se desea buscar.
    // Retorna un array de posts cuya categoría coincida con la categoría dada.
    return posts.filter(post => post.category === category);
  }

  getByName(text: string): Post[] {
    return posts.filter(post => post.title.toLowerCase().includes(text.toLowerCase()));
  }

  create(newPost: Post) {
    posts.push(newPost);
  }//creamos un nuevo post y lo metemos en el array de posts.

}
