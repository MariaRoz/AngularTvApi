import { Component, OnInit, SecurityContext } from '@angular/core';
import {Router} from '@angular/router';
import {TableService} from '../_services/table.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
public modalData
public testhtml
  constructor(
    private router: Router,
    private modalService: TableService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.modalService.modalData(this.router.url).subscribe(data => this.modalData = data);
    // this.testhtml = this.sanitizer.bypassSecurityTrustHtml(this.modalData.summary) ;
  }
  onSubmit() {
    this.router.navigate(['/']);
  }

}
