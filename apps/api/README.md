# Velonus API Server

The backend API server for Velonus collaborative coding platform.

## Features

- **Express.js** server with TypeScript
- **Socket.io** for real-time WebSocket communication
- **Yjs** collaboration server for CRDT document synchronization
- **Clerk** authentication integration (planned)
- **Health monitoring** and error handling
- **CORS** and security middleware

## Getting Started

### Prerequisites

- Node.js 18+
- npm 8+

### Installation

```bash
npm install
```

### Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
PORT=8000
CLIENT_URL=http://localhost:3000
CLERK_SECRET_KEY=your_clerk_secret_key
```

### Development

```bash
# Start development server
npm run dev

# Build project
npm run build

# Start production server
npm start
```

## API Endpoints

### Health Check
- `GET /health` - Server health status

### Authentication (Mock)
- `GET /api/auth/me` - Get current user profile
- `GET /api/test` - Basic API test

### Sessions (Planned)
- `GET /api/sessions` - List user sessions
- `POST /api/sessions` - Create new session
- `GET /api/sessions/:id` - Get session details

## Real-time Features

### Socket.io Events
- `join-session` - Join a coding session
- `leave-session` - Leave a session
- `cursor-move` - Cursor position updates
- `selection-change` - Text selection updates

### Yjs Collaboration
- WebSocket endpoint: `/collaboration?sessionId=<session_id>`
- Real-time document synchronization using CRDT

## Project Structure

```
src/
├── index.ts              # Main server file
├── middleware/           # Express middleware
│   └── auth.ts          # Authentication middleware
├── websocket/           # Socket.io handlers
│   └── index.ts         # WebSocket event handlers
└── collaboration/       # Yjs collaboration
    └── yjs-server.ts    # Yjs WebSocket server
```

## Development Status

### ✅ Completed
- Basic Express server setup
- Socket.io integration
- Yjs collaboration server
- Health monitoring
- TypeScript configuration
- Build pipeline

### 🚧 In Progress
- Clerk authentication integration
- Session management
- User management
- Workspace management

### 📋 Planned
- Database integration (PostgreSQL)
- File management
- Project templates
- AI integration
- Role-based permissions
- Session recording

## Contributing

1. Follow TypeScript best practices
2. Add tests for new features
3. Update documentation
4. Use conventional commits

## License

MIT 