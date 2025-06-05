import { Component } from '@angular/core';
import { BOLLYWOOD_SONGS } from '../../shared/models/songs.data';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bollywood-songs',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './bollywood-songs.component.html',
  styleUrls: ['./bollywood-songs.component.css']
})
export class BollywoodSongsComponent {
  songs = BOLLYWOOD_SONGS;
  searchInput: string = '';
  filteredSongsList = this.songs; // initial value = all songs

  applySearch() {
    this.filterSongs(this.searchInput);
  }

  // New method to filter songs based on a query string
  filterSongs(query: string) {
    const lowerQuery = query.toLowerCase().trim();
    this.filteredSongsList = this.songs.filter(song =>
      (song.title?.toLowerCase() ?? '').includes(lowerQuery) ||
      (song.movie?.toLowerCase() ?? '').includes(lowerQuery)
    );
  }

  // Call this method when you receive search input from Navbar
  onNavbarSearch(query: string) {
    this.searchInput = query;
    this.filterSongs(query);
  }
}
