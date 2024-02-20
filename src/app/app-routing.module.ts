import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebounceComponent } from './exercise/debounce/debounce.component';
import { AppComponent } from './app.component';
import { FormsComponent } from './exercise/forms/forms.component';
import { PipesComponent } from './exercise/pipes/pipes.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AppComponent,
  },
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'debounce',
        component: DebounceComponent,
      },
      {
        path: 'forms',
        component: FormsComponent,
      },
      {
        path: 'pipes',
        component: PipesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
