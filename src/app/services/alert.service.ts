import { Injectable } from '@angular/core';
import { filter, Observable, Subject } from 'rxjs';
import { AlertType, Message } from '../Modal/message';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new Subject<Message>();
  private defaultId = 'default-alert';
  constructor() { }
    // enable subscribing to alerts observable
    onAlert(id = this.defaultId): Observable<Message> {
      return this.subject.asObservable().pipe(filter(x => x && x.id === id));
  }

  // convenience methods
  success(message: string, options?: any) {
      this.alert(new Message({ ...options, type: AlertType.Success, message }));
  }

  error(message: string, options?: any) {
      this.alert(new Message({ ...options, type: AlertType.Error, message }));
  }

  info(message: string, options?: any) {
      this.alert(new Message({ ...options, type: AlertType.Info, message }));
  }

  warn(message: string, options?: any) {
      this.alert(new Message({ ...options, type: AlertType.Warning, message }));
  }

  // main alert method    
  alert(alert: Message) {
      alert.id = alert.id || this.defaultId;
      this.subject.next(alert);
  }

  // clear alerts
  clear(id = this.defaultId) {
      this.subject.next(new Message({ id }));
  }
 
}
