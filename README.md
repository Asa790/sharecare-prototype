# ShareCare

ShareCare is a mobile application prototype designed for digital volunteering and social donations. Built with React Native and Expo, this front-end prototype provides an accessible, community-driven interface connecting volunteers and donors with verified social initiatives.

---

## Live Prototype

- **Live Web App**: [Deploy via Vercel]
- **Interactive Simulator**: Run directly on browser or mobile via Expo Snack.

---

## Features

- **Home Screen**:
  - Search bar with filter controls and quick action shortcuts.
  - Featured emergency and spotlight hero banner.
  - Category filters: Education, Environment, Health, and Disaster Relief.
  - Interactive horizontal campaign lists for **Donasi Terdekat** and **Kegiatan Volunteer**.
- **Interactive Event Detail Screen**:
  - Full campaign stories, targets, progress bars, and participant metrics.
  - Transparent organizer verification details and location information.
  - Action buttons (_Donasi_ / _Daftar_).
- **Search Screen**:
  - Query inputs, category filter pills, and recent search history tracking.
- **Notification Screen**:
  - Updates on social activities, incoming donation progress, and volunteer schedules.
- **Profile Screen**:
  - User profile with achievement badges and care points progress.
  - Digital wallet summary (_Dompet Kebaikan_) and certificate shortcuts.

---

## Design System

The application uses a custom design system optimized for accessibility and clarity:

- **Primary / Background (Soft Ivory)**: `#FFFFFD`
- **Secondary (Bright Yellow)**: `#FFEA2B`
- **Text / Dark (Black)**: `#070602`
- **Accent (Warm Orange)**: `#FF8C42`
- **Sub-Accent (Muted Teal Green)**: `#79C1AC`
- **Typography**: Google Poppins (`400`, `500`, `600`, `700`)

---

## Tech Stack

- **Framework**: React Native (Expo SDK 57)
- **Navigation**: React Navigation (Native Stack & Bottom Tabs)
- **Icons**: Expo Vector Icons (Ionicons)
- **Typography**: `@expo-google-fonts/poppins`
- **Styling**: React Native StyleSheet

---

## How to Deploy to Vercel (One-Click)

This repository includes a preconfigured `vercel.json` file for automatic deployment:

1. Push this repository to GitHub.
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Import your GitHub repository (`Sharecare-app`).
4. Keep the default settings:
   - **Framework Preset**: Other
   - **Build Command**: `npx expo export --platform web` (automatically detected from `vercel.json`)
   - **Output Directory**: `dist` (automatically detected from `vercel.json`)
5. Click **Deploy**. Your app will be live with an HTTPS URL that anyone can open in their browser without installing anything.

---

## Local Development

To run the project locally on your machine or physical device:

1. Clone the repository:

   ```bash
   git clone https://github.com/<your-username>/Sharecare-app.git
   cd Sharecare-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the Expo development server:

   ```bash
   npx expo start
   ```

4. Run on a specific target:
   - Press `w` to open in your web browser.
   - Press `a` to open in Android Emulator.
   - Scan the QR code with **Expo Go** (Android) or **Camera** (iOS) to run on your phone.

---

## License

This project is open-source and available under the MIT License.
