import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  constructor() { }

  ngOnInit(): void {

  }
  @Input('Total') all: number = 0;
  @Input('beblash') free: number = 0;
  @Input('bemasare') premium: number = 0;

  selectedRadioButtonValue: string = 'All';

  whatsteus() {
    return console.log(this.selectedRadioButtonValue);
  }

  @Output()
  filterRadioButtionSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonSelectionChanged() {
    
    this.filterRadioButtionSelectionChanged.emit(this.selectedRadioButtonValue);
    // console.log(this.selectedRadioButtonValue);
  };
};

