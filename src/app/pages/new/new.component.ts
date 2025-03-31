import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-new',
  imports: [ReactiveFormsModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {

  router = inject(Router);
  postService = inject(PostService);

  formulario: FormGroup;

  constructor() {//planteamos un constructos fabrique un nuevo item con los datos submiteados x medio de el formulario
    this.formulario = new FormGroup({//creamos un nuevo formulario con los campos que queremos que tenga
      title: new FormControl(),//cada campo es un nuevo FormControl
      brief: new FormControl(),
      text: new FormControl(),
      author: new FormControl(),
      imageUrl: new FormControl(),
      category: new FormControl()
    });
  }

  onSubmit() {//al dar submit:
    this.postService.addPost(this.formulario.value).subscribe({
      next: (response) => console.log('Post added successfully:', response),
      error: (err) => console.error('Error adding post:', err)
    });

    this.formulario.reset();

    this.router.navigateByUrl('/home');
  }

}
