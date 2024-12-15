import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-motorcycle-list',
  standalone: true, 
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './motorcycle-list.component.html',
})
export class MotorcycleListComponent {
  motorcycles = [
    { id: 1, name: 'Kawasaki Ninja 400', image: "../../assets/ninja400.jpg" },
    { id: 2, name: 'KTM Duke 200', image: "../../assets/duke200.jpg" },
    { id: 3, name: 'Yamaha R3', image: '../../assets/r3.jpg' },
  ];
  selectedBike: string = '';
}
