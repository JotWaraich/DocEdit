# DocEdit

DocEdit is a modern document editing web application built with Next.js, Firebase, and Editor.js. It allows users to create, edit, and save rich-text documents with an intuitive and flexible user interface.

## Features
- User authentication with Google and GitHub using Firebase Authentication
- Rich-text editing with Editor.js
- Save and retrieve documents from Firebase Firestore
- LocalStorage backup for offline access
- Minimalist and responsive UI with Tailwind CSS

## Tech Stack
- **Next.js**: For server-side rendering and frontend framework
- **Firebase**: Authentication and Firestore database
- **Editor.js**: Rich-text editor for structured content
- **Tailwind CSS**: Styling framework for modern UI design

## Installation

### 1. Clone the repository:
```sh
git clone https://github.com/your-username/docedit.git
cd docedit
```

### 2. Install dependencies:
```sh
npm install
```

### 3. Set up Firebase:
- Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
- Enable Authentication for Google and GitHub.
- Create a Firestore database.
- Obtain Firebase configuration and set up environment variables.

### 4. Create a `.env.local` file in the root directory and add:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 5. Run the development server:
```sh
npm run dev
```

## Usage
- Open `http://localhost:3000/` in your browser.
- Sign in with Google or GitHub.
- Create or edit documents using the rich-text editor.
- Click "Save Data" to store your content in Firestore and LocalStorage.
- Sign out when you're done.

## Project Structure
```
/docedit
│── components/      # Reusable UI components
│── firebase/        # Firebase authentication and Firestore functions
│── pages/           # Next.js pages (Home, Auth, etc.)
│── public/          # Static assets
│── styles/          # Global styles
│── .env.local       # Environment variables (not included in repo)
│── package.json     # Project dependencies
│── README.md        # Documentation
```
