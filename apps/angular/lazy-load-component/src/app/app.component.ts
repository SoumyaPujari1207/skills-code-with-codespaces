import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlaceholderComponent } from "../placeholder/placeholder.component";
import { TopComponent } from "../top/top.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlaceholderComponent, TopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lazy-load-component';
  topLoaded = signal(false);
}
