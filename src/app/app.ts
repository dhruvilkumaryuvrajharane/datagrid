import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DxDataGridModule } from 'devextreme-angular';

@Component({
  selector: 'app-root',
  imports: [DxDataGridModule],

  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'dxgrid-demo';
  data: any[] = [];
  selectedRowKeys: number[] = [];
constructor() {
    for (let i = 1; i <= 400; i++) {
      this.data.push({
        id: i,
        name: 'Record ' + i
      });
    }
  }

}
