import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-phase-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './phase-detail.component.html',
  styleUrls: ['./phase-detail.component.css']
})
export class PhaseDetailComponent {
  phaseId: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.phaseId = params.get('id');
    });
  }
}
