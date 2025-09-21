import { Component, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { QbankState } from '../../store/qbank.reducer';
import { selectQbankError, selectQbankLoading, selectQbanks } from '../../store/qbank.selectors';
import { Store } from '@ngrx/store';
import { loadQbanks } from '../../store/qbank.actions';


 export interface Qbank {
  _id: string;
  id:string
  name: string;
  category: string;
  noOfQuestions: number;
  status: boolean;
}

@Component({
  selector: 'app-view-qbanks',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './view-qbanks.html',
  styleUrl: './view-qbanks.scss'
})



export class ViewQbanks implements OnInit {
  qbanks$: Observable<Qbank[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private store: Store<{ qbank: QbankState }>) {
    this.qbanks$ = this.store.select(selectQbanks);
    this.loading$ = this.store.select(selectQbankLoading);
    this.error$ = this.store.select(selectQbankError);
  }

  ngOnInit() {
    this.store.dispatch(loadQbanks());
  }
} 