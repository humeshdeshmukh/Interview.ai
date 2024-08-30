// Path: C:\Users\humes\Downloads\Interview master.ai\backend\microservices\event-bus\src\index.ts

import { EventEmitter } from 'events';
import { EventPublisher } from './publishers/publisher';
import { EventConsumer } from './consumers/consumer';
import { EventTypes } from './events/eventTypes';

// Initialize the event emitter
const eventEmitter = new EventEmitter();

// Initialize the publisher and consumer
const publisher = new EventPublisher(eventEmitter);
const consumer = new EventConsumer(eventEmitter);

// Example: Set up a consumer for the USER_CREATED event
consumer.subscribe(EventTypes.USER_CREATED, (data) => {
    console.log(`Processing USER_CREATED event with data:`, data);
    // Add your logic to handle the event here
});

// Example: Publish a USER_CREATED event
publisher.publish({
    type: EventTypes.USER_CREATED,
    data: {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
    },
});

// Additional event subscriptions and logic can be added here

console.log('Event bus service is running...');
