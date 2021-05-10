import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataOperationService } from '../data-operation.service';

@Component({
  selector: 'app-table-input',
  templateUrl: './table-input.component.html',
  styleUrls: ['./table-input.component.css']
})
export class TableInputComponent implements OnInit {
   inpName='';
   inpAge='';
   inputData = [];

  constructor(private router:Router) { }


  ngOnInit(): void {
  }

  //push name and age into inputData and pass it to the display component
  addDataAndGoToDisplay(){
    this.inputData.push({name:this.inpName , age:this.inpAge});
    this.router.navigateByUrl('/display' ,{state:this.inputData});
  }

  // constructor(private dataOpService:DataOperationService) { }

  // ngOnInit(): void {
  // }

  // onAddInput(){
  //   this.inputData.push({name:this.inpName , age:this.inpAge});
  //   this.dataOpService.inputDataEmitter.emit(this.inputData);
  // }
  
}
