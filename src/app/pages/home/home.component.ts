import { Component, inject } from "@angular/core";
import { FeaturedComponent } from "../../components/featured/featured.component";
import { PostService } from "../../services/post.service";
import { DatePipe } from "@angular/common";
import type { Post } from "../../interfaces/post.interface";

@Component({
	selector: "app-home",
	imports: [/* FeaturedComponent,*/ DatePipe],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.css",
})
export class HomeComponent {
	arrPosts: Post[] = [];

	arrCategories: string[] = [];

	ngAfterViewInit() {
		this.arrCategories = [
			...new Set(this.arrPosts.map((post) => post.category)),
		];
	}

	postService = inject(PostService);

	ngOnInit() {
		this.loadAllPosts();
	}

	loadAllPosts() {
		const response = this.postService.getAll(); //Recupero del db los datos...
		this.arrPosts = response; //... y los arrojo al contenedor creado para usarlos en el script
		console.log(this.arrPosts);
	}

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	onChange($event: any) {
		if ($event.target.value === "Sin filtros") {
			this.arrPosts = this.postService.getAll();
		} else {
			this.arrPosts = this.postService.getByCat($event.target.value);
		}
	}

	redirectToPost(id: number) {
		window.location.href = `/post/${id}`;
	}
}
