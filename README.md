# Momentum - Productivity Dashboard

Productivity dashboard optimized to help build momentum on personally identified goals. Utilizes neuroscience and psychology to help user stay motivated and accountable. Utilizes gamification to encourage interaction and repeat use. Utilizes AI to customize motivation style and provide real time feedback on progress / provide pivots.

## Tech Stack

- **Frontend**: React with TypeScript
- **UI Library**: Material-UI (MUI)
- **Backend**: AWS Amplify
- **Authentication**: AWS Amplify Auth
- **Deployment**: AWS Amplify Hosting

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- AWS Account (for deploying Amplify backend)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tallkarol/momentum.git
cd momentum
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### AWS Amplify Setup

To connect this application to AWS services:

1. Install the Amplify CLI:
```bash
npm install -g @aws-amplify/cli
```

2. Configure Amplify:
```bash
amplify configure
```

3. Initialize Amplify in the project:
```bash
amplify init
```

4. Add authentication:
```bash
amplify add auth
```

5. Push changes to AWS:
```bash
amplify push
```

## Project Structure

```
momentum/
├── amplify/              # AWS Amplify configuration
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable React components
│   ├── pages/           # Page components
│   │   ├── Landing.tsx  # Landing page
│   │   └── Dashboard.tsx # Main dashboard
│   ├── theme.ts         # Material-UI theme configuration
│   ├── aws-exports.js   # AWS Amplify configuration
│   └── App.tsx          # Main app component
├── package.json
└── README.md
```

## Features

### Phase 1 (Current)
- ✅ AWS Amplify scaffold
- ✅ Material-UI integration
- ✅ Landing page with feature highlights
- ✅ Dashboard page structure
- ✅ Authentication setup (placeholder)
- ✅ Responsive design
- ✅ React Router navigation

### Future Phases
- Goal tracking and management
- Progress visualization
- Gamification system (achievements, levels, rewards)
- AI-powered insights and motivation
- Analytics dashboard
- Social features and accountability partners

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
