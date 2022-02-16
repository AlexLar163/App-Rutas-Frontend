import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectionRoutingModule } from './selection-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { SelectionComponent } from './selection.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { CardComponent } from '../components/card/card.component';
import { FormsModule } from '@angular/forms';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { InformationComponent } from '../components/information/information.component';
@NgModule({
  declarations: [
    SelectionComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    InformationComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SelectionRoutingModule,
    NzButtonModule,
    NzTypographyModule,
    NzImageModule,
    NzCardModule,
    NzRateModule,
    NzDividerModule,
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class SelectionModule {}
