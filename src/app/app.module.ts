import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// ✅ Correct path to routing module
import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { BeginnerLessonsComponent } from './pages/beginner-lessons/beginner-lessons.component';
import { ChordLibraryComponent } from './pages/chord-library/chord-library.component';
import { BollywoodSongsComponent } from './pages/bollywood-songs/bollywood-songs.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SongDetailComponent } from './pages/song-detail/song-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BeginnerLessonsComponent,
    ChordLibraryComponent,
    BollywoodSongsComponent,
    ContactComponent,
    SongDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // ✅ Corrected import
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
