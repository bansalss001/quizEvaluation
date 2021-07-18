import { Observable } from "rxjs/internal/Observable";
import { Observer } from 'rxjs/internal/types';
import { User } from '../models/user';

let _userObserver: Observer<User> | null;
export const UserObservable  = new Observable(observer => {
    _userObserver = observer;
});

export const UserObserver = _userObserver;