import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectionRoutingModule } from './selection-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { CardComponent } from '../components/card/card.component';
import { FormsModule } from '@angular/forms';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { InformationComponent } from '../components/information/information.component';
import { RutesComponent } from './rutes/rutes.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { SearchComponent } from './search/search.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { RuteDetailComponent } from './rute-detail/rute-detail.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { GoogleMapsModule } from '@angular/google-maps';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { MyRutesComponent } from './my-rutes/my-rutes.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { MapComponent } from '../components/map/map.component';
@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    InformationComponent,
    RutesComponent,
    SearchComponent,
    RuteDetailComponent,
    LoginComponent,
    RegisterComponent,
    MyRutesComponent,
    MapComponent,
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
    NzFormModule,
    NzModalModule,
    NzInputModule,
    NzDropDownModule,
    NzLayoutModule,
    GoogleMapsModule,
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class SelectionModule {}
