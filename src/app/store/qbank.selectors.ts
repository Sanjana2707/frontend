import { QbankState } from "./qbank.reducer";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectQbankState= createFeatureSelector<QbankState>('qbank');  
export const selectQbanks = createSelector(selectQbankState, (state) => state.qbanks);
export const selectQbankLoading = createSelector(selectQbankState, (state) => state.loading);
export const selectQbankError = createSelector(selectQbankState, (state) => state.error);