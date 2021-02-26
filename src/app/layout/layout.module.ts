import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { LayoutComponent } from './layout.component';
import {RouterModule,Routes} from '@angular/router';
import routesImport from './content/routes';

const routes:Routes = routesImport;

@NgModule({
  declarations: [
    NavbarComponent,
    ContentComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    NavbarComponent,
    ContentComponent,
    LayoutComponent
  ]
})
export class LayoutModule { }
