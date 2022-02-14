export class Message {
    clear() {
      throw new Error('Method not implemented.');
    }
    id: string | undefined;
    type: AlertType | undefined;
    message: string | undefined;
    autoClose: boolean | undefined;
    keepAfterRouteChange: boolean | undefined;
    fade: boolean | undefined;

    constructor(init?:Partial<Message>) {
        Object.assign(this, init);
    }
}

export enum AlertType {
    Success,
    Error,
    Info,
    Warning
}
