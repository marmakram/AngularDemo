import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestedNavbarComponent } from './nested-navbar/nested-navbar.component';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'nested',
    pathMatch: 'full'
  },{
    path: 'nested',
    component: NestedNavbarComponent
  }
]


@NgModule({
  declarations: [NestedNavbarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    { provide: Window, useValue: window }]
})
export class NavBarModule { }
