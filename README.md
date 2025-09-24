# Frontend Quiz Application

A modern Angular-based quiz application that provides a user-friendly interface for viewing and taking quizzes from question banks. The application features a responsive design with a collapsible sidebar navigation and state management using NgRx.

## Technology Stack

- Framework: Angular 20.2.0
- State Management: NgRx Store & Effects
- Styling: SCSS
- HTTP Client: Angular HttpClient
- Routing: Angular Router
- Build Tool: Angular CLI

## Project Structure

This project follows a **monorepo architecture** with a main application and a reusable component library:

```
├── projects/
│   └── quiz-components/          # Angular Library
│       ├── src/
│       │   ├── lib/
│       │   │   ├── components/   # Reusable UI Components
│       │   │   │   ├── dashboard/
│       │   │   │   ├── header/
│       │   │   │   ├── sidebar/
│       │   │   │   └── view-qbanks/
│       │   │   ├── services/     # Shared Services
│       │   │   │   └── sidebar.service.ts
│       │   │   ├── store/        # NgRx State Management
│       │   │   │   ├── qbank.actions.ts
│       │   │   │   ├── qbank.effects.ts
│       │   │   │   ├── qbank.reducer.ts
│       │   │   │   └── qbank.selectors.ts
│       │   │   ├── models/       # TypeScript Interfaces
│       │   │   │   └── qbank.model.ts
│       │   │   └── quiz-components.ts
│       │   └── public-api.ts     # Library Exports
│       ├── ng-package.json
│       └── package.json
├── src/                          # Main Application
│   ├── app/
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   ├── app.ts
│   │   ├── app.html
│   │   └── app.scss
│   ├── main.ts
│   ├── index.html
│   └── styles.scss
├── dist/                         # Build Output
│   ├── frontend/                 # Main app build
│   └── quiz-components/          # Library build
└── angular.json
```

## Architecture Overview

### Monorepo Structure
The project is organized as a **monorepo** with two main parts:

1. **Main Application** (`src/app/`): The consuming application that uses the library
2. **Component Library** (`projects/quiz-components/`): Reusable components and services

### Component Library Architecture
The `quiz-components` library follows Angular's standalone component architecture with:

#### Components
- **Header Component** (`quiz-header`): Navigation header with sidebar toggle functionality
- **Sidebar Component** (`quiz-sidebar`): Collapsible navigation sidebar
- **Dashboard Component** (`quiz-dashboard`): Landing page with welcome image
- **View Qbanks Component** (`quiz-view-qbanks`): Displays available question banks

#### Services
- **SidebarService**: Manages sidebar state and toggle functionality

#### State Management (NgRx)
The library includes a complete NgRx implementation:

- **Actions** (`qbank.actions.ts`): Define actions for loading question banks
- **Reducer** (`qbank.reducer.ts`): Manages the state transitions
- **Selectors** (`qbank.selectors.ts`): Provide selectors for accessing state
- **Effects** (`qbank.effects.ts`): Handle side effects like HTTP requests

#### Models
- **Qbank Interface**: TypeScript interface for question bank data structure

### Main Application
The main application (`src/app/`) is a lightweight consumer that:
- Imports components from the `quiz-components` library
- Configures routing and global providers
- Manages application-level state and configuration

##  Key Features

### 1. Modular Architecture
- **Reusable Components**: Components are packaged in a separate library for reusability
- **Separation of Concerns**: Clear separation between UI components and application logic
- **Easy Maintenance**: Components can be updated independently
- **Scalable Structure**: Easy to add new components to the library

### 2. Responsive Layout
- **Collapsible Sidebar**: Toggle functionality for better space utilization
- **Flexible Grid**: Responsive design that adapts to different screen sizes
- **Modern UI**: Clean and intuitive user interface

### 3. Question Bank Management
- **Dynamic Loading**: Fetches question banks from external API
- **Loading States**: Shows loading indicators during data fetching
- **Error Handling**: Displays error messages when API calls fail
- **Status-based Actions**: Question banks can be enabled/disabled

### 4. Navigation
- **Route-based Navigation**: Clean URL structure with Angular Router
- **Active Route Highlighting**: Visual indication of current page
- **Default Redirects**: Automatic redirection to dashboard

### 5. State Management
- **Centralized State**: NgRx store for predictable state management
- **Side Effects Handling**: Effects for API calls and side effects
- **Type Safety**: Full TypeScript support with interfaces and models

## Data Models

### Qbank Interface
```typescript
interface Qbank {
  _id: string;
  id: string;
  name: string;
  category: string;
  noOfQuestions: number;
  status: boolean;
}
```

### State Interface
```typescript
interface QbankState {
  qbanks: Qbank[];
  loading: boolean;
  error: any;
}
```

##  Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the library** (if not already built)
   ```bash
   npx ng build quiz-components
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:4200`

### Available Scripts

- `npm start`: Start the development server
- `npm run build`: Build the main application for production
- `npx ng build quiz-components`: Build the component library
- `npx ng build quiz-components --watch`: Build and watch the library for changes
- `npm run watch`: Build and watch the main app for changes
- `npm test`: Run unit tests

### Library Usage

The component library can be used in other Angular projects by:

1. **Installing the library**
   ```bash
   npm install quiz-components
   ```

2. **Importing components**
   ```typescript
   import { Header, Sidebar, Dashboard, ViewQbanks } from 'quiz-components';
   ```

3. **Using in templates**
   ```html
   <quiz-header></quiz-header>
   <quiz-sidebar></quiz-sidebar>
   <quiz-dashboard></quiz-dashboard>
   <quiz-view-qbanks></quiz-view-qbanks>
   ```

##  API Integration

The application integrates with an external API for question bank data:

- **Base URL**: `https://quiz-server-39z8.onrender.com/api/qbanks`
- **Method**: GET
- **Response**: Array of Qbank objects

##  Styling

The application uses SCSS for styling with:
- **Global Styles**: Reset and base styles in `styles.scss`
- **Component Styles**: Individual SCSS files for each component
- **Responsive Design**: Mobile-first approach with flexible layouts

##  Testing

The project includes comprehensive testing setup:
- **Unit Tests**: Jasmine framework with Karma test runner
- **Component Tests**: Individual component testing
- **Coverage Reports**: Built-in code coverage reporting

##  Configuration

### Angular Configuration
- **Standalone Components**: Modern Angular architecture
- **Zoneless Change Detection**: Performance optimization
- **SCSS Support**: Built-in SCSS compilation
- **TypeScript**: Strict type checking enabled

### Build Configuration
- **Production Build**: Optimized for production deployment
- **Development Build**: Source maps and debugging enabled
- **Asset Management**: Automatic asset copying and optimization

##  Browser Support

The application supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

##  Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

##  License

This project is licensed under the MIT License - see the LICENSE file for details.

##  Known Issues

- Question bank status functionality is implemented but may need backend integration
- Error handling could be enhanced with more specific error messages
- Loading states could benefit from skeleton loaders

##  Future Enhancements

- [ ] User authentication and authorization
- [ ] Quiz taking functionality
- [ ] Progress tracking and analytics
- [ ] Offline support with service workers
- [ ] Dark mode theme
- [ ] Internationalization (i18n) support
- [ ] Advanced filtering and search for question banks

##  Support

For support and questions, please open an issue in the repository or contact the development team.

