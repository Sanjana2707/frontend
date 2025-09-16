import { Component, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-view-qbanks',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './view-qbanks.html',
  styleUrl: './view-qbanks.scss'
})
export class ViewQbanks implements OnInit {
  qbanks = signal<any[]>([]);

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://quiz-server-39z8.onrender.com/api/qbanks').subscribe({
      next: (data) => this.qbanks.set(data),
      error: (err) => console.error('Error fetching qbanks:', err)
    });
  }
}