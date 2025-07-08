# Contributing to Velonus 🤝

Thank you for your interest in contributing to Velonus! We welcome contributions from developers of all skill levels. This document provides guidelines for contributing to the project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Pull Request Process](#pull-request-process)
- [Code Standards](#code-standards)
- [Testing Guidelines](#testing-guidelines)
- [Documentation](#documentation)

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before contributing.

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+
- Git
- Basic knowledge of TypeScript/React

### Development Setup

1. **Fork the repository**
   ```bash
   # Fork on GitHub, then clone your fork
   git clone https://github.com/yourusername/velonus.git
   cd velonus
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development servers**
   ```bash
   npm run dev
   ```

4. **Verify setup**
   - Frontend: http://localhost:3000
   - API: http://localhost:3001 (when backend is implemented)

## Making Changes

### Branch Naming Convention

Use descriptive branch names following this pattern:
- `feature/add-chat-system`
- `fix/zoom-controls-keyboard-shortcuts`
- `docs/update-api-documentation`
- `refactor/improve-editor-performance`

### Commit Message Format

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```bash
feat(editor): add zoom controls with keyboard shortcuts
fix(ui): resolve cursor positioning in collaborative mode
docs(readme): update installation instructions
refactor(store): simplify editor state management
```

## Pull Request Process

### Before Creating a PR

1. **Ensure tests pass**
   ```bash
   npm run test
   npm run type-check
   npm run lint
   ```

2. **Update documentation**
   - Update README.md if adding new features
   - Add JSDoc comments for new functions/components
   - Update type definitions

3. **Test your changes**
   - Test in development environment
   - Verify responsive design
   - Check accessibility compliance

### Creating a Pull Request

1. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create PR on GitHub**
   - Use the PR template
   - Link related issues
   - Add screenshots for UI changes
   - Mark as draft if work in progress

3. **PR Title Format**
   ```
   feat(editor): add real-time cursor synchronization
   ```

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix (non-breaking change that fixes an issue)
- [ ] New feature (non-breaking change that adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## How Has This Been Tested?
- [ ] Unit tests
- [ ] Integration tests
- [ ] Manual testing

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
```

## Code Standards

### TypeScript

- Use **strict mode** TypeScript
- Prefer **explicit types** over `any`
- Use **interfaces** for object shapes
- Use **type unions** for string literals

```typescript
// ✅ Good
interface UserSession {
  userId: string;
  role: 'driver' | 'navigator' | 'observer' | 'ai';
  joinedAt: Date;
}

// ❌ Avoid
const user: any = { id: 1, role: 'driver' };
```

### React Components

- Use **functional components** with hooks
- Prefer **named exports**
- Use **TypeScript interfaces** for props
- Follow **single responsibility principle**

```typescript
// ✅ Good
interface EditorProps {
  sessionId: string;
  userRole: SessionRole;
  onContentChange: (content: string) => void;
}

export const Editor: React.FC<EditorProps> = ({ sessionId, userRole, onContentChange }) => {
  // Component logic
};

// ❌ Avoid
export default function Editor(props: any) {
  // Component logic
}
```

### CSS/Styling

- Use **Tailwind CSS** utility classes
- Create **custom utilities** for repeated patterns
- Follow **mobile-first** responsive design
- Use **semantic class names** for complex components

```typescript
// ✅ Good
<button className="px-4 py-2 bg-editor-accent text-white rounded-xl hover:scale-105 transition-all">
  Save
</button>

// ❌ Avoid
<button style={{ padding: '8px 16px', backgroundColor: '#1f6feb' }}>
  Save
</button>
```

### File Organization

```
packages/editor/src/
├── components/          # React components
│   ├── Editor/         # Feature-based folders
│   └── UI/            # Reusable UI components
├── hooks/              # Custom React hooks
├── stores/             # Zustand stores
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── index.ts            # Package exports
```

## Testing Guidelines

### Unit Tests

- Test **component behavior**, not implementation
- Use **React Testing Library**
- Mock **external dependencies**
- Aim for **80%+ coverage**

```typescript
// ✅ Good
test('should zoom in when zoom in button is clicked', () => {
  render(<ZoomControls />);
  const zoomInButton = screen.getByTitle('Zoom In');
  
  fireEvent.click(zoomInButton);
  
  expect(screen.getByText(/110%/)).toBeInTheDocument();
});
```

### Integration Tests

- Test **user workflows**
- Use **Playwright** for E2E tests
- Test **collaborative features**
- Include **accessibility tests**

## Documentation

### Code Documentation

- Use **JSDoc** for functions and components
- Include **usage examples**
- Document **complex algorithms**
- Keep comments **up to date**

```typescript
/**
 * Handles real-time collaboration between multiple users
 * @param sessionId - Unique identifier for the collaboration session
 * @param userId - Current user's identifier
 * @param onUserJoin - Callback when a new user joins the session
 * @returns Cleanup function to disconnect from session
 */
export function useCollaboration(
  sessionId: string,
  userId: string,
  onUserJoin: (user: User) => void
): () => void {
  // Implementation
}
```

### README Updates

When adding new features:
1. Update feature list in README
2. Add to "What's Been Built" section
3. Update roadmap if needed
4. Include usage examples

## Getting Help

### Where to Ask Questions

1. **GitHub Discussions** - General questions and ideas
2. **GitHub Issues** - Bug reports and feature requests
3. **Discord** - Real-time chat with maintainers (coming soon)

### Reporting Bugs

Use the bug report template:
1. Describe the issue
2. Steps to reproduce
3. Expected vs actual behavior
4. Environment details
5. Screenshots if applicable

### Suggesting Features

Use the feature request template:
1. Problem description
2. Proposed solution
3. Alternative solutions considered
4. Additional context

## Recognition

Contributors will be recognized in:
- README contributors section
- Release notes
- Annual contributor showcase

## Development Workflow

### Working on Issues

1. **Check existing issues** before creating new ones
2. **Comment on issues** you want to work on
3. **Wait for assignment** before starting work
4. **Ask for help** if you get stuck

### Release Process

1. Features merged to `main` branch
2. Automated testing and quality checks
3. Version bumping with semantic versioning
4. Release notes generation
5. Deployment to staging/production

## Project Structure

### Monorepo Organization

```
Velonus/
├── apps/
│   ├── web/           # Next.js frontend
│   └── api/           # Node.js backend
├── packages/
│   ├── shared/        # Common types
│   ├── editor/        # Editor components
│   ├── ui/           # UI components
│   └── utils/        # Shared utilities
├── docs/             # Documentation
└── tools/            # Build tools
```

### Key Technologies

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Editor**: Monaco Editor
- **Real-time**: Yjs CRDT
- **State**: Zustand
- **Testing**: Jest, React Testing Library, Playwright
- **Build**: Turbo, TypeScript

## Thank You! 🙏

Your contributions help make Velonus better for developers worldwide. We appreciate your time and effort in improving the platform.

For more detailed information, check out our [README](README.md) and join our community discussions! 