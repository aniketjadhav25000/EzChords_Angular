import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  template: `
    <div class="text-center mt-12">
      <h1 class="text-4xl font-bold text-blue-700">Welcome to EzChords 🎸</h1>
      <p class="mt-4 text-lg">Learn guitar chords, Bollywood songs, and beginner lessons all in one place.</p>
    </div>
  `

})
export class HomeComponent {}
