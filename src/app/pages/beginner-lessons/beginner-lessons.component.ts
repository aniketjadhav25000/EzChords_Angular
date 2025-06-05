import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Lesson {
  id: number;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Easy' | 'Intermediate';
  chords: string[];
}

@Component({
  selector: 'app-beginner-lessons',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './beginner-lessons.component.html',
  styleUrls: ['./beginner-lessons.component.css']
})
export class BeginnerLessonsComponent {
  lessons: Lesson[] = [
    {
      id: 1,
      title: 'Getting Started - Basic Hand Position',
      description: 'Learn the proper way to hold your guitar and position your fingers.',
      duration: '10 min',
      difficulty: 'Beginner',
      chords: []
    },
    {
      id: 2,
      title: 'Your First Chord - Em (E Minor)',
      description: 'Master your first guitar chord with this simple two-finger chord.',
      duration: '15 min',
      difficulty: 'Beginner',
      chords: ['Em']
    },
    {
      id: 3,
      title: 'Open Chords - A Major',
      description: 'Learn the A major chord and practice switching between Em and A.',
      duration: '20 min',
      difficulty: 'Beginner',
      chords: ['A', 'Em']
    },
    {
      id: 4,
      title: 'The Power of D Major',
      description: 'Add D major to your repertoire and play your first song.',
      duration: '25 min',
      difficulty: 'Easy',
      chords: ['D', 'A', 'Em']
    },
    {
      id: 5,
      title: 'G Major - Complete the Circle',
      description: 'Learn G major and play popular chord progressions.',
      duration: '30 min',
      difficulty: 'Easy',
      chords: ['G', 'D', 'A', 'Em']
    },
    {
      id: 6,
      title: 'C Major - The Foundation Chord',
      description: 'Master the C major chord and expand your playing possibilities.',
      duration: '25 min',
      difficulty: 'Easy',
      chords: ['C', 'G', 'D', 'A', 'Em']
    }
  ];

  getDifficultyColor(difficulty: string): string {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500';
      case 'Easy': return 'bg-blue-500';
      case 'Intermediate': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  }
}