import {MatSort, MatTableDataSource} from '@angular/material';
import {Component, OnInit, ViewChild} from '@angular/core';
import {TableService} from '../../_services/table.service';
import {ShowDetail, ShowsResponse} from '../interface';
import {Router} from '@angular/router';


@Component({
  selector: 'app-table-comp',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public shows: ShowDetail[];
  error = false;
  dataSource = new MatTableDataSource();
  displayedColumns = ['name', 'language', 'genres', 'status', 'rating'];
  constructor(
    private tableService: TableService,
    private router: Router
  ) {
  }
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.tableService.getData('girl').subscribe((data: any[]) => {
      const shows = data.map((value: ShowsResponse): ShowDetail => {
        return value.show;
      });
      this.shows = shows;
      this.dataSource = new MatTableDataSource(this.shows);
      this.dataSource.sort = this.sort;
      return this.shows;
    });
  }
  applyFilter(filterValue: string) {
    if (filterValue === '') {
      filterValue = 'girl';
    }
      this.tableService.getData(filterValue).subscribe((data: any[]) => {
          const shows = data.map((value: ShowsResponse): ShowDetail => {
            return value.show;
          });
          this.shows = shows;
          (this.shows.length === 0) ? this.error = true : this.error = false;
        this.dataSource = new MatTableDataSource(this.shows);
        this.dataSource.sort = this.sort;
          return this.shows;
        });
  }
  selectRow(row) {
    console.log(row);
    this.router.navigate(['/' + row.id]);
  }
}
