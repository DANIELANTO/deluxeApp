import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
progressSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
progressSubject$ = this.progressSubject.asObservable();
expansionPanelSubject: BehaviorSubject<boolean[]> = new BehaviorSubject<boolean[]>([]);
expansionPanelSubject$ = this.expansionPanelSubject.asObservable();

constructor() { }

}
