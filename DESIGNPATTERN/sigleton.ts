class Singleton {
  "use strict";
  private static instance: Singleton; // Private static variable to store the single instance of the Singleton

  private constructor() {
    /* Private constructor to prevent direct instantiation */
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public someMethod() {
    /* Public method that can be called on the Singleton instance */
  }
}

// Usage
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // Output: true
