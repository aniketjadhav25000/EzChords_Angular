import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BeginnerLessonsComponent } from './pages/beginner-lessons/beginner-lessons.component';
import { ChordLibraryComponent } from './pages/chord-library/chord-library.component';
import { BollywoodSongsComponent } from './pages/bollywood-songs/bollywood-songs.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SongDetailComponent } from './pages/bollywood-songs/song-detail/song-detail.component'; // ⬅️ Add this import
import { LearningPathComponent } from './pages/learning-path/learning-path.component';
import { PhaseDetailComponent } from './pages/learning-path/phase-detail/phase-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'beginner-lessons', component: BeginnerLessonsComponent },
  { path: 'chord-library', component: ChordLibraryComponent },
  { path: 'bollywood-songs', component: BollywoodSongsComponent },
  { path: 'bollywood-songs/:id', component: SongDetailComponent }, // ⬅️ New route for song details
  { path: 'contact', component: ContactComponent },
    { path: 'learning-path', component: LearningPathComponent },
     { path: 'learning/phase/:id', component: PhaseDetailComponent },
];

