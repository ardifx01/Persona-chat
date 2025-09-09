### Chat with Character 🎭

Interaktif AI-powered chat app yang memungkinkan pengguna untuk bercakap dengan karakter virtual yang dipersonalisasi.
Dibangun dengan Next.js App Router, Tailwind CSS, Shadcn UI, Auth.js, Convex, dan Groq AI.

### 🚀 Tech Stack

Framework: Next.js (App Router)

Styling: Tailwind CSS

- Shadcn UI

Authentication: Auth.js

Database & Backend: Convex

AI Model: Groq AI

Deployment: Vercel

### 📂 Project Structure

```
├── app/                  # Next.js app router
│   ├── api/              # API routes
│   │   └── chat/         # Chat endpoint
│   ├── auth/             # Authentication logic (Auth.js)
│   ├── dashboard/        # User dashboard
│   └── layout.jsx        # Root layout
│
├── components/           # Reusable UI components
│   ├── ui/               # Shadcn UI components
│   └── section/          # Section-based components
│
├── convex/               # Convex backend functions
├── constant/             # Constant values (character, config, etc.)
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
├── styles/               # Global styles (Tailwind)
│
├── .env                  # Environment variables
├── next.config.mjs       # Next.js config
├── tailwind.config.mjs   # Tailwind config
└── README.md             # Project documentation

```

### ⚙️ Setup & Installation

Clone Repository

```
git clone https://github.com/username/chat-with-character.git
cd chat-with-character
```

Install Dependencies

```
npm install
```

Setup Environment Variables
Buat file .env pada root project:

```
GROQ_API_KEY=your_groq_api_key
NEXTAUTH_SECRET=your_auth_secret
NEXTAUTH_URL=http://localhost:3000
CONVEX_DEPLOYMENT=your_convex_deployment
```

Run Convex Dev

```
npx convex dev
```

Run Development Server

```
npm run dev
```

Akses project di browser:

```
http://localhost:3000
```

### 🧩 Features

🔐 Authentication (login/logout dengan Auth.js)

🎭 Chat with Characters (AI roleplay dengan Groq AI)

📊 Dashboard User (kelola profil & history chat)

🎨 Modern UI (Tailwind + Shadcn UI)

☁️ Realtime & Scalable (Convex backend)

### 📄 License

MIT License © 2025
