# Tailwind Editor

A modern, minimalistic, and customizable rich-text editor built with React, Tailwind CSS, and Novel.

## Features
- **Slash Commands** for quick text editing and formatting
- **Light/Dark Mode Support** with Tailwind CSS theming
- **Custom Command Suggestions** for enhanced text editing
- **State Management** to handle content updates dynamically

## Technologies Used
- **React** – Component-based UI
- **Tailwind CSS** – Utility-first styling
- **Novel** – Advanced text editor with extension support

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/tailwind-editor.git
   cd tailwind-editor
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## Project Structure
```
.
├── components/
│   ├── editor/
│   │   ├── Editor.js
│   ├── createSuggestionMenu.js
├── pages/
│   ├── index.js
├── styles/
│   ├── globals.css
├── tailwind.config.js
├── package.json
├── README.md
```

## Usage
Modify `createSuggestionMenu.js` to customize the editor’s commands and suggestions.

## License
This project is licensed under the MIT License.
