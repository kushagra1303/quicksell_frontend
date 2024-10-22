// No need for 'export interface', just use regular objects and structures in JS

// Example object structure for a Ticket
const ticket = {
    id: '',          // String
    title: '',       // String
    tag: [],         // Array of Strings
    userId: '',      // String
    status: '',      // String
    priority: 0      // Number
};

// Example object structure for a User
const user = {
    id: '',          // String
    name: '',        // String
    available: false // Boolean
};

// Example for Col (Collection of tickets)
const col = {
    col: [ticket]    // Array of Ticket objects
};

// Example for UserIdToData (Map of userId to User data)
const userIdToData = {
    userData: {
        'user1': user,  // User mapped by userId (String)
        'user2': user   // More users can be added
    }
};
