import { Component } from '@angular/core';
import { DataOperationService } from './data-operation/data-operation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DataOperationService]
})
export class AppComponent {
  title = 'exerciseApp';
}
