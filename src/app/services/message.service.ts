import { Injectable } from '@angular/core';


@Injectable()
export class MessageService {

  public success: boolean = false

  public showSuccess(msg: String) {
    this.success = true;
  }
}
