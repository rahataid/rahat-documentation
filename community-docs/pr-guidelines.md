---
id: pr-guidelines
title: PR Guidelines
---

# Pull Request Guidelines

This document outlines the process and best practices for submitting pull requests to the Rahat project.

## Before Creating a Pull Request

1. Make sure there's a GitHub issue discussing the feature/bug you're working on
2. Update your local main branch
3. Create a new branch for your changes
4. Write clear, concise commit messages

## PR Requirements

Your pull request should:

- Reference the issue it's addressing
- Include a clear description of the changes
- Update relevant documentation
- Add/update tests as needed
- Follow our coding standards
- Pass all CI checks

## PR Description Template

Please use this template when creating your PR:

```markdown
## Description
Brief description of the changes

## Related Issue
Fixes #(issue)

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Code refactoring
- [ ] Other (please describe)

## Testing
Describe the tests you've added/updated

## Checklist
- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
```

## Review Process

1. Maintainers will review your PR
2. Address any requested changes
3. Once approved, your PR will be merged

## After Merge

1. Delete your working branch
2. Update your local main branch
