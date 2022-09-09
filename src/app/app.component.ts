import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, map, Subject, takeUntil } from 'rxjs';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'deluxeApp';
  progress: number = 0;
  panelOpenGeneralState: boolean = false;
  private unsubscribeAll$: Subject<object> = new Subject;

  // Streams
  scroll$ = fromEvent( document, 'scroll');
  progress$ = this.scroll$.pipe(
    map( event => this.calcularProcentajeScroll(event) )
);

  public screenWidth: any;
  public screenHeight: any;

  constructor(private mainService: MainService){
    this.progress$.pipe(takeUntil(this.unsubscribeAll$)).subscribe( percentage => {
      this.progress = percentage;
      this.mainService.progressSubject.next(this.progress);
    });
    this.mainService.expansionPanelSubject$.subscribe((expansion: boolean[]) => {
      this.panelOpenGeneralState = expansion.includes(true);
    });
  }
  
  ngOnInit() {
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
  }

  ngOnDestroy(){
    this.unsubscribeAll$.complete();
    this.unsubscribeAll$.unsubscribe();
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  calcularProcentajeScroll = ( event: any ) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;
    return ( scrollTop / ( scrollHeight - clientHeight ) ) * 100;
}

}
