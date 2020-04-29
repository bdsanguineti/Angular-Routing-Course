import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { SharedModule } from '../shared/shared.module';

import { MessageComponent } from './message.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([ // Using for Child because this is a Feature Module.
      {
        path: 'messages',
        component: MessageComponent,
        outlet: 'popup'
      }
    ])
  ],
  declarations: [
    MessageComponent
  ]
})
export class MessageModule { }
