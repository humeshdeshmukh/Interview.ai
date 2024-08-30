// Path: event-bus/src/events/eventTypes.ts

export enum EventTypes {
    USER_CREATED = 'user:created',
    USER_UPDATED = 'user:updated',
    CHATBOT_INTERACTION = 'chatbot:interaction',
    RESUME_GENERATED = 'resume:generated',
    // Add more event types as needed
}

export interface Event {
    type: EventTypes;
    data: any; // Define a more specific type if needed
}
