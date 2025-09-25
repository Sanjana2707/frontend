import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { QbankState } from '../../store/qbank.reducer';
import { selectQbankError, selectQbankLoading, selectQbanks } from '../../store/qbank.selectors';
import { Store } from '@ngrx/store';
import { loadQbanks, loadSelectedQbank } from '../../store/qbank.actions';
import { Qbank } from '../../models/qbank.model';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'quiz-view-qbanks',
  standalone: true,
  imports: [AsyncPipe, RouterModule],
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
  onTakeTest(qbankId: string) {
    this.store.dispatch(loadSelectedQbank({ qbankId }));
  }
} 