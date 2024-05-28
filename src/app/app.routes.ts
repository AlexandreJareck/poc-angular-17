import { Routes } from '@angular/router';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

export const routes: Routes = [
  {
    path: 'first-component',
    children: [
      {
        path: '',
        title: 'FirstComponent',
        component: FirstComponent,
      },
      {
        path: 'child-a',
        title: 'child a',
        component: ChildAComponent,
      },
      {
        path: 'child-b',
        title: 'child b',
        component: ChildBComponent,
      },
    ],
  },
  { path: 'second-component', component: SecondComponent },
];
