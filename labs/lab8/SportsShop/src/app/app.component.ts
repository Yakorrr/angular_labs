import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app',
  // standalone: true,
  // imports: [CommonModule],
  // templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
    <div class="bg-success p-2 text-center text-white">
      This is the SportShop
    </div>
  `
})
export class AppComponent {
  title = 'SportsShop';
}
