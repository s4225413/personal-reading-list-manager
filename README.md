# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## How to run shell command
Go to the exact folder of the application:
npm install

### if still some packages are missing then, otherwise not
npm install @supabase/supabase-js
npm install react-router-dom

npm run dev

## How to setup Supabase Client

Step 1:
Go to https://app.supabase.com
Click “New Project”
Choose project name, password, and region
Click “Create Project”

Step 2:
In Supabase Dashboard → Authentication → Providers
Enable Email/Password
(Optional) Disable “Confirm email” to allow instant login

Step 3: Create the books Table
Go to SQL Editor and paste:
create table if not exists public.books (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  author text not null,
  status text not null,
  note text,
  user_id uuid references auth.users(id) on delete cascade,
  created_at timestamp with time zone default now()
);

Step 4: Enable RLS (Row Level Security)
alter table public.books enable row level security;

Step 5: Add RLS Policy (Only see own books)
create policy "Users can access their own books"
on public.books
for all
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

Step 6:
Get Your API Keys
Go to Settings → API
Copy: Project URL and anon public key

Step 7:
Configure in Code (src/config.js)
export const SUPABASE_URL = 'https://your-project.supabase.co'; (Your own URL)
export const SUPABASE_KEY = 'your-anon-public-key'; (Your own anon key)
