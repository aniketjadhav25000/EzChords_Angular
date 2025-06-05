import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface NavLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isOpen = false;
  searchInput = '';

  navLinks: NavLink[] = [
    { label: 'Home', path: '/' },
    { label: 'Beginner Lessons', path: '/beginner-lessons' },
    { label: 'Chord Library', path: '/chord-library' },
    { label: 'Bollywood Songs', path: '/bollywood-songs' },
    { label: 'Contact', path: '/contact' }
  ];

  constructor(private router: Router) {}

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  closeMenu() {
    this.isOpen = false;
  }

  onSearch() {
    if (this.searchInput.trim()) {
      // Navigate to chord library with search parameter
      this.router.navigate(['/chord-library'], { 
        queryParams: { search: this.searchInput.trim() } 
      });
      this.searchInput = '';
      this.closeMenu();
    }
  }
}
