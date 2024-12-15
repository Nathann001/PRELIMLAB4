import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-motorcycle-detail',
  standalone: true, 
  imports: [CommonModule, RouterModule], 
  templateUrl: './motorcycle-detail.component.html',
})
export class MotorcycleDetailComponent {
  bikeId: string | null = '';

  constructor(private route: ActivatedRoute) {
    this.bikeId = this.route.snapshot.paramMap.get('id');
  }
}
