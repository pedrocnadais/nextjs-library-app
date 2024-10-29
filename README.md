```markdown
# Next.js Library App

## Overview
The Next.js Library App is a platform that displays a collection of books with features like sorting, pagination, and search. It supports swipe and keyboard-based navigation for ease of use on both mobile and desktop.

## Features
- Book display with sorting and pagination
- Modal view with swipe and keyboard navigation
- Responsive design for mobile and desktop
- Integrated backend using PostgreSQL for book data storage
```

## Setup

### 1. Clone the Repository
```bash
git clone https://github.com/pedrocnadais/nextjs-library-app.git
cd nextjs-library-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

## Environment Variables
Ensure you have `.env` files in the main and backend directories. Below are the variables you need to define:

### Main `.env`
```plaintext
NEXT_PUBLIC_API_URL=https://your-api-url.com
```

### Backend `.env`
```plaintext
DB_NAME=yourDatabaseName
DB_USER=yourUsername
DB_PASSWORD=yourPassword
DB_HOST=yourDatabaseHost
DB_PORT=yourDatabasePort
```

## Usage
1. **Sorting and Filtering**: Sort books by title, author, and addition date.
2. **Navigation**: Use keyboard arrows or swipe on mobile to navigate between books in the modal.
3. **Responsive Design**: Adjusts layout based on screen size, optimized for both web and mobile.

## Deployment

### Backend (Render)
1. Create a new web service on Render, link the Git repository, and set the environment variables.
2. Deploy and ensure the backend is live.

### Frontend (Vercel)
1. Deploy the frontend on Vercel, connect the Git repository, and set `NEXT_PUBLIC_API_URL` to your backend URL.
2. Confirm deployment.

## Testing
- **Unit Tests**: Use Jest and React Testing Library for component tests.
- **Integration Tests**: End-to-end tests with Cypress for workflows like pagination and sorting.

## License
This project is licensed under the MIT License.