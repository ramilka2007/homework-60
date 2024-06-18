export interface MessageType {
  _id: string;
  author: string;
  message: string;
  datetime: Date;
}

export interface YourMessage {
  author: string;
  message: string;
}
