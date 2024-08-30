// Path: event-bus/src/consumers/consumer.ts

import { EventEmitter } from 'events';
import { EventTypes } from '../events/eventTypes';

export class EventConsumer {
    private eventEmitter: EventEmitter;

    constructor(eventEmitter: EventEmitter) {
        this.eventEmitter = eventEmitter;
    }

    subscribe(eventType: EventTypes, callback: (data: any) => void): void {
        this.eventEmitter.on(eventType, callback);
    }
}

// Example usage
const eventEmitter = new EventEmitter();
const consumer = new EventConsumer(eventEmitter);

// Subscribing to an event
consumer.subscribe(EventTypes.USER_CREATED, (data) => {
    console.log(`User created with data:`, data);
});
