import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, NgZone, OnInit, PLATFORM_ID } from '@angular/core';
import {
  NavigationEnd,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private previousUrl: string | null = null;

  constructor(
    private router: Router,
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe(event => {
        // Save previous URL
        if (event instanceof NavigationStart) {
          this.previousUrl = this.router.url;
        }

        // After navigation ends
        if (event instanceof NavigationEnd) {
          // Back button logic (redirect to Home if navigated back to any route except Home)
          if (
            this.previousUrl &&
            this.previousUrl !== '/' &&
            event.urlAfterRedirects === this.previousUrl
          ) {
            this.router.navigateByUrl('/');
            return;
          }

          // Scroll to top of scrollable content
          this.ngZone.runOutsideAngular(() => {
            requestAnimationFrame(() => {
              const scrollEl = document.getElementById('scroll-container');
              if (scrollEl) {
                scrollEl.scrollTo({ top: 0, behavior: 'auto' });
              }
            });
          });
        }
      });
    }
  }
}
