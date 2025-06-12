import { Component, AfterViewInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  features = [
    { icon: '✅', text: 'Structured learning from basics to performance level' },
    { icon: '🎧', text: 'Interactive audio previews for quick learning' },
    { icon: '📱', text: 'Mobile-first UI for learning anywhere' },
    { icon: '🔥', text: 'Warm-up routines and practice goals' },
    { icon: '🚀', text: 'Free forever — no login required' }
  ];

  testimonials = [
    { name: 'Riya', role: 'Student', message: 'EzChords helped me play my first song in just 3 days!' },
    { name: 'Arjun', role: 'Hobbyist', message: 'The Bollywood collection is amazing. So easy to follow.' }
  ];

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.createStars();
  }

  handleGetStarted() {
    console.log('Get Started clicked');
  }

  handleFeatureClick(feature: string) {
    console.log('Feature clicked:', feature);
  }

  handleBollywoodSongs() {
    console.log('Bollywood Songs clicked');
  }

  handleTestimonialClick(event: MouseEvent) {
    const el = event.currentTarget as HTMLElement;
    this.renderer.setStyle(el, 'transform', 'rotate(2deg) scale(1.05)');
    setTimeout(() => {
      this.renderer.setStyle(el, 'transform', 'scale(1.05)');
    }, 300);
  }

  animateListItem(event: Event) {
    const el = event.currentTarget as HTMLElement;
    const icon = el.querySelector('.interactive-icon') as HTMLElement;
    this.renderer.setStyle(icon, 'transform', 'scale(1.3) rotate(360deg)');
    this.renderer.setStyle(el, 'color', '#fbbf24');
    setTimeout(() => {
      this.renderer.setStyle(icon, 'transform', 'scale(1)');
      this.renderer.removeStyle(el, 'color');
    }, 500);
  }

  createStars() {
    const starsContainer = document.getElementById('stars');
    if (!starsContainer) return;

    for (let i = 0; i < 50; i++) {
      const star = this.renderer.createElement('div');
      this.renderer.addClass(star, 'star');
      this.renderer.setStyle(star, 'left', `${Math.random() * 100}%`);
      this.renderer.setStyle(star, 'top', `${Math.random() * 100}%`);
      const size = `${Math.random() * 3 + 1}px`;
      this.renderer.setStyle(star, 'width', size);
      this.renderer.setStyle(star, 'height', size);
      this.renderer.setStyle(star, 'animationDelay', `${Math.random() * 2}s`);
      this.renderer.appendChild(starsContainer, star);
    }
  }
}
