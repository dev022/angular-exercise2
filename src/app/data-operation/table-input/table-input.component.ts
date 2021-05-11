import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-table-input',
  templateUrl: './table-input.component.html',
  styleUrls: ['./table-input.component.css']
})
export class TableInputComponent implements OnInit {
   inpName='';
   inpAge='';
   inputData:any = [];

   @Output() inputDataEmitter = new EventEmitter();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onAddInput(){
    //add name and age to array
    this.inputData = {name:this.inpName , age:this.inpAge};
    //emit that array
    this.inputDataEmitter.emit(this.inputData);
  }
}
