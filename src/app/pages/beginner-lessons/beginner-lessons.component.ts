import { Component, HostListener, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beginner-lessons',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './beginner-lessons.component.html',
  styleUrls: ['./beginner-lessons.component.css']
})
export class BeginnerLessonsComponent implements OnDestroy {
  lessons = [
    { 
      id: 1, 
      title: 'Guitar Setup & Posture', 
      description: 'Learn how to properly hold your guitar and position your hands for optimal playing.', 
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID1', 
      icon: '🪑',
      duration: '8 min'
    },
    { 
      id: 2, 
      title: 'Basic Open Chords', 
      description: 'Master the essential chords every beginner needs to know: C, G, D, E, and A.', 
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID2', 
      icon: '🎼',
      duration: '12 min'
    },
    { 
      id: 3, 
      title: 'Strumming Patterns', 
      description: 'Develop rhythm with these fundamental strumming techniques for beginners.', 
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID3', 
      icon: '🥁',
      duration: '10 min'
    },
    { 
      id: 4, 
      title: 'Finger Exercises', 
      description: 'Build strength and dexterity with these simple but effective exercises.', 
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID4', 
      icon: '✋',
      duration: '15 min'
    },
    { 
      id: 5, 
      title: 'Chord Transitions', 
      description: 'Learn how to smoothly switch between chords without losing rhythm.', 
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID5', 
      icon: '🔄',
      duration: '14 min'
    },
    { 
      id: 6, 
      title: 'First Simple Song', 
      description: 'Apply what you\'ve learned by playing your first complete song!', 
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID6', 
      icon: '🎶',
      duration: '18 min'
    }
  ];

  commonChords = ['C', 'G', 'D', 'Em', 'Am', 'F', 'A', 'E', 'Dm', 'B7'];
  currentPracticeStreak = 3;
  metronomeTempo = 80;
  metronomeActive = false;
  metronomeInterval: any;
  audioContext: AudioContext | null = null;
  
  showModal = false;
  videoUrl: string = '';
  sanitizedVideoUrl!: SafeResourceUrl;
  showAssistant = false;
  userQuery = '';
  aiResponse = '';

  constructor(private sanitizer: DomSanitizer) {
    this.loadPracticeStreak();
  }

  ngOnDestroy() {
    this.stopMetronome();
    if (this.audioContext) {
      this.audioContext.close();
    }
  }

  openVideo(url: string) {
    this.videoUrl = url;
    this.sanitizedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.showModal = true;
  }

  closeVideo() {
    this.showModal = false;
    this.videoUrl = '';
  }

  toggleProgress(id: number) {
    const stored = JSON.parse(localStorage.getItem('lessonProgress') || '{}');
    stored[id] = !stored[id];
    localStorage.setItem('lessonProgress', JSON.stringify(stored));
    
    // Update practice streak if completing a lesson
    if (stored[id]) {
      this.updatePracticeStreak();
    }
  }

  isCompleted(id: number): boolean {
    const stored = JSON.parse(localStorage.getItem('lessonProgress') || '{}');
    return !!stored[id];
  }

  getCompletionPercentage(): number {
    const stored = JSON.parse(localStorage.getItem('lessonProgress') || '{}');
    const completed = Object.values(stored).filter((v: any) => v).length;
    return Math.round((completed / this.lessons.length) * 100);
  }

  getCurrentLessonTitle(): string {
    const lesson = this.lessons.find(l => l.videoUrl === this.videoUrl);
    return lesson ? lesson.title : '';
  }

  getCurrentLessonDescription(): string {
    const lesson = this.lessons.find(l => l.videoUrl === this.videoUrl);
    return lesson ? lesson.description : '';
  }

  toggleAIAssistant() {
    this.showAssistant = !this.showAssistant;
    if (this.showAssistant) {
      this.aiResponse = '';
    }
  }

  sendAIQuery() {
    if (!this.userQuery.trim()) return;
    
    // Simulate AI response
    const responses = [
      "For better chord transitions, practice moving between two chords slowly at first. Try G to C - focus on getting all fingers in place before strumming.",
      "A good beginner song is 'Horse With No Name' by America - it uses just two chords (Em and D6/9)!",
      "If your fingers hurt, that's normal at first. Take short breaks and gradually increase practice time. The pain will go away as you develop calluses.",
      "For clearer chords, make sure each finger is right behind the fret and not touching adjacent strings.",
      "Try practicing 10-15 minutes daily rather than long sessions once a week. Consistency is key!"
    ];
    
    this.aiResponse = "🎸 " + responses[Math.floor(Math.random() * responses.length)];
    this.userQuery = '';
  }

  loadPracticeStreak() {
    const lastPracticeDate = localStorage.getItem('lastPracticeDate');
    if (lastPracticeDate) {
      const today = new Date().toDateString();
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      
      if (lastPracticeDate === today) {
        // Already practiced today
      } else if (lastPracticeDate === yesterday.toDateString()) {
        this.currentPracticeStreak = parseInt(localStorage.getItem('practiceStreak') || '0', 10) + 1;
      } else {
        this.currentPracticeStreak = 1;
      }
    }
  }

  updatePracticeStreak() {
    const today = new Date().toDateString();
    const lastPracticeDate = localStorage.getItem('lastPracticeDate');
    
    if (lastPracticeDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      
      if (lastPracticeDate === yesterday.toDateString()) {
        this.currentPracticeStreak++;
      } else {
        this.currentPracticeStreak = 1;
      }
      
      localStorage.setItem('lastPracticeDate', today);
      localStorage.setItem('practiceStreak', this.currentPracticeStreak.toString());
    }
  }

  toggleMetronome() {
    if (this.metronomeActive) {
      this.stopMetronome();
    } else {
      this.startMetronome();
    }
  }

  startMetronome() {
    this.metronomeActive = true;
    this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    const interval = 60000 / this.metronomeTempo;
    this.metronomeInterval = setInterval(() => {
      this.playMetronomeSound();
    }, interval);
  }

  stopMetronome() {
    this.metronomeActive = false;
    if (this.metronomeInterval) {
      clearInterval(this.metronomeInterval);
    }
  }

  playMetronomeSound() {
    if (!this.audioContext) return;
    
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator.type = 'sine';
    oscillator.frequency.value = 800;
    gainNode.gain.value = 0.5;
    
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    oscillator.start();
    oscillator.stop(this.audioContext.currentTime + 0.1);
  }

  increaseTempo() {
    if (this.metronomeTempo < 200) {
      this.metronomeTempo += 5;
      if (this.metronomeActive) {
        this.stopMetronome();
        this.startMetronome();
      }
    }
  }

  decreaseTempo() {
    if (this.metronomeTempo > 40) {
      this.metronomeTempo -= 5;
      if (this.metronomeActive) {
        this.stopMetronome();
        this.startMetronome();
      }
    }
  }

  @HostListener('document:keydown.escape')
  handleEscape() {
    if (this.showModal) {
      this.closeVideo();
    }
    if (this.showAssistant) {
      this.toggleAIAssistant();
    }
  }
}