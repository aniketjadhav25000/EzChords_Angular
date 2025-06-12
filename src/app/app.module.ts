import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; // ✅ Add this

import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component'; // ✅ Add this
import { BeginnerLessonsComponent } from './pages/beginner-lessons/beginner-lessons.component'; // ✅
import { ChordLibraryComponent } from './pages/chord-library/chord-library.component'; // ✅
import { BollywoodSongsComponent } from './pages/bollywood-songs/bollywood-songs.component'; // ✅
import { SongDetailComponent } from './pages/bollywood-songs/song-detail/song-detail.component'; // ✅

import { routes } from './app.routes'; // ✅ Your defined routes

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    BeginnerLessonsComponent,
    ChordLibraryComponent,
    BollywoodSongsComponent,
    SongDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes) // ✅ Add routing setup
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
