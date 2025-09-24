import { Component, inject} from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'quiz-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
    private readonly sidebarService = inject(SidebarService);
    
  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
}
