import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Song {
  id: number;
  title: string;
  artist: string;
  movie: string;
  year: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  chords: string[];
  genre: string;
}

@Component({
  selector: 'app-bollywood-songs',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './bollywood-songs.component.html',
  styleUrls: ['./bollywood-songs.component.css']
})
export class BollywoodSongsComponent {
  searchTerm = '';
  selectedDifficulty = '';
  selectedGenre = '';

  songs: Song[] = [
    {
      id: 1,
      title: 'Tum Hi Ho',
      artist: 'Arijit Singh',
      movie: 'Aashiqui 2',
      year: 2013,
      difficulty: 'Easy',
      chords: ['Am', 'F', 'C', 'G'],
      genre: 'Romantic'
    },
    {
      id: 2,
      title: 'Jeene Laga Hoon',
      artist: 'Atif Aslam',
      movie: 'Ramaiya Vastavaiya',
      year: 2013,
      difficulty: 'Medium',
      chords: ['C', 'Am', 'F', 'G', 'Em'],
      genre: 'Romantic'
    },
    {
      id: 3,
      title: 'Kal Ho Naa Ho',
      artist: 'Sonu Nigam',
      movie: 'Kal Ho Naa Ho',
      year: 2003,
      difficulty: 'Medium',
      chords: ['D', 'A', 'Bm', 'G', 'Em'],
      genre: 'Emotional'
    },
    {
      id: 4,
      title: 'Chahun Main Ya Naa',
      artist: 'Arijit Singh',
      movie: 'Aashiqui 2',
      year: 2013,
      difficulty: 'Easy',
      chords: ['G', 'D', 'Em', 'C'],
      genre: 'Romantic'
    },
    {
      id: 5,
      title: 'Tere Naam',
      artist: 'Udit Narayan',
      movie: 'Tere Naam',
      year: 2003,
      difficulty: 'Hard',
      chords: ['Am', 'Dm', 'G', 'C', 'F', 'E'],
      genre: 'Sad'
    },
    {
      id: 6,
      title: 'Dil Diyan Gallan',
      artist: 'Atif Aslam',
      movie: 'Tiger Zinda Hai',
      year: 2017,
      difficulty: 'Medium',
      chords: ['C', 'G', 'Am', 'F', 'Dm'],
      genre: 'Romantic'
    }
  ];

  difficulties = ['Easy', 'Medium', 'Hard'];
  genres = ['Romantic', 'Emotional', 'Sad', 'Happy', 'Patriotic'];

  get filteredSongs(): Song[] {
    return this.songs.filter(song => {
      const matchesSearch = song.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           song.artist.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           song.movie.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesDifficulty = !this.selectedDifficulty || song.difficulty === this.selectedDifficulty;
      const matchesGenre = !this.selectedGenre || song.genre === this.selectedGenre;
      
      return matchesSearch && matchesDifficulty && matchesGenre;
    });
  }

  getDifficultyColor(difficulty: string): string {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500';
      case 'Medium': return 'bg-yellow-500';
      case 'Hard': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  }

  getGenreColor(genre: string): string {
    switch (genre) {
      case 'Romantic': return 'bg-pink-500';
      case 'Emotional': return 'bg-blue-500';
      case 'Sad': return 'bg-gray-600';
      case 'Happy': return 'bg-yellow-500';
      case 'Patriotic': return 'bg-orange-500';
      default: return 'bg-purple-500';
    }
  }

  clearFilters() {
    this.searchTerm = '';
    this.selectedDifficulty = '';
    this.selectedGenre = '';
  }
}