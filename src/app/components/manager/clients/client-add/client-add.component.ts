import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/Client';
import { ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {

  client: Client;
  idClient: string = null;

  constructor(private router: Router, private clientService: ClientService) { }

  ngOnInit() {
    this.createNewClient();

    this.idClient = localStorage.getItem('idclientedit');

    if (this.idClient !== undefined && this.idClient != null) {
      this.clientService.findById(this.idClient).subscribe(response => {
            this.client = response.data;
        }, err => {
            console.log('erro ao buscar cliente', err);

        });
    }

  }

  createNewClient() {
    this.client = new Client(null, null, null);
  }

  save() {

    console.log(this.client);

    if (this.client.id != null && this.client.id > 0) {
      this.clientService.edit(this.client).subscribe(data => {
        this.createNewClient();
        this.router.navigate(['client']);
      }, err => {
        console.log('erro ao atualizar client!');
      });
    } else {
      this.clientService.save(this.client).subscribe(data => {
        this.createNewClient();
        this.router.navigate(['client']);
      }, err => {
        console.log('erro ao salvar usuário!');
      });
    }
  }

  cancel() {
    this.createNewClient();
    this.router.navigate(['client']);
  }

}
