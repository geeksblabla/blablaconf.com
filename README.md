This project is based on [Next.js](https://nextjs.org/) with the new `app` directory structure. It also uses [Tailwind CSS](https://tailwindcss.com/) for styling.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Setup

1. Create a Firebase app with a Firestore database.

2. Go to Firebase project settings > Service Account and generate a new private key. Download the JSON file and copy the following environment variables: 👇

```
#.env.development.local
NEXT_PUBLIC_HOST=
PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```

3. Create a GitHub authentication application and add `https://yourwebsite.com/api/github-auth` as the redirect URL. Add your GitHub client ID and the secret key to your environment variables.

```
NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID=
GITHUB_OAUTH_CLIENT_SECRET=

```

4. Configure ticket generation by updating the `app/ticket/og/route.tsx` file.
