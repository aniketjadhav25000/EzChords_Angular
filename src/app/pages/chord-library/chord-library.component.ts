import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Chord {
  name: string;
  description: string;
  imagePath: string;
  audioPath: string;
}

@Component({
  selector: 'app-chord-library',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chord-library.component.html',
  styleUrls: ['./chord-library.component.css'],
})
export class ChordLibraryComponent {
  chords: Chord[] = [
    {
      name: 'A Major',
      description: 'Bright and classic. Used in rock, pop, and country.',
      imagePath: 'assets/chords/a-major.png',
      audioPath: 'assets/audio-chords/a-major.mp3',
    },
    {
      name: 'C Major',
      description: 'Warm tone. Great for beginners and ballads.',
      imagePath: 'assets/chords/c-major.png',
      audioPath: 'assets/audio-chords/c-major.mp3',
    },
    {
      name: 'D Major',
      description: 'Crisp and joyful. Common in folk and acoustic music.',
      imagePath: 'assets/chords/d-major.png',
      audioPath: 'assets/audio-chords/d-major.mp3',
    },
    {
      name: 'E Minor',
      description: 'Moody and versatile. Great for intros and solos.',
      imagePath: 'assets/chords/e-minor.png',
      audioPath: 'assets/audio-chords/e-minor.mp3',
    },
    {
      name: 'G Major',
      description: 'Bright and open. Very popular in songwriting.',
      imagePath: 'assets/chords/g-major.png',
      audioPath: 'assets/audio-chords/g-major.mp3',
    },
    {
      name: 'F Major',
      description: 'Challenging barre chord. Essential for progress.',
      imagePath: 'assets/chords/f-major.png',
      audioPath: 'assets/audio-chords/f-major.mp3',
    },
  ];

  progress: number[] = this.chords.map(() => 0);
  isPlaying: boolean[] = this.chords.map(() => false);

  togglePlay(audio: HTMLAudioElement, index: number) {
    if (audio.paused) {
      this.stopAllExcept(index);
      audio.play();
      this.isPlaying[index] = true;
    } else {
      audio.pause();
      this.isPlaying[index] = false;
    }
  }

  stopAllExcept(currentIndex: number) {
    const audios = document.querySelectorAll('audio');
    audios.forEach((el, i) => {
      const audioEl = el as HTMLAudioElement;
      if (i !== currentIndex) {
        audioEl.pause();
        audioEl.currentTime = 0; // Restart audio
        this.isPlaying[i] = false;
        this.progress[i] = 0;
      }
    });
  }

  onTimeUpdate(audio: HTMLAudioElement, index: number) {
    if (audio.duration > 0) {
      const percentage = (audio.currentTime / audio.duration) * 100;
      this.progress[index] = Math.min(100, percentage);
    }

    if (audio.ended) {
      this.isPlaying[index] = false;
      this.progress[index] = 0;
    }
  }
}
