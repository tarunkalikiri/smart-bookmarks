# Smart Bookmark App

A simple real-time bookmark manager built with Next.js and Supabase.

## 🚀 Live Demo
https://smart-bookmarks-ebon.vercel.app

## ✨ Features
- Google OAuth login
- Add bookmarks (title + URL)
- Delete bookmarks
- Private bookmarks per user
- Real-time updates across tabs
- Deployed on Vercel

## 🛠 Tech Stack
- Next.js (App Router)
- Supabase (Auth, Database, Realtime)
- Tailwind CSS
- Vercel

## 📌 How it works
Users sign in with Google.  
Each bookmark is stored with a user_id.  
Supabase Row Level Security ensures privacy.  
Realtime subscriptions update bookmarks instantly.

## ⚡ Challenges & Solutions
**OAuth issues on localhost**  
Solved by deploying to Vercel and setting correct redirect URLs.

**Realtime cleanup errors**  
Fixed useEffect cleanup function.

**Session persistence issues**  
Handled proper OAuth redirect flow.

## ▶️ Run Locally

Clone repo:

git clone https://github.com/tarunkalikiri/smart-bookmarks.git


Install:

npm install


Create `.env.local`:

NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key


Run:

npm run dev


---

## ✅ Assignment Requirements Met
- Google login only
- Private bookmarks per user
- Add/Delete bookmarks
- Real-time updates
- Deployed on Vercel
