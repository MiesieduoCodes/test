# MedTech - Medical Institution Website

A fullstack web application for a medical institution built with Next.js, Firebase, and TypeScript.

## Features

- 🔐 **Authentication System**: User registration and login with Firebase Authentication
- 📅 **Appointment Booking**: Patients can book appointments with doctors
- 👤 **User Dashboard**: Personalized dashboard showing appointment statistics and upcoming appointments
- 🏥 **Admin Dashboard**: Admin panel for managing all appointments and patient records
- 📱 **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- 🎨 **Modern UI**: Clean and professional design with smooth animations

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **Icons**: Lucide React
- **Date Handling**: date-fns

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Firebase project set up

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd MedTech
```

2. Install dependencies:
```bash
npm install
```

3. Set up Firebase:
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication (Email/Password)
   - Create a Firestore database
   - Copy your Firebase configuration

4. Create environment file:
```bash
cp .env.example .env.local
```

5. Add your Firebase configuration to `.env.local`:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

6. Set up Firestore Security Rules:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /appointments/{appointmentId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

7. Run the development server:
```bash
npm run dev
```

8. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
MedTech/
├── app/                    # Next.js app directory
│   ├── admin/             # Admin dashboard
│   ├── appointments/      # Appointment booking page
│   ├── dashboard/         # User dashboard
│   ├── login/             # Login page
│   ├── signup/            # Signup page
│   ├── services/          # Services page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navbar.tsx         # Navigation bar
│   └── Footer.tsx         # Footer component
├── lib/                   # Utility functions
│   ├── firebase.ts        # Firebase configuration
│   ├── auth.ts            # Authentication functions
│   └── db.ts              # Firestore database functions
└── public/                # Static assets
```

## Features Overview

### User Features
- **Home Page**: Welcome page with service overview
- **Services**: Detailed list of medical services offered
- **Appointments**: Book and manage appointments
- **Dashboard**: View appointment statistics and upcoming appointments
- **About**: Learn about the medical institution
- **Contact**: Contact form and information

### Admin Features
- **Admin Dashboard**: View all appointments
- **Status Management**: Update appointment status (pending, confirmed, cancelled, completed)
- **Filtering**: Filter appointments by status

## Firebase Setup

1. **Authentication**:
   - Go to Firebase Console > Authentication
   - Enable "Email/Password" sign-in method

2. **Firestore Database**:
   - Go to Firebase Console > Firestore Database
   - Create database in production mode
   - Set up security rules (see above)

3. **Storage** (optional):
   - Go to Firebase Console > Storage
   - Enable Storage if you plan to upload files

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Environment Variables

Make sure to set all required environment variables in your deployment platform:

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

This project is open source and available under the MIT License.

## Support

For support, email info@medtech.com or create an issue in the repository.


# test
# test
