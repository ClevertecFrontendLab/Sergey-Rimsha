import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { AppRootStateType } from '../store';

export const useAppDispatch = () => useDispatch<ThunkDispatch<AppRootStateType, void, AnyAction>>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;
