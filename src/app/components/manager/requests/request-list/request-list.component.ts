import { SharedService } from './../../../../services/shared.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Request } from './../../../../models/Request';
import { RequestService } from './../../../../services/request/request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requestList: Array<Request> = new Array<Request>();
  request: Request;

  constructor(private router: Router, private requestService: RequestService, private sharedService: SharedService) { }

  ngOnInit() {
    this.search();
  }

  search() {

    localStorage.setItem('idrequestedit', null);

    this.requestList = new Array<Request>();
    this.requestService.findAll().subscribe( response => {

      Array.of(response.data).forEach(element => {
        if (element !== undefined) {
          this.requestList.push(element);

        }
      });

    }, err => {
      console.log('error', err);
    });

  }

  showDataTable(): boolean {
    return this.requestList != null && this.requestList !== undefined && this.requestList[0] != null;
  }

  new() {
    localStorage.setItem('idrequestedit', null);
    this.router.navigate(['request/new']);

  }

  edit(id: string) {
    localStorage.setItem('idrequestedit', id);
    this.router.navigate(['request/edit']);
  }

  delete(id: string) {
    this.requestService.delete(id).subscribe(data => {
      this.search();
    }, err => {
      console.log('error ao deletar pedido.');
    });
  }

}
