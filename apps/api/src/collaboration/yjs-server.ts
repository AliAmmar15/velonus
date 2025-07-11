import { Server } from 'http';
import { WebSocketServer } from 'ws';
// @ts-ignore - y-websocket doesn't have proper TypeScript definitions
import { setupWSConnection } from 'y-websocket/bin/utils';

export function setupYjsServer(server: Server) {
  // Create WebSocket server on a different path for Yjs
  const wss = new WebSocketServer({ 
    server,
    path: '/collaboration'
  });

  wss.on('connection', (ws, req) => {
    const url = new URL(req.url!, `http://${req.headers.host}`);
    const sessionId = url.searchParams.get('sessionId');
    
    if (!sessionId) {
      ws.close(1000, 'Session ID required');
      return;
    }

    // Setup Yjs WebSocket connection with the session ID as document name
    setupWSConnection(ws, req, {
      docName: sessionId,
      gc: true // Enable garbage collection
    });

    console.log(`Yjs connection established for session: ${sessionId}`);
  });

  wss.on('error', (error) => {
    console.error('Yjs WebSocket server error:', error);
  });

  console.log('Yjs collaboration server initialized on /collaboration');
} 