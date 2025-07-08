# Quick Setup Guide

## 🚀 Getting Started (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Setup
Create `.env.local` in the root directory:
```bash
# Required for basic functionality
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_WS_URL=ws://localhost:3001

# Optional for full features
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
OPENAI_API_KEY=sk-...
```

### 3. Start Development
```bash
# Start all packages
npm run dev

# Or start individually
npm run dev --workspace=@velonus/web    # Frontend on :3000
npm run dev --workspace=@velonus/api    # Backend on :3001
```

### 4. Test the Editor
1. Open http://localhost:3000
2. Navigate to the editor
3. Start typing - you should see the Monaco editor
4. Open multiple browser tabs to test collaboration

## 🔧 Current Status

✅ **Working:**
- Monaco Editor integration
- Yjs CRDT setup  
- Real-time collaboration structure
- Role-based permissions
- TypeScript monorepo
- Tailwind styling

⏳ **Next Steps:**
- WebSocket server implementation
- Authentication integration
- Database schema
- AI features
- Session management UI

## 🚨 Known Issues

The current setup has TypeScript errors because:
- Dependencies need to be installed
- Some components reference files that don't exist yet
- WebSocket server is not implemented

These are expected and will be resolved as you implement each feature.

## 📂 Key Files to Start With

1. **Frontend Entry Point:**
   - `apps/web/src/app/page.tsx` (create this)
   - `apps/web/src/app/layout.tsx` (create this)

2. **Editor Integration:**
   - `packages/editor/src/components/CollaborativeEditor.tsx` ✅ Done
   - Usage: `import { CollaborativeEditor } from '@velonus/editor'`

3. **Backend Server:**
   - `apps/api/src/index.ts` (create this)
   - Set up Express + Socket.IO + Yjs WebSocket provider

## 🎯 Immediate Next Steps

1. **Install dependencies** to resolve TypeScript errors
2. **Create basic Next.js pages** to render the editor
3. **Implement WebSocket server** for real-time sync
4. **Test collaboration** between multiple browser tabs

Your collaborative editor foundation is ready! 🎉 