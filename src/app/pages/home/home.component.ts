import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { FeaturedComponent } from "../../components/featured/featured.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, FeaturedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
