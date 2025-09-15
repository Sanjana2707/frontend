import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import {App} from '../../app';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
    protected readonly isSidebarExpanded = inject(App).isSidebarExpanded;
}

