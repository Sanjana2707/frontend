import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public readonly isSidebarExpanded = signal(true);
  
  toggleSidebar() {
    this.isSidebarExpanded.set(!this.isSidebarExpanded());
  }
}
