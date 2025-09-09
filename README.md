# ALX Listing App

## Project Overview

The **ALX Listing App** is a simplified Airbnb clone that displays a responsive property listing page. This project was developed as **Milestone 1** of the ALX Listing App project.

The main goal of this milestone was to **scaffold the project**, implement **TypeScript**, configure **TailwindCSS**, and create reusable components for future development.

This project uses:

- **Next.js (Pages Router)** for server-rendered React pages
- **TypeScript** for type safety and reusable interfaces
- **TailwindCSS** for styling and responsive design
- **ESLint** for code quality and linting

---

## Folder Structure

alx-listing-app/
components/
common/
Card.tsx # Reusable Card component for property listings
Button.tsx # Reusable Button component for future actions
interfaces/
index.ts # TypeScript interfaces for component props
constants/
index.ts # Placeholder data for properties
pages/
index.tsx # Home page displaying the property cards
public/
assets/ # Images used in the project
Beach-house.jpg
cabin.jpg
images-1.jpg
styles/
globals.css # TailwindCSS imports and custom styles
README.md # Project documentation.................................

---

## Features

- **Reusable Components**:

  - `Card` component displays property title, image, and description
  - `Button` component ready for future actions

- **Dynamic Rendering**:

  - Uses **placeholder data** stored in `constants/index.ts` to render property cards

- **Responsive Design**:

  - TailwindCSS grid layout ensures:
    - 1 column on small screens
    - 2 columns on medium screens
    - 3 columns on large screens

- **Type Safety**:

  - All components use **TypeScript interfaces**

- **Clean Project Structure**:
  - Next.js scaffolded with ESLint configured and TailwindCSS fully integrated

---

## Installation & Running Locally

### Prerequisites

- Node.js v16+
- npm (or yarn) installed

### Steps

1. **Clone the repository**:

```bash
git clone <your-repo-url>
Navigate into the project folder:

cd alx-listing-app


Install dependencies:

npm install


Run the development server:

npm run dev
```

All property images are stored in public/assets/

Current placeholder images:

Beach-house.jpg
cabin.jpg
images-1.jpg

Placeholder data is in constants/index.ts for easy updates.

Notes

Components are modular and reusable for future milestones

TailwindCSS is configured minimally but can be extended

TypeScript interfaces enforce type safety across components

Author

Mohamed
