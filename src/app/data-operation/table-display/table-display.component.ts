import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.css']
})
export class TableDisplayComponent implements OnInit{
  
  displayNameAndAge=[];
  
  constructor(){}
  
  ngOnInit(){
  }

  onAddedToDisplay(newData:any){
    //push data into array
    this.displayNameAndAge.push(newData);
  }
}
