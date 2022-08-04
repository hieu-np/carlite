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

import {GMapModule} from 'primeng/gmap';
import {DialogModule} from 'primeng/dialog';
import {CheckboxModule} from 'primeng/checkbox';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MapComponent } from './components/map/map.component';
import { SpeeddialComponent } from './components/speeddial/speeddial.component';

import {SpeedDialModule} from 'primeng/speeddial';
import { TestComponent } from './components/test/test.component';
@NgModule({
  declarations: [AppComponent, NavComponent, SlideshowComponent, MapComponent, SpeeddialComponent, TestComponent],
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
    SpeedDialModule

  ],
  providers: [PhotoService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
