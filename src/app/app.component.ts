import { Component } from '@angular/core';
import { recordGroup } from './classes/key-value-record-group';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  record = recordGroup.record_B;
}
