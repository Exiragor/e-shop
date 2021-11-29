import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from "./components/layout/layout.component";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { RouterModule } from "@angular/router";
import { en_US, NZ_I18N } from "ng-zorro-antd/i18n";



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    RouterModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class CoreModule { }
