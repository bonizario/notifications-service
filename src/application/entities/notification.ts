import { Replace } from 'src/helpers/Replace';
import { Content } from './content';

export interface NotificationProps {
  category: string;
  content: Content;
  createdAt: Date;
  readAt?: Date | null;
  recipientId: string;
}

export class Notification {
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get category(): string {
    return this.props.category;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public set readAt(readAt: Date | undefined | null) {
    this.props.readAt = readAt;
  }

  public get readAt(): Date | undefined | null {
    return this.props.readAt;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }
}
