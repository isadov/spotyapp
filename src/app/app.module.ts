import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { SpotifyService } from './components/services/spotify.service';

import { AppComponent } from './app.component';

const routes:Routes= [
	{path:'', component: SearchComponent},
  {path:'about', component: AboutComponent},
  {path:'artist/:id', component: ArtistComponent},
	{path:'album/:id', component: AlbumComponent}
]

@NgModule({
  declarations: [
    AppComponent, 
    NavbarComponent,
    AboutComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
