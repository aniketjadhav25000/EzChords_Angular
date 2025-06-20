import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

type Level = 'beginner' | 'intermediate' | 'advanced';

interface Phase {
  phase: string;
  duration: string;
  title: string;
  color: string;
  image: string;
  skills: string[];
}

@Component({
  selector: 'app-learning-path',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learning-path.component.html',
  styleUrls: ['./learning-path.component.css']
})
export class LearningPathComponent {
  selectedLevel: Level = 'beginner';

  constructor(private router: Router) {}

  phases: Record<Level, Phase> = {
    beginner: {
      phase: 'Phase 1',
      duration: '2-4 weeks',
      title: 'Foundations',
      color: 'amber',
      image: 'assets/images/beginner-chords.jpg',
      skills: [
        'Basic chords (C, G, D, Em)',
        'Proper finger positioning',
        'Simple strumming patterns',
        'Tuning basics',
      ]
    },
    intermediate: {
      phase: 'Phase 2',
      duration: '4-6 weeks',
      title: 'Song Fundamentals',
      color: 'blue',
      image: 'assets/images/intermediate.jpg',
      skills: [
        'Chord transitions',
        'Basic fingerpicking',
        'Simple Bollywood songs',
        'Rhythm techniques',
      ]
    },
    advanced: {
      phase: 'Phase 3',
      duration: '6+ weeks',
      title: 'Performance Ready',
      color: 'purple',
      image: 'assets/images/advanced.jpg',
      skills: [
        'Barre chords mastery',
        'Advanced strumming',
        'Full song arrangements',
        'Performance techniques',
      ]
    }
  };

  startPhase(phaseNumber: number) {
    // Navigate to phase detail page
    this.router.navigate(['/learning/phase', phaseNumber]);
  }

  startLearning() {
    alert('Start Learning Today!');
  }
}
