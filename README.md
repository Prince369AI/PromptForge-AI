<div align="center">

  <h1>⚡ PromptForge AI</h1>
  
  <p>The ultimate AI prompt engineering platform — generate, optimize, analyze, and manage prompts for every major AI model.</p>

  <p>
    <img src="https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js" />
    <img src="https://img.shields.io/badge/TypeScript-strict-blue?style=flat-square&logo=typescript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwindcss" />
    <img src="https://img.shields.io/badge/Gemini_3.1-API-4285F4?style=flat-square&logo=google" />
    <img src="https://img.shields.io/badge/Supabase-Auth_+_DB-3ecf8e?style=flat-square&logo=supabase" />
    <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" />
  </p>

  <p>
    <a href="https://ai.studio/apps/dc7e2a4a-ff82-4d53-874c-d82116d99514">🔗 View in AI Studio</a> · 
    <a href="#features">Features</a> · 
    <a href="#stack">Tech Stack</a> · 
    <a href="#getting-started">Getting Started</a> · 
    <a href="#modules">Modules</a>
  </p>
</div>

---

## ✨ Overview

**PromptForge AI** is a production-ready SaaS platform for AI prompt creation, optimization, analysis, and collaboration. Built for creators, marketers, designers, developers, and AI professionals who need high-quality prompts — fast.

Powered by **Gemini 3.1 Pro**, **Gemini Flash-Lite**, **Nano Banana 2/Pro**, and **Veo 3**, the platform offers 13+ specialized modules covering everything from image prompt generation to video animation bridges, deep prompt analysis, and a 1,000+ prompt community library.

---

## 🚀 Features

| Module | Description |
|--------|-------------|
| 🔧 **Universal Prompt Optimizer** | Transform any rough prompt into a professional-grade version for 11 AI models |
| 🖼️ **AI Image Prompt Generator** | 18 photography styles with camera, lens, lighting & aspect ratio controls |
| 🎬 **Image-to-Video Bridge** | Convert image prompts into cinematic Veo 3 video prompts |
| 🧠 **Prompt Analyzer & Enhancer** | Quality scoring, weakness detection & deep thinking mode (Gemini 3.1 Pro) |
| 👁️ **Image-to-Prompt Generator** | Upload any image — Gemini Vision extracts a full recreation prompt |
| 🧑‍🎨 **Model & Character Generator** | 12 character archetypes with full physical & style controls |
| 📦 **Product Photography Generator** | Studio, lifestyle, e-commerce & ad prompts for 10 product categories |
| 📝 **Content Generator** | Blog, social media, TikTok scripts, YouTube Shorts & email campaigns |
| 📣 **Advertisement Copy Generator** | Conversion-focused ad copy for Facebook, IG, Google, TikTok & more |
| 📚 **Prompt Library** | 1,000+ curated prompts across 20 categories — searchable & filterable |
| ⚖️ **Prompt Comparison Tool** | Side-by-side quality scoring across 5 prompt variants |
| 🏠 **User Dashboard** | Saved prompts, collections, history & usage analytics |
| 🌐 **Community Section** | Submit, upvote, discover & share prompts with trending feeds |

---

## 🤖 Gemini AI Capabilities

| Capability | Model | Where Used |
|-----------|-------|-----------|
| Create & edit images | Nano Banana 2 | Image Prompt Generator |
| Generate 4K images | Nano Banana Pro | Image Prompt Generator (Pro tier) |
| Animate images to video | Veo 3 | Image-to-Video Bridge |
| Smart model selection | Auto (Gemini) | All modules |
| Aspect ratio control | Gemini 3.1 Pro | Image modules |
| Image analysis (Vision) | Gemini 3.1 Pro | Image-to-Prompt Generator |
| Low-latency responses | Gemini 3.1 Flash-Lite | Speed mode (all modules) |
| Extended thinking | Gemini 3.1 Pro | Prompt Analyzer — deep mode |

---

## 🛠️ Tech Stack <a name="stack"></a>

- **Framework** — Next.js 15 (App Router, Server Components)
- **Language** — TypeScript (strict mode)
- **Styling** — Tailwind CSS + shadcn/ui
- **Animation** — Framer Motion
- **Auth & Database** — Supabase (Auth + PostgreSQL with RLS)
- **AI Models** — Gemini 3.1 Pro, Gemini 3.1 Flash-Lite, Nano Banana 2/Pro, Veo 3

---

## 📦 Getting Started <a name="getting-started"></a>

**Prerequisites:** Node.js 18+

```bash
# 1. Clone the repository
git clone https://github.com/your-username/PromptForge-AI.git
cd PromptForge-AI

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Add your keys to .env.local:
# GEMINI_API_KEY=your_gemini_api_key
# NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# 4. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure
