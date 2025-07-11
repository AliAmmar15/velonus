import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const server = createServer(app);

// Setup Socket.io with CORS
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  }
});

// Middleware
app.use(helmet());
app.use(compression());
app.use(morgan('combined'));
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:3000",
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Basic API endpoints
app.get('/api/test', (req, res) => {
  res.json({ message: 'Velonus API is working!' });
});

// Mock user endpoint
app.get('/api/auth/me', (req, res) => {
  res.json({
    user: {
      id: 'user_123',
      email: 'test@example.com',
      name: 'Test User',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  });
});

// Mock sessions endpoint
app.get('/api/sessions', (req, res) => {
  res.json({
    sessions: [
      {
        id: 'session_123',
        name: 'React Components',
        workspaceId: 'workspace_123',
        isActive: true,
        participants: [],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
  });
});

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log(`🔌 User connected: ${socket.id}`);

  socket.on('join-session', (sessionId: string) => {
    socket.join(sessionId);
    socket.to(sessionId).emit('user-joined', { socketId: socket.id });
    console.log(`User ${socket.id} joined session ${sessionId}`);
  });

  socket.on('disconnect', () => {
    console.log(`🔌 User disconnected: ${socket.id}`);
  });
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err);
  
  if (err.status) {
    return res.status(err.status).json({
      error: err.message,
      status: err.status
    });
  }
  
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.originalUrl
  });
});

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`🚀 Velonus API Server running on port ${PORT}`);
  console.log(`📱 Health check: http://localhost:${PORT}/health`);
  console.log(`🔗 WebSocket server ready for connections`);
  console.log(`🤝 Real-time collaboration initialized`);
}); 