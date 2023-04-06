A repo demonstrating that Vite has issues with re-exporting from `@prisma/client`.

To demonstrate the bug, in `App.tsx` we import `UserRole` through a barrel export of `@prisma/client` from `bug.ts`.

This produces the error: `"Uncaught SyntaxError: The requested module '/src/bug.ts' does not provide an export named 'UserRole'"`

## Setup
`yarn install`

## Running
`yarn dev`
## `bug.ts`
```ts
export * from '@prisma/client';
```

## `App.tsx`
```tsx
import { UserRole } from './bug' // FAILS
import { UserRole } from '@prisma/client' // Works fine
```