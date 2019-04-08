import { debounceTime } from 'rxjs/operators/debounceTime';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() enviaFiltro = new EventEmitter<string>();
  debounce: Subject<string> = new Subject<string>();
  filter = '';

  constructor() { }

  ngOnInit() {

    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.enviaFiltro.emit(filter));
  }

  ngOnDestroy() {
    this.debounce.unsubscribe();
  }
}
