import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Song } from "../../../shared/models/song.model";
import { BOLLYWOOD_SONGS } from '../../../shared/models/songs.data';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-song-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './song-detail.component.html',
})
export class SongDetailComponent implements OnInit {
  song: Song | undefined;
  isScrolling = false;
  isCountingDown = false;
  countdown = 5;
  private scrollInterval: any;
  private countdownInterval: any;

  @ViewChild('lyricsContainer') lyricsContainer!: ElementRef<HTMLDivElement>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.song = BOLLYWOOD_SONGS.find((s: Song) => s.id === id);
  }

  toggleAutoScroll(): void {
    if (this.isScrolling) {
      this.stopAutoScroll();
    } else {
      this.beginCountdownToScroll();
    }
  }

  private beginCountdownToScroll(): void {
    this.isCountingDown = true;
    this.countdown = 10;

    this.countdownInterval = setInterval(() => {
      this.countdown -= 1;
      if (this.countdown === 0) {
        clearInterval(this.countdownInterval);
        this.isCountingDown = false;
        this.startAutoScroll();
      }
    }, 1000);
  }

  private startAutoScroll(): void {
    const container = this.lyricsContainer?.nativeElement;
    if (!container) return;

    this.isScrolling = true;
    this.scrollInterval = setInterval(() => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      if (scrollTop + clientHeight >= scrollHeight) {
        this.stopAutoScroll();
      } else {
        container.scrollTop += 1;
      }
    }, 60);
  }

  private stopAutoScroll(): void {
    this.isScrolling = false;
    clearInterval(this.scrollInterval);
    clearInterval(this.countdownInterval);
    this.scrollInterval = null;
    this.countdownInterval = null;
    this.isCountingDown = false;
    this.countdown = 10;
  }
}
