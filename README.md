# Thimathi Dissanayake — Personal Portfolio

Production-quality, responsive personal portfolio website for **Thimathi Dissanayake**, presenting expertise as a **Software Engineer, Data Engineer, Product Designer, and AI Researcher**.

Built with modern **Next.js 15**, **TypeScript**, and **Tailwind CSS**, designed with an executive dark-first visual identity, subtle ambient lighting, electric cyan and blue accents, high-contrast typography, and an optional light-theme toggle.

---

## 🌟 Key Highlights & Features

- **Personal Brand & Positioning**: Hero section featuring Thimathi's portrait, professional title, clear value proposition, quick social shortcuts, and verified academic classification (*First-Class Honours, 72%*).
- **Multidisciplinary Architecture**:
  - **Software & Mobile Engineering**: Scalable web and cross-platform mobile solutions.
  - **Data Engineering & Analytics**: Relational and cloud data architectures (PostgreSQL, Snowflake, AWS, GCP, MySQL) with automated reporting pipelines.
  - **Multimodal AI & NLP Research**: Affective computing exploration fusing BERT linguistic transformers and CNN speech emotion recognition (*Aurevia* project).
  - **Product Design & Design Systems**: Human-centered user interface systems and interactive prototyping (*NONO AI*).
- **Professional Experience Timeline**:
  - **Data Engineer** @ CreativeX Technology (Pvt) Ltd (*March 2026 – Present*)
  - **Product Designer (Parallel Role)** @ NONO AI (*March 2025 – Present*)
  - **Intern Data Analytics Engineer** @ CreativeX Technology (Pvt) Ltd (*September 2025 – March 2026*)
  - **Full Stack Developer (Freelance)** @ E-Tech Lab Software Solutions (*August 2024 – July 2025*)
- **Featured Projects Showcase**:
  - **Baby Mine**: Maternal and early childhood support platform with pre-birth and post-birth features, technical architecture breakdown (React Native, Redux, Supabase, React Admin), and interactive detail modal.
  - **Aurevia**: Multimodal artificial intelligence framework for burnout detection and affective well-being monitoring.
- **Dedicated Academic Research Section**:
  - Full research methodology and benchmarks (BERT text NLP 78%, CNN speech emotion 83%, Multimodal fusion 85%).
  - Lead author academic output for the 7th CINEC International Research Symposium (CIRS 2026).
  - Direct links to ResearchGate publication and author profile.
  - Responsible ethical and diagnostic scope boundaries.
- **Education Section**:
  - **BSc (Hons) Computer Science (Software Engineering)** — University of Wolverhampton / CINEC Campus (*First-Class Honours, 72%*).
  - **Higher National Diploma (HND) in Software Engineering** — NIBM (*GPA: 3.42 / 4.00*).
  - **Diploma in Software Engineering (DSE)** — NIBM (*GPA: 3.74 / 4.00*).
  - Includes official vector/raster crests for University of Wolverhampton, CINEC Campus, and NIBM.
- **Direct Contact & Verification**:
  - Working `mailto:` links with one-click clipboard copy and visual feedback.
  - Working `tel:` link for direct communication.
  - Client-side message composer that launches the user's native email client directly with pre-filled content (zero server dependency).
  - Comprehensive social links (LinkedIn, GitHub, ResearchGate, Instagram, Facebook).

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict type checking)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes) (Dark theme default with seamless Light mode toggle)
- **Deployment**: Vercel & Cloudflare Pages ready

---

## 📁 Project Structure

```text
├── public/
│   ├── images/
│   │   ├── uow-logo.svg           # University of Wolverhampton official escutcheon
│   │   ├── cinec-logo.png         # CINEC Campus logo
│   │   └── nibm-logo.png          # National Institute of Business Management logo
│   └── thimathi-portrait.png      # Professional portrait of Thimathi Dissanayake
├── src/
│   ├── app/
│   │   ├── globals.css            # Dark/light theme design tokens, glassmorphism, glowing orbs
│   │   ├── icon.tsx               # Dynamic branded favicon generator (TD monogram)
│   │   ├── layout.tsx             # Root layout, SEO metadata, OpenGraph, Viewport configuration
│   │   └── page.tsx               # Main single-page portfolio layout
│   ├── components/
│   │   ├── Navbar.tsx             # Sticky responsive navigation with mobile drawer & theme switcher
│   │   ├── Footer.tsx             # Complete footer with verified links & back-to-top control
│   │   ├── ThemeProvider.tsx      # Next-themes client provider
│   │   ├── ui/
│   │   │   └── ProjectModal.tsx   # Detailed architectural modal for projects
│   │   └── sections/
│   │       ├── HeroSection.tsx    # Hero with portrait, headline, CTAs, social shortcuts
│   │       ├── AboutSection.tsx   # Narrative, core philosophy, and 4 multidisciplinary pillars
│   │       ├── ExperienceSection.tsx # Structured career journey with parallel role indicators
│   │       ├── ProjectsSection.tsx # Visual cards for Baby Mine & Aurevia
│   │       ├── ResearchSection.tsx # Aurevia deep-dive, CIRS 2026, ResearchGate links, methodology
│   │       ├── SkillsSection.tsx  # Filterable skill categories (no misleading percentage bars)
│   │       ├── EducationSection.tsx # Degree progression with official institution logos
│   │       └── ContactSection.tsx # Direct email copy, tel link, and instant email composer
│   ├── data/
│   │   └── portfolioData.ts       # Centralized TypeScript data file for all portfolio content
│   └── lib/
│       └── utils.ts               # Tailwind class merger helper
├── next.config.mjs                # Next.js build and optimization configuration
├── tailwind.config.ts             # Custom typography, colors, animations, and dark mode tokens
└── tsconfig.json                  # TypeScript compiler options and path aliases
```

---

## ✏️ How to Update Portfolio Content

All personal profile information, work experiences, projects, research data, technical skills, and links are kept in a single centralized file:

👉 **`src/data/portfolioData.ts`**

To customize:
1. **Bio & Social Links**: Update `portfolioData.profile` or `portfolioData.socials`.
2. **Projects**: Add or edit items in `portfolioData.projects`. The project showcase is completely data-driven.
3. **Experience**: Edit `portfolioData.experiences`. The parallel role indicator (`isParallel: true`) can be toggled per role.
4. **Skills**: Modify `portfolioData.skillsGrouped` to add or refine skills without touching component JSX.
5. **Research**: Update `portfolioData.research` with new publications or dataset benchmarks.
6. **Education**: Update `portfolioData.education` entries.

---

## 🚀 Getting Started

### 1. Installation

Install project dependencies:

```bash
npm install
```

### 2. Local Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Verification

Run strict TypeScript type-checking:

```bash
npx tsc --noEmit
```

Build the production bundle:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

---

## 🌐 Deployment to Vercel

1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your repository. Next.js will be detected automatically.
4. Click **Deploy**. Vercel will build and host your portfolio with instant global edge caching and automatic SSL.

---

## 🔒 Content Accuracy & Privacy Verification

- **Guardian Projects**: Strictly omitted. Zero references to Guardian HRMS/HIMS/Lab/Biometrics exist in the codebase.
- **No Fabrications**: No invented metrics, client testimonials, awards, or fake logos.
- **Accurate Parallel Roles**: The Product Designer role at NONO AI is explicitly tagged as a parallel role alongside the Data Engineer position at CreativeX Technology.
- **Affective AI Scope**: Clear distinction between emotion classification and clinical burnout detection, highlighting Aurevia's research and experimental nature without claiming medical certification.
