// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Alert Component
import { AlertModule } from 'ngx-bootstrap/alert';
import { UserComponent } from './user.component';

// Modal module
import { ModalModule } from 'ngx-bootstrap/modal';

// Notifications Routing
import { ProfilRoutingModule } from './profil-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProfilRoutingModule,
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    UserComponent,
  ]
})
export class ProfilModule { }
