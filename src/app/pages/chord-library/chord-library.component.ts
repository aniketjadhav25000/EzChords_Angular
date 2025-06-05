import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Chord {
  name: string;
  type: 'Major' | 'Minor' | 'Seventh' | 'Sus' | 'Dim';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  fingers: string;
  description: string;
}

@Component({
  selector: 'app-chord-library',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './chord-library.component.html',
  styleUrls: ['./chord-library.component.css']
})
export class ChordLibraryComponent implements OnInit {
  searchTerm = '';
  selectedType = '';
  selectedDifficulty = '';

  chords: Chord[] = [
    { name: 'A', type: 'Major', difficulty: 'Easy', fingers: '2-1-0', description: 'One of the first chords every guitarist learns' },
    { name: 'Am', type: 'Minor', difficulty: 'Easy', fingers: '2-3-1', description: 'The easiest minor chord to learn' },
    { name: 'C', type: 'Major', difficulty: 'Medium', fingers: '3-2-0-1', description: 'A fundamental chord in many songs' },
    { name: 'D', type: 'Major', difficulty: 'Easy', fingers: '2-3-2', description: 'Essential open chord' },
    { name: 'Dm', type: 'Minor', difficulty: 'Easy', fingers: '2-3-1', description: 'Beautiful minor chord' },
    { name: 'E', type: 'Major', difficulty: 'Medium', fingers: '2-2-1', description: 'Full-bodied major chord' },
    { name: 'Em', type: 'Minor', difficulty: 'Easy', fingers: '2-3', description: 'The easiest chord to play' },
    { name: 'F', type: 'Major', difficulty: 'Hard', fingers: 'Barre 1st', description: 'Your first barre chord challenge' },
    { name: 'G', type: 'Major', difficulty: 'Medium', fingers: '3-2-4', description: 'Wide finger stretch chord' },
    { name: 'A7', type: 'Seventh', difficulty: 'Easy', fingers: '2-0-0', description: 'Adds bluesy flavor' },
    { name: 'B7', type: 'Seventh', difficulty: 'Medium', fingers: '2-1-2-0-2', description: 'Common in blues progressions' },
    { name: 'Cadd9', type: 'Sus', difficulty: 'Medium', fingers: '3-2-0-3', description: 'Adds beautiful color to C major' }
  ];

  chordTypes = ['Major', 'Minor', 'Seventh', 'Sus', 'Dim'];
  difficulties = ['Easy', 'Medium', 'Hard'];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Check for search parameter from navbar
    this.route.queryParams.subscribe(params => {
      if (params['search']) {
        this.searchTerm = params['search'];
      }
    });
  }

  get filteredChords(): Chord[] {
    return this.chords.filter(chord => {
      const matchesSearch = chord.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           chord.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesType = !this.selectedType || chord.type === this.selectedType;
      const matchesDifficulty = !this.selectedDifficulty || chord.difficulty === this.selectedDifficulty;
      
      return matchesSearch && matchesType && matchesDifficulty;
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

  getTypeColor(type: string): string {
    switch (type) {
      case 'Major': return 'bg-blue-500';
      case 'Minor': return 'bg-purple-500';
      case 'Seventh': return 'bg-orange-500';
      case 'Sus': return 'bg-pink-500';
      case 'Dim': return 'bg-gray-500';
      default: return 'bg-indigo-500';
    }
  }

  clearFilters() {
    this.searchTerm = '';
    this.selectedType = '';
    this.selectedDifficulty = '';
  }
}