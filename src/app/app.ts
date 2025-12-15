import { Component } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';
import CustomStore from 'devextreme/data/custom_store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DxDataGridModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {

  title = 'dxgrid-demo';

  selectedRowKeys: number[] = [];
  allData: any[] = [];
  dataSources: any;

  constructor() {

    // create local "server" data
    for (let i = 1; i <= 400; i++) {
      this.allData.push({
        id: i,
        name: 'Record ' + i
      });
    }

    // simulate remote paging using Promise
    this.dataSources = new CustomStore({
      key: 'id',
      load: (loadOptions: any) => {

        const skip = loadOptions.skip ?? 0;
        const take = loadOptions.take ?? 5;

        console.log('load called → skip:', skip, 'take:', take);

        return new Promise((resolve) => {
          setTimeout(() => {
            const pageData = this.allData.slice(skip, skip + take);

            resolve({
              data: pageData,
              totalCount: this.allData.length
            });
          }, 300);
        });
      }
    });
  }
  onOptionChanged(e: any) {
  // Check if pageIndex changed
  if (e.fullName === 'paging.pageIndex') {
    this.selectedRowKeys = []; // Clear selection
  }
}

}
