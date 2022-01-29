import { Injectable } from '@angular/core';
import { Notification } from '@models/notification.interface';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private notification: NzNotificationService) { }

  public notificationToast(notificationTypes: Notification): void {
    const { type, title } = notificationTypes;
    this.notification.create(
      type,
      title,
      ''
    );
  }
}
