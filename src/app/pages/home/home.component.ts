import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  features = [
    {
      title: 'Easy Chord Learning',
      description: 'Master guitar chords with our step-by-step visual guides and interactive lessons.',
      icon: '🎸'
    },
    {
      title: 'Bollywood Collection',
      description: 'Play your favorite Bollywood songs with simplified chord progressions.',
      icon: '🎵'
    },
    {
      title: 'Beginner Friendly',
      description: 'Start from scratch with lessons designed specifically for beginners.',
      icon: '📚'
    },
    {
      title: 'Chord Library',
      description: 'Access our comprehensive library of guitar chords with finger positions.',
      icon: '📖'
    }
  ];
}