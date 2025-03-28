import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewComponent } from './pages/new/new.component';
import { PostComponent } from './pages/post/post.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'new', component: NewComponent },
    { path: 'post/:idPost', component: PostComponent },
    { path: '**', redirectTo: 'home' }
];
