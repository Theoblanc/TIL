interface Message {
  type: string;
  data: any;
}

export class Dispatcher {
  private handlers: { [key: string]: ((message: Message) => void)[] } = {};

  public register(
    messageType: string,
    handler: (message: Message) => void
  ): void {
    if (!(messageType in this.handlers)) {
      this.handlers[messageType] = [];
    }
    this.handlers[messageType].push(handler);
  }

  public dispatch(message: Message) {
    const handlers = this.handlers[message.type];
    if (handlers) {
      for (const handler of handlers) {
        handler(message);
      }
    }
  }
}

export class Producer {
  private dispatcher: Dispatcher;

  constructor(dispatcher: Dispatcher) {
    this.dispatcher = dispatcher;
  }

  public produce(message: Message) {
    this.dispatcher.dispatch(message);
  }
}

export class Consumer {
  handle(message: Message) {
    console.log(`Received message: ${JSON.stringify(message)}`);
  }
}

// Example usage:
const dispatcher = new Dispatcher();
const consumer = new Consumer();

dispatcher.register("message", consumer.handle);

const producer = new Producer(dispatcher);
producer.produce({ type: "message", data: "Hello, world!" });
