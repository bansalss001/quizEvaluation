import { Observable, Observer } from "rxjs";
import { User } from '../models/user';

var _userObserver: Observer<User> = {
    next: (value: User) => {},
    error: (err: any) => {},
    complete: () => {}
}

export const UserObservable  = new Observable<User>(observer => {
    _userObserver = observer;
});

export const UserObserver = _userObserver;