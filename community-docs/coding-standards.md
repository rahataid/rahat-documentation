---
id: coding-standards
title: Coding Standards
---

# Coding Standards

This repository uses [ESLint](https://github.com/eslint/eslint) to enforce [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

## General Guidelines

- Use consistent indentation (preferably 2 spaces)
- Write descriptive variable and function names
- Keep functions small and focused
- Comment your code when necessary
- Use proper error handling
- Write testable code

## JavaScript/TypeScript Guidelines

### Variables
```javascript
// Bad
var foo = 'bar';
let foo = 'bar';

// Good
const foo = 'bar';
```

### Functions
```javascript
// Bad
function doSomething() {
    // ...
}

// Good
const doSomething = () => {
    // ...
};
```

### Imports/Exports
```javascript
// Bad
const myFunction = require('./myFunction');

// Good
import { myFunction } from './myFunction';
```

## Code Quality

- Write unit tests for your code
- Maintain test coverage above 80%
- Use TypeScript for type safety
- Follow SonarQube rules for code quality
- Use proper error handling with try/catch blocks

## Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

## Documentation

- Document all public APIs
- Keep documentation up to date
- Use JSDoc comments for function documentation
- Include code examples where appropriate

## Code Review Process

1. Review for functionality
2. Review for code style
3. Review for test coverage
4. Review for documentation
