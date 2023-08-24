import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  constructor() {}

  ngOnInit(): void {

  }
  @Input('Total') all: number = 0;
  @Input('beblash') free: number = 0;
  @Input('bemasare') premium: number = 0;
}
