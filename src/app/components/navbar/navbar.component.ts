import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isOpen = false;
  searchInput: string = '';

  navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Beginner Lessons', path: '/beginner-lessons' },
    { label: 'Chord Library', path: '/chord-library' },
    { label: 'Bollywood Songs', path: '/bollywood-songs' },
    { label: 'Contact', path: '/contact' }
  ];

  @Output() searchQuery = new EventEmitter<string>();

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  closeMenu() {
    this.isOpen = false;
  }

  onSearch() {
    const trimmedQuery = this.searchInput.trim();
    if (trimmedQuery) {
      this.searchQuery.emit(trimmedQuery);
    }
  }
}
