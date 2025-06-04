import { Component } from '@angular/core';

@Component({
  selector: 'app-beginner-lessons',
  standalone: true,
  template: `
    <div class="text-center mt-12">
      <h1 class="text-3xl font-semibold">Beginner Guitar Lessons</h1>
      <p class="mt-2">Step-by-step tutorials for absolute beginners.</p>
    </div>
  `,
  templateUrl : "./beginner-lessons.component.html"
})
export class BeginnerLessonsComponent {}
