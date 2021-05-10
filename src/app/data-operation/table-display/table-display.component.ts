import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataOperationService } from '../data-operation.service';

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.css']
})
export class TableDisplayComponent implements OnInit{
  
  displayNameAndAge=[];
  
  constructor(private router:Router , private actRoute:ActivatedRoute){
    
  }
  //fetch data that passed from table-input...
  ngOnInit(){
    this.displayNameAndAge = Object.values(history.state);
  }

  // displayData=[];
  // constructor(private dataOpService:DataOperationService) {}
  
  // ngOnInit(): void {
  //   // this.dataOpService.inputDataEmitter.subscribe(
  //   //   (dataValue) => {
  //   //    // this.displayData.push(dataValue);
  //   //     //console.log(this.displayData);
  //   //     this.displayData = dataValue;
  //   //      for (const x of this.displayData) {
  //   //        console.log(x.name);
  //   //        console.log(x.age);
  //   //      }
  //   //     //console.log(this.displayData);
  //   //   }
  //   // );
  // }

}
