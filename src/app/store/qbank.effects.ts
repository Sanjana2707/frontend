import { createEffect, ofType, Actions } from "@ngrx/effects";
import { catchError, map, mergeMap } from "rxjs/operators";
import { loadQbanks, loadQbanksSuccess, loadQbanksFailure } from "./qbank.actions";
import { Qbank } from "../components/view-qbanks/view-qbanks";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";
import { Injectable, inject } from "@angular/core";

@Injectable()
export class QbankEffects {
    private actions$ = inject(Actions);
    private http = inject(HttpClient);

    loadQbanks$ = createEffect(() => 
        this.actions$.pipe(
            ofType(loadQbanks),
            mergeMap(() =>
              this.http.get<Qbank[]>('https://quiz-server-39z8.onrender.com/api/qbanks').pipe(
                map((qbanks) => loadQbanksSuccess({ qbanks })),
                catchError((error) => of(loadQbanksFailure({ error })))
              )
            )
          )
        );
}