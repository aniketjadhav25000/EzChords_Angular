import { Component, AfterViewInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  features = [
    {
      icon: '識',
      text: 'Structured learning path from basics to advanced techniques',
      color: 'text-blue-400'
    },
    {
      icon: '而',
      text: 'Interactive audio previews with adjustable tempo',
      color: 'text-purple-400'
    },
    {
      icon: '導',
      text: 'Mobile-friendly interface for practice anywhere',
      color: 'text-green-400'
    },
    {
      icon: '櫨',
      text: 'Daily challenges and warm-up routines',
      color: 'text-orange-400'
    },
    {
      icon: '叱',
      text: 'Curated collection of popular Bollywood songs',
      color: 'text-pink-400'
    },
    {
      icon: '噫',
      text: 'Free forever with no login required',
      color: 'text-amber-400'
    }
  ];

  testimonials = [
    {
      name: 'Riya Patel',
      role: 'College Student',
      message: 'I never thought I could play guitar, but EzChords made it so simple! I played my first song in just 3 days.',
      avatar: 'assets/avatars/riya.jpg'
    },
    {
      name: 'Arjun Sharma',
      role: 'Software Engineer',
      message: 'The Bollywood song collection is amazing. The simplified chords make it so easy to follow along.',
      avatar: 'assets/avatars/arjun.jpg'
    },
    {
      name: 'Priya Desai',
      role: 'Music Teacher',
      message: 'I recommend EzChords to all my students. The visual chord diagrams are the best I\'ve seen.',
      avatar: 'assets/avatars/priya.jpg'
    }
  ];

  popularSongs = [
    {
      title: 'Tum Hi Ho',
      artist: 'Arijit Singh',
      difficulty: 3,
      image: 'assets/songs/tum-hi-ho.jpg'
    },
    {
      title: 'Kesariya',
      artist: 'Arijit Singh',
      difficulty: 2,
      image: 'assets/songs/kesariya.jpg'
    },
    {
      title: 'Apna Bana Le',
      artist: 'Sachin-Jigar',
      difficulty: 4,
      image: 'assets/songs/apna-bana-le.jpg'
    },
    {
      title: 'Raatan Lambiyan',
      artist: 'Jubin Nautiyal',
      difficulty: 2,
      image: 'assets/songs/raatan-lambiyan.jpg'
    }
  ];

  constructor(private renderer: Renderer2, private router: Router) {}

  ngAfterViewInit() {
    this.initializeAnimations();
  }

  handleGetStarted() {
    this.router.navigate(['../beginner-lessons']);
  }

  handleLearning() {
    this.router.navigate(['../learning-path']);
  }

  handleExploreChords() {
    this.router.navigate(['../chord-library']);
  }

  handleFeatureClick(feature: string) {
    switch(feature) {
      case 'lessons':
        this.router.navigate(['/lessons']);
        break;
      case 'chords':
        this.router.navigate(['/chords']);
        break;
      case 'bollywood':
        this.router.navigate(['/songs']);
        break;
    }
  }

  handleBollywoodSongs() {
    this.router.navigate(['/songs']);
  }

  handleExploreFeatures() {
    const element = document.getElementById('features-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  handleSongSelect(song: any) {
    alert(`Opening "${song.title}" by ${song.artist}!`);
  }

  handleTestimonialClick(event: Event) {
    const el = event.currentTarget as HTMLElement;
    this.renderer.addClass(el, 'transform');
    this.renderer.addClass(el, 'scale-110');
    this.renderer.setStyle(el, 'z-index', '10');
    setTimeout(() => {
      this.renderer.removeClass(el, 'transform');
      this.renderer.removeClass(el, 'scale-110');
      this.renderer.removeStyle(el, 'z-index');
    }, 350);
  }

  animateListItem(event: Event) {
    const el = event.currentTarget as HTMLElement;
    const icon = el.querySelector('.interactive-icon') as HTMLElement;
    this.renderer.addClass(icon, 'animate-spin');
    this.renderer.addClass(icon, 'text-amber-400');
    setTimeout(() => {
      this.renderer.removeClass(icon, 'animate-spin');
      this.renderer.removeClass(icon, 'text-amber-400');
    }, 600);
  }

  initializeAnimations() {
    this.initializeScrollAnimations();
  }

  initializeScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.scroll-animate').forEach(el => {
      observer.observe(el);
    });
  }
}