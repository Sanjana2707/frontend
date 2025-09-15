import { Component, inject} from '@angular/core';
import { App } from '../../app';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
    private readonly app = inject(App);
    
  toggleSidebar() {
    this.app.isSidebarExpanded.set(!this.app.isSidebarExpanded());
  }
}
