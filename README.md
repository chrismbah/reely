# Reely!

A video reels page for Toastd that mimics Instagram’s scrolling experience. The page features smooth vertical scrolling, auto-playing videos (with pause when off-screen), product tagging, and social interactions like "likes" and "shares". Built with Next.js and Tailwind CSS.

[View Live Demo](https://reely-eight.vercel.app/reels)

## Overview

Toastd Reels is a modern, responsive video reels page designed to offer an Instagram-like experience. Videos automatically play when visible in the viewport and pause when scrolled out of view. Users can interact with videos through like, share, and product tag features, making it a dynamic and engaging interface.

## Features
1. Vertical Scrolling Layout:

    * Videos are arranged in a full-screen vertical feed.
    * Uses CSS scroll snap for smooth transitions.

2. Auto-play and Pause:

    * Videos auto-play when at least 60% visible and pause/reset when scrolled out.
    * Implemented with the Intersection Observer API.

3. Video Controls:

    * Play/Pause on tap.
    * Mute/Unmute control.
    * Global mute state ensures consistency across videos.

4. Social Interactions:

    * Like button with dynamic like count.
    * Share functionality to multiple social media via a modal with smooth Framer Motion animations.

5. Product Tagging:

    * Display product tags overlaying videos.
    * Clicking tags navigates to the corresponding product page.

6. Responsive Design:

    * Optimized for mobile, tablet, and desktop.
    * Built with Tailwind CSS for responsive, utility-first styling.

7. Optimized Assets:

    * Uses Next.js’ `<Image />` component for optimized image delivery.

## Tech Stack
* Framework: Next.js (App Router)
* Styling: Tailwind CSS
* Animations: Framer Motion
* Icons: React Icons
* Data: Dummy data from a custom data file

Deployment: [Vercel](https://reely-eight.vercel.app/reels)

## Project Structure

```
.
├── app/                   # Next.js App Router pages
│   ├── reels/             # Dynamic route for individual reels
│       └── page.tsx           # Redirects to a default reel or renders feed
├── components/            # Reusable components (ReelItem, ShareModal, SideBar, BottomNav, etc.)
        └── icons/         # Custom Instagram Like Icons 
├── data/                  # Dummy reel data (reelsData)
├── types/                  # Data types
├── public/                # Static assets (favicon, images, etc.)
├── styles/                # Global styles (Tailwind configuration)
├── next.config.js         # Next.js configuration (including external image domains)
└── README.md              # This documentation file
```

## Getting Started

### Prerequisites
* Node.js (version 14 or higher)
* npm or yarn

### Installation
1. Clone the repository:

```
git clone https://github.com/yourusername/toastd-reels.git

cd toastd-reels
```
### Install dependencies:

```
npm install
```
or

```
yarn install
```

### Running Locally
To start the development server:

```
npm run dev
```
or

```
yarn dev
```

Open http://localhost:3000 in your browser to view the app.

## Deployment
This project is deployed on [Vercel](https://vercel.com). To deploy your own version:

1. Push your code to your Git repository.
2. Connect your repository to your deployment platform.
3. The platform will automatically build and deploy your application.

For detailed deployment instructions, refer to the Next.js deployment documentation.

### Design Choices
#### User Experience:
The interface mimics Instagram Reels to provide an intuitive, immersive, and engaging experience. Videos fill the viewport, and interactions are designed to be minimal and distraction-free.

#### Performance:

1. Autoplay Logic: Intersection Observer API ensures videos play only when in view.
2. Image Optimization: Next.js ```<Image />``` component improves LCP and reduces bandwidth.
3. Global Mute State: Ensures a consistent audio experience across the reel feed.
4. Modularity and Flexibility:
Components are built to be reusable, making it easier to integrate real API data in the future.

#### Animations:
Framer Motion is used to animate modals (e.g., product tags and share modal) for a smooth, modern UI.

#### Known Issues & Future Improvements

**Autoplay with Sound:**
Due to browser policies, videos must start muted. Users must manually unmute if they wish to hear audio.

#### Future Improvements
**API Integration:**
Replace dummy data with live API data for dynamic content updates.

**Enhanced Social Interactions:**
Implement additional interactions (comments, advanced share options, etc.).

**Accessibility Enhancements:**
Add ARIA labels, improve keyboard navigation, and further optimize for accessibility.

**Analytics:**
Integrate tracking for user engagement and interactions.

## Contact
For questions or further information, please reach out at mbahchris46@gmail.com.
