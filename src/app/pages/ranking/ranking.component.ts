import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IRankingUser, fakeData } from 'src/app/common/utils/fake-data';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
})
export class RankingComponent implements AfterViewInit {
  fakeDataRanking = fakeData.ranking.sort((a, b) => b.ok - a.ok);
  displayedColumns: string[] = ['id', 'name', 'ok'];
  dataSource = new MatTableDataSource<IRankingUser>(fakeData.ranking);

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator as any;
  }
}
