import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-table-input',
  templateUrl: './table-input.component.html',
  styleUrls: ['./table-input.component.css']
})
export class TableInputComponent implements OnInit {
   inputData:any;
   dataForm:FormGroup;

   @Output() inputDataEmitter = new EventEmitter();

  constructor(private router:Router) { }

  ngOnInit() {
    //form controls
    this.dataForm = new FormGroup({
      'inpName' : new FormControl('',Validators.required),
      'inpAge'  : new FormControl('',[Validators.required , Validators.pattern(/^[1-9][0-9]*$/)])
    });
  }

  onAddInput(){
    //add name and age to array
    this.inputData = {name:this.dataForm.get('inpName').value , age:this.dataForm.get('inpAge').value};
    //emit that array
    this.inputDataEmitter.emit(this.inputData);
    //clear form after submitting
    this.dataForm.reset();
  }
}
