import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.state';

const usersFeatureSelector = createFeatureSelector<UserState>('users');

export const getMaskUserNameSelector = createSelector(
    usersFeatureSelector,
    (state) => state.maskUserName
);

export const getCurrentUserSelector = createSelector(
    usersFeatureSelector,
    (state) => state.currentUser
);

export const getUsersSelector = createSelector(
    usersFeatureSelector,
    (state) => state.users
);
