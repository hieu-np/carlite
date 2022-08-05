import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

import { MenubarModule } from 'primeng/menubar';
import { NavComponent } from './components/nav/nav.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { GalleriaModule } from 'primeng/galleria';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { PhotoService } from './service/photoservice';

import { GMapModule } from 'primeng/gmap';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MapComponent } from './components/map/map.component';
import { SpeeddialComponent } from './components/speeddial/speeddial.component';

import { SpeedDialModule } from 'primeng/speeddial';
import { TestComponent } from './components/test/test.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { ApplicationpageComponent } from './views/applicationpage/applicationpage.component';
import { CarinfoComponent } from './views/applicationpage/carinfo/carinfo.component';
import { BikeinfoComponent } from './views/applicationpage/bikeinfo/bikeinfo.component';
import { CityinfoComponent } from './views/applicationpage/cityinfo/cityinfo.component';
import { MoneyexchangeComponent } from './components/moneyexchange/moneyexchange.component';
import { ApplicationComponent } from './views/applicationpage/application/application.component';
import { MoneyexchangepageComponent } from './views/applicationpage/moneyexchangepage/moneyexchangepage.component';
import { AllComponent } from './views/service/all/all.component';
import { TwowayComponent } from './views/service/twoway/twoway.component';
import { LandComponent } from './views/service/land/land.component';
import { GoldComponent } from './views/applicationpage/gold/gold.component';
import { OilComponent } from './views/applicationpage/oil/oil.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SlideshowComponent,
    MapComponent,
    SpeeddialComponent,
    TestComponent,
    HomepageComponent,
    ApplicationpageComponent,
    CarinfoComponent,
    BikeinfoComponent,
    CityinfoComponent,
    MoneyexchangeComponent,
    ApplicationComponent,
    MoneyexchangepageComponent,
    AllComponent,
    TwowayComponent,
    LandComponent,
    GoldComponent,
    OilComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    RippleModule,
    MenubarModule,
    GalleriaModule,
    TabMenuModule,
    TabViewModule,
    GMapModule,
    DialogModule,
    CheckboxModule,
    ToastModule,
    SpeedDialModule,
  ],
  providers: [PhotoService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
