// Path: C:\Users\humes\Downloads\Interview master.ai\backend\microservices\event-bus\src\server.ts

import express, { Application } from 'express';
import { EventEmitter } from 'events';
import { EventPublisher } from './publishers/publisher';
import { EventConsumer } from './consumers/consumer';
import { EventTypes } from './events/eventTypes';

export const createServer = (): Application => {
    const app = express();

    // Middleware to parse incoming JSON requests
    app.use(express.json());

    // Initialize the event emitter
    const eventEmitter = new EventEmitter();

    // Initialize the publisher and consumer
    const publisher = new EventPublisher(eventEmitter);
    const consumer = new EventConsumer(eventEmitter);

    // Example: Subscribe to the USER_CREATED event
    consumer.subscribe(EventTypes.USER_CREATED, (data) => {
        console.log(`USER_CREATED event received with data:`, data);
        // Process the event data as needed
    });

    // Endpoint to publish events via HTTP
    app.post('/publish', (req, res) => {
        const { type, data } = req.body;
        if (!type || !data) {
            return res.status(400).json({ error: 'Invalid event data' });
        }

        publisher.publish({ type, data });
        return res.status(200).json({ message: 'Event published successfully' });
    });

    // Health check endpoint
    app.get('/health', (req, res) => {
        res.status(200).json({ status: 'Event bus service is running' });
    });

    return app;
};

// Start the server
const PORT = process.env.PORT || 4000;
const app = createServer();
app.listen(PORT, () => {
    console.log(`Event bus service is running on port ${PORT}`);
});
