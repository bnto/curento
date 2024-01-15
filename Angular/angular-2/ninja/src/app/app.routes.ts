import { Routes } from '@angular/router';
import { DirectoryComponent } from './directory/directory.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'directory', component: DirectoryComponent },
    { path: '', component: HomeComponent }
];
