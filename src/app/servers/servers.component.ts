import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //template: '<app-server></app-server><app-server></app-server>',
  //template: `
  //<app-server></app-server>
  //<app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName='Test server';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 4000); 
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Server name is: ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    return this.serverName = (<HTMLInputElement>event.target).value;
    
  };

}
