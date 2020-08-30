import { SharedService } from './../../../../services/shared.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Client } from './../../../../models/Client';
import { ClientService } from './../../../../services/client/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clientList: Array<Client> = new Array<Client>();
  client: Client;

  constructor(private router: Router, private clientService: ClientService, private sharedService: SharedService) { }

  ngOnInit() {
    this.search();
  }

  search() {

    localStorage.setItem('idclientedit', null);

    this.clientList = new Array<Client>();
    this.clientService.findAll().subscribe( response => {

      Array.of(response.data).forEach(element => {
        if (element !== undefined) {
          this.clientList.push(element);

        }
      });

    }, err => {
      console.log('error', err);
    });

  }

  showDataTable(): boolean {
    return this.clientList != null && this.clientList !== undefined && this.clientList[0] != null;
  }

  new() {
    localStorage.setItem('iduseredit', null);
    this.router.navigate(['client/new']);

  }

  edit(id: string) {
    console.log('editUser id=', id);

    localStorage.setItem('idclientedit', id);
    this.router.navigate(['client/edit']);
  }

  delete(id: string) {
    this.clientService.delete(id).subscribe(data => {
      this.search();
    }, err => {
      console.log('error ao deletar cliente.');
    });
  }

}
