import { createAction, props } from '@ngrx/store';

import { User } from '../user';
import { USERS_ACTION_TYPES } from './user.action-types';

export const maskUserName = createAction(
    USERS_ACTION_TYPES.USERS_MASK_USER_NAME
);

export const setCurrentUser = createAction(
    USERS_ACTION_TYPES.USERS_SET_CURRENT_USER,
    props<{ currentUser: User }>()
);

export const clearCurrentUser = createAction(
    USERS_ACTION_TYPES.USERS_SET_CURRENT_USER
);
