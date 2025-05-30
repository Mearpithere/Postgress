# PostgreSQL Database Project

A Node.js TypeScript project for connecting to and managing a PostgreSQL database.

## Features

- Connect to PostgreSQL database using `pg` library
- Create users table with proper schema
- Insert user data with validation
- TypeScript support for type safety

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- PostgreSQL database (using Neon.tech in this project)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd postgress
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Update the database connection string in `src/index.ts` with your PostgreSQL credentials.

## Usage

1. Compile TypeScript to JavaScript:
   ```bash
   npx tsc
   ```

2. Run the application:
   ```bash
   node dist/index.js
   ```

## Project Structure

```
├── src/
│   └── index.ts          # Main application file
├── dist/                 # Compiled JavaScript files
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md            # Project documentation
```

## Database Schema

The application creates a `users` table with the following structure:

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

## Dependencies

- `pg`: PostgreSQL client for Node.js
- `@types/pg`: TypeScript definitions for pg

## License

ISC
