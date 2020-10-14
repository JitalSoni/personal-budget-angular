import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, Router} from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { P404Component } from './p404/p404.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    pathMatch: 'full',
    children: [
      {
        path: 'Financial Services',
        component: BreadcrumbsComponent,
        children:[
          {
            path: 'Basic personal budget',
            component: BreadcrumbsComponent
          },
        ]

      }
    ]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'h1',
    component: HomepageComponent
  },
  {
    path: '**',
    component: P404Component
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
