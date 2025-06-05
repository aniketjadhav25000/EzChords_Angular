import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

interface Song {
  id: number;
  title: string;
  artist: string;
  movie: string;
  year: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  chords: string[];
  genre: string;
  lyrics: string[];
  strummingPattern: string;
  bpm: number;
  capo: number;
  tips: string[];
}

@Component({
  selector: 'app-song-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {
  song: Song | null = null;
  activeTab: 'chords' | 'lyrics' | 'tips' = 'chords';

  // Sample song data
  private songs: Song[] = [
    {
      id: 1,
      title: 'Tum Hi Ho',
      artist: 'Arijit Singh',
      movie: 'Aashiqui 2',
      year: 2013,
      difficulty: 'Easy',
      chords: ['Am', 'F', 'C', 'G'],
      genre: 'Romantic',
      bpm: 85,
      capo: 3,
      strummingPattern: 'D-D-U-U-D-U',
      lyrics: [
        'Hum tere bin ab reh nahi sakte',
        'Tere bina kya wajood mera',
        'Tujhse juda gar ho jaayenge',
        'To khud se hi ho jaayenge judaa',
        '',
        'Kyunki tum hi ho',
        'Ab tum hi ho',
        'Zindagi ab tum hi ho',
        'Chain bhi mera dard bhi mera',
        'Meri aashiqui ab tum hi ho'
      ],
      tips: [
        'Start by practicing the chord transitions slowly',
        'Use a capo on the 3rd fret for the original key',
        'Focus on clean chord changes before adding strumming',
        'The Am to F transition is crucial - practice it separately'
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const songId = parseInt(params['id']);
      this.song = this.songs.find(s => s.id === songId) || null;
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

  setActiveTab(tab: 'chords' | 'lyrics' | 'tips') {
    this.activeTab = tab;
  }
}