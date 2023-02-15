interface Observer {
  update: (data: any) => void;
}

interface Subject {
  subscribe: (observer: Observer) => void;
  unsubscribe: (observer: Observer) => void;
  notify: (data: any) => void;
}

export class ConcreteObserver implements Observer {
  update(data: any) {
    console.log(`Received update with data: ${data}`);
  }
}

export class ConcreteSubject implements Subject {
  private observers: Observer[] = [];

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notify(data: any) {
    for (const observer of this.observers) {
      observer.update(data);
    }
  }
}
