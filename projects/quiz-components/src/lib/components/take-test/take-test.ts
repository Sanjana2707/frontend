import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadSelectedQbank } from '../../store/qbank.actions';
import { selectSelectedQbank, selectSelectedQbankLoading, selectSelectedQbankError } from '../../store/qbank.selectors';
import { FullQbank } from '../../models/qbank.model';
import { QbankState } from '../../store/qbank.reducer';

@Component({
  selector: 'quiz-take-test',
  standalone: true,
  imports: [AsyncPipe, RouterModule],
  templateUrl: './take-test.html',
  styleUrl: './take-test.scss'
})
export class TakeTestComponent implements OnInit {
  qbank$: Observable<FullQbank | null>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private store: Store<{ qbank: QbankState }>, private route: ActivatedRoute) {
    this.qbank$ = this.store.select(selectSelectedQbank);
    this.loading$ = this.store.select(selectSelectedQbankLoading);
    this.error$ = this.store.select(selectSelectedQbankError);
  }

  ngOnInit() {
    const qbankId = this.route.snapshot.paramMap.get('qbankId');
    if (qbankId) {
      this.store.dispatch(loadSelectedQbank({ qbankId }));
    }
  }
}