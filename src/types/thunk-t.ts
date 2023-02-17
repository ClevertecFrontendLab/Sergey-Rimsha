import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { AppRootStateType } from '../store';

export type AppThunkType = ThunkAction<void, AppRootStateType, unknown, AnyAction>;
