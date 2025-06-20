import { Component, EventEmitter, Output, OnInit } from '@angular/core';
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
export class NavbarComponent implements OnInit {
  isOpen = false;
  searchInput: string = ''; // Keep this if you want to re-introduce search elsewhere or for a different purpose
  isLoggedIn: boolean = false; // State to track login status
  userName: string = 'EzUser'; // Placeholder for logged-in user's name
  isUserMenuOpen: boolean = false; // State for user profile dropdown

  navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Beginner Lessons', path: '/beginner-lessons' },
    { label: 'Chord Library', path: '/chord-library' },
    { label: 'Bollywood Songs', path: '/bollywood-songs' },
    { label: 'Contact', path: '/contact' }
  ];

  @Output() searchQuery = new EventEmitter<string>(); // Keep this if search is moved or used for other purposes

  ngOnInit() {
    // In a real application, you would check a service (e.g., AuthService) here
    // to determine the actual login status and fetch user data.
    // For demonstration, let's simulate a logged-in state.
    this.checkLoginStatus();
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.closeUserMenu(); // Close user menu if mobile menu is opened
    }
  }

  closeMenu() {
    this.isOpen = false;
  }

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
    if (this.isUserMenuOpen) {
      this.closeMenu(); // Close mobile menu if user menu is opened
    }
  }

  closeUserMenu() {
    this.isUserMenuOpen = false;
  }

  // --- Dummy Authentication Methods (Replace with real logic) ---
  private checkLoginStatus() {
    // This is a placeholder. In a real app, you'd check a token,
    // a service state, or local storage.
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (this.isLoggedIn) {
      this.userName = localStorage.getItem('userName') || 'EzUser';
    }
  }

  login() {
    // Simulate login success
    this.isLoggedIn = true;
    this.userName = 'JohnDoe'; // Set actual user name from login response
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', 'JohnDoe');
    console.log('User logged in!');
    // In a real app, you would navigate to a dashboard or home page
  }

  logout() {
    // Simulate logout
    this.isLoggedIn = false;
    this.userName = '';
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    this.closeUserMenu();
    console.log('User logged out!');
    // In a real app, you would navigate to the login page or home
  }

  // Keep onSearch if you decide to add a search input back somewhere
  onSearch() {
    const trimmedQuery = this.searchInput.trim();
    if (trimmedQuery) {
      this.searchQuery.emit(trimmedQuery);
      // In a real application, you might navigate to a search results page
      console.log('Search initiated for:', trimmedQuery);
    }
  }
}