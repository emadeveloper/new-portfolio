# Portfolio Workflow

This project is developed spec by spec.

## Delivery Flow

1. Define or update a spec in `specs/`.
2. Implement only that feature/spec.
3. Run the verification flow:
   - `npm run build`
   - visual review in browser
   - responsive sanity check
   - performance sanity check
4. If the spec is correct and optimized, create a conventional commit.
5. Push only after the local verification passes.

## Commands

- `npm run dev`: start local development
- `npm run build`: production build
- `npm run verify`: required validation step before commit/push

## Project Shape

- `src/App.jsx`: page assembly
- `src/components/`: reusable UI pieces
- `src/content/`: portfolio copy and section data
- `specs/`: feature specs and verification checklist
