import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailsPage } from '../pages/details/details';
import { MapPage } from '../pages/map/map';
import { FavoritesPage } from '../pages/favorites/favorites';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { ActividadPage } from '../pages/actividad/actividad';
import { SlidesPage } from '../pages/slides/slides';

import { SearchfilterPipe } from '../pipes/searchfilter/searchfilter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicStorageModule } from '@ionic/storage';
import { CountriesServiceProvider } from '../providers/countries-service/countries-service';
import { ApiServiceProvider } from '../providers/api-service/api-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage,
    MapPage,
    ActividadPage,
    FavoritesPage,
    FavoritosPage,
    SlidesPage,
    SearchfilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsPage,
    MapPage,
    ActividadPage,
    FavoritesPage,
    FavoritosPage,
    SlidesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CountriesServiceProvider,
    ApiServiceProvider
  ]
})
export class AppModule {}
