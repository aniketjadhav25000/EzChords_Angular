import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-beginner-lessons',
  templateUrl: './beginner-lessons.component.html',
  styleUrls: ['./beginner-lessons.component.css']
})
export class BeginnerLessonsComponent {
  lessons = [
    { id: 1, title: 'How to Hold a Guitar', description: 'Learn posture and hand placement.', videoUrl: 'https://www.youtube.com/embed/VIDEO_ID1', icon: '🪑' },
    { id: 2, title: 'Basic Chords', description: 'Start with open chords and hand shape basics.', videoUrl: 'https://www.youtube.com/embed/VIDEO_ID2', icon: '🎼' },
    { id: 3, title: 'Strumming Patterns', description: 'Master rhythm with beginner-friendly strumming.', videoUrl: 'https://www.youtube.com/embed/VIDEO_ID3', icon: '🥁' },
  ];

  showModal = false;
  videoUrl: string = '';
  sanitizedVideoUrl!: SafeResourceUrl;
  showAssistant = false;
  userQuery = '';
  aiResponse = '';

  constructor(private sanitizer: DomSanitizer) {}

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
  }

  isCompleted(id: number): boolean {
    const stored = JSON.parse(localStorage.getItem('lessonProgress') || '{}');
    return !!stored[id];
  }

  toggleAIAssistant() {
    this.showAssistant = !this.showAssistant;
  }

  sendAIQuery() {
    // Placeholder for now
    this.aiResponse = "🎸 Let’s start with a simple chord: Try E Minor. Place fingers on A2 and D2!";
  }
}
