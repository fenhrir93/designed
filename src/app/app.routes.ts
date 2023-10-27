import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/title/title.component').then(
        (c) => c.TitleComponent
      ),
  },
];
