import { createAction, props } from "@ngrx/store";
import { Qbank } from "../components/view-qbanks/view-qbanks";

export const loadQbanks = createAction(
    '[Qbank] Load Qbanks'
);
export const loadQbanksSuccess = createAction(
    '[Qbank] Load Qbanks Success', 
    props<{ qbanks: Qbank[] }>()
);
export const loadQbanksFailure = createAction(
    '[Qbank] Load Qbanks Failure',
     props<{ error: string }>()
    );