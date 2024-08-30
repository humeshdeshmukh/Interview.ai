// Path: event-bus/src/publishers/publisher.ts

import { Event, EventTypes } from '../events/eventTypes';
import { EventEmitter } from 'events';

export class EventPublisher {
    private eventEmitter: EventEmitter;

    constructor(eventEmitter: EventEmitter) {
        this.eventEmitter = eventEmitter;
    }

    publish(event: Event): void {
        console.log(`Publishing event: ${event.type}`);
        this.eventEmitter.emit(event.type, event.data);
    }
}

// Example usage
const eventEmitter = new EventEmitter();
const publisher = new EventPublisher(eventEmitter);

// Publishing an event
publisher.publish({ type: EventTypes.USER_CREATED, data: { id: 1, name: 'John Doe' } });
