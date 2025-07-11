import { Server } from 'socket.io';

export function setupWebSocketHandlers(io: Server) {
  io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    // Join session room
    socket.on('join-session', (sessionId: string, userId: string) => {
      socket.join(sessionId);
      socket.to(sessionId).emit('user-joined', { userId, socketId: socket.id });
      console.log(`User ${userId} joined session ${sessionId}`);
    });

    // Leave session room
    socket.on('leave-session', (sessionId: string, userId: string) => {
      socket.leave(sessionId);
      socket.to(sessionId).emit('user-left', { userId, socketId: socket.id });
      console.log(`User ${userId} left session ${sessionId}`);
    });

    // Handle cursor movement
    socket.on('cursor-move', (data: { sessionId: string; userId: string; position: any }) => {
      socket.to(data.sessionId).emit('cursor-update', {
        userId: data.userId,
        position: data.position,
        socketId: socket.id
      });
    });

    // Handle text selection
    socket.on('selection-change', (data: { sessionId: string; userId: string; selection: any }) => {
      socket.to(data.sessionId).emit('selection-update', {
        userId: data.userId,
        selection: data.selection,
        socketId: socket.id
      });
    });

    // Handle role changes
    socket.on('role-change', (data: { sessionId: string; userId: string; newRole: string }) => {
      socket.to(data.sessionId).emit('role-updated', {
        userId: data.userId,
        newRole: data.newRole
      });
    });

    // Handle session events
    socket.on('session-event', (data: { sessionId: string; event: any }) => {
      socket.to(data.sessionId).emit('session-event', data.event);
    });

    // Handle disconnect
    socket.on('disconnect', () => {
      console.log(`User disconnected: ${socket.id}`);
      // Broadcast to all rooms that this user disconnected
      socket.broadcast.emit('user-disconnected', { socketId: socket.id });
    });

    // Handle error
    socket.on('error', (error) => {
      console.error('Socket error:', error);
    });
  });
} 