import { Component, signal } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { Header, Sidebar } from 'quiz-components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend');
}
