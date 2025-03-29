import { Component, inject } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { FeaturedComponent } from "../../components/featured/featured.component";
import { Post } from '../../interfaces/post.interface';
import { PostService } from '../../services/post.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, FeaturedComponent, DatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  arrPosts: Post[] = [];

  postService = inject(PostService)

  ngOnInit() {
    this.loadAllPosts();
  }

  loadAllPosts() {
    const response = this.postService.getAll();//Recupero del db los datos...
    this.arrPosts = response; //... y los arrojo al contenedor creado para usarlos en el script
    console.log(this.arrPosts)
  }

}
