import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BeginnerLessonsComponent } from './pages/beginner-lessons/beginner-lessons.component';
import { ChordLibraryComponent } from './pages/chord-library/chord-library.component';
import { BollywoodSongsComponent } from './pages/bollywood-songs/bollywood-songs.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SongDetailComponent } from './pages/song-detail/song-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'beginner-lessons', component: BeginnerLessonsComponent },
  { path: 'chord-library', component: ChordLibraryComponent },
  { path: 'bollywood-songs', component: BollywoodSongsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'song/:id', component: SongDetailComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 80]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
