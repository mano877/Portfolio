# Portfolio

Source code for my personal portfolio site, built with Next.js and deployed on Vercel.

Live site: https://portfolio-eman-fd69.vercel.app/

I'm Eman Bashir, an AI Solutions, Automation & Web Development Specialist. I usually work across the whole stack: a backend that holds up, a frontend that is clear to use, and the data and automation that connect them.

## What I do

**AI Solutions**
Retrieval-based assistants (RAG) over documents and business data, chat interfaces that stay grounded in real sources, and support flows that hand off to a person when they should.

**Automation**
Connecting tools that do not talk to each other, replacing repetitive manual steps, background jobs, scheduled tasks, and internal dashboards.

**Web Development**
Responsive business and marketing websites, and full-stack web apps with React frontends and FastAPI backends.

## Projects

These are the projects featured on the portfolio site. Each one has a longer write-up and screenshots there.

### Longlife Furnishers

A furniture retail website I customized and developed on WordPress with Elementor. Starting from an existing theme, I built it out into a working business site: product presentation, category and special-offers browsing, responsive behavior across screen sizes, a WhatsApp enquiry flow, calls to action, and payment / bank-transfer information. It was not built from scratch. The work was customization, layout, and adding the functionality the business needed.

Stack: WordPress, Elementor
Live: https://longlife.bizfatt.com/

### RestoBot (Restaurant AI Assistant)

A conversational ordering assistant for restaurants. Customers order in plain language and the system turns that into structured, billable line items, with GST invoice generation and role-based access separating staff from diners. The restaurant's own menu is used as a knowledge source through a Pinecone vector store.

Stack: FastAPI, PostgreSQL, Pinecone (RAG), JWT auth

### Dr. Aria (AI Medical Document Assistant)

An assistant for working through personal medical documents in plain language. It runs a retrieval pipeline over uploaded documents and keeps multi-conversation history per user, with features for summarizing and coming back to earlier questions later.

Stack: FastAPI, PostgreSQL, Pinecone (RAG), Groq LLM
Live: https://medical-chatbot-frontend-rpoc-git-main-eman-fd69.vercel.app/

### AI Task Management System

A task and project workspace that combines personal tasks and project-scoped tasks in one place. It has a dashboard with real productivity stats, an AI chat assistant that gets a live summary of what is overdue or due today, and a background job that sends deadline reminders. Full task lifecycle with archive, soft-delete / trash, and restore.

Stack: React, FastAPI, PostgreSQL, LangChain + Ollama, Redis, Docker

### AI Customer Care Platform

A support platform with a customer portal and an agent / admin console rendered from one role field in the JWT. The chat pipeline classifies intent and sentiment, runs the matching tool (orders, tickets, knowledge base), and escalates to a human when confidence drops or the customer asks. Analytics are computed from real list endpoints rather than a canned stats endpoint.

Stack: React, TypeScript, FastAPI, PostgreSQL, Groq LLM, JWT auth

## About this repo

The portfolio site itself is built with:

- Next.js (App Router) and React
- TypeScript
- Tailwind CSS
- Motion for animation
- Deployed on Vercel

### Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Contact

- Email: emanbashir302@gmail.com
- LinkedIn: https://www.linkedin.com/in/eman-bashir-48b9392a7/
- GitHub: https://github.com/mano877
