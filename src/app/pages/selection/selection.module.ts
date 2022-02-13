import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectionRoutingModule } from './selection-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzImageModule } from 'ng-zorro-antd/image';
import { SelectionComponent } from './selection.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [SelectionComponent, MainComponent],
  imports: [
    CommonModule,
    SelectionRoutingModule,
    NzButtonModule,
    NzTypographyModule,
    NzImageModule,
  ],
})
export class SelectionModule {}
