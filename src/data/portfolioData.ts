export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  isParallel?: boolean;
  parallelNote?: string;
  location?: string;
  website?: string;
  linkedin?: string;
  summary: string;
  responsibilities: string[];
  skills: string[];
}

export interface ProjectArchitecture {
  frontend?: string[];
  backend?: string[];
  database?: string[];
  aiMl?: string[];
  devops?: string[];
}

export interface ProjectFeatureGroup {
  groupName: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  featured: boolean;
  externalLink?: string;
  githubLink?: string;
  paperLink?: string;
  badge?: string;
  architecture?: ProjectArchitecture;
  featureGroups?: ProjectFeatureGroup[];
  businessModel?: string;
  notes?: string;
  image?: string;
}

export interface ResearchInterest {
  title: string;
  description: string;
  icon: string;
}

export interface ResearchPublication {
  id: string;
  title: string;
  category: string;
  publicationVenue: string;
  date: string;
  authors: string[];
  description: string;
  keyContributions: string[];
  methodology: {
    textAnalysis: string;
    speechAnalysis: string;
    fusion: string;
    datasets: string[];
    metrics: { [key: string]: string };
  };
  paperUrl: string;
  profileUrl: string;
  disclaimer: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: { name: string; tag?: string }[];
}

export interface EducationEntry {
  id: string;
  qualification: string;
  degreeType: string;
  institution: string;
  deliveryInstitution?: string;
  period?: string;
  awardDate?: string;
  classification?: string;
  mark?: string;
  gpa?: string;
  logo: string;
  secondaryLogo?: string;
  description: string;
  highlights: string[];
}

export const portfolioData = {
  profile: {
    name: "Thimathi Dissanayake",
    preferredName: "Thimathi",
    title: "Software Engineer · Data Engineer · Product Designer · AI Researcher",
    tagline: "Engineering intelligent solutions. Designing meaningful experiences.",
    intro:
      "I'm Thimathi Dissanayake, a technology professional working across software engineering, data engineering, product design, and artificial intelligence research. I enjoy building practical digital solutions that combine reliable engineering, useful data, and thoughtful user experiences.",
    location: "Sri Lanka",
    availability: "Open to High-Impact Engineering & Research Collaborations",
    portrait: "/thimathi-portrait.png",
    logo: "/thimathi-logo.png",
    emails: [
      { email: "manaharatd@gmail.com", label: "Primary Email", isPrimary: true },
      { email: "thimathid@hotmail.com", label: "Alternative Email", isPrimary: false },
    ],
    phone: {
      display: "+94 71 953 1023",
      tel: "+94719531023",
    },
    metaTitle: "Thimathi Dissanayake | Software Engineer, Data Engineer & AI Researcher",
    metaDescription:
      "Explore the portfolio, projects, professional experience, and AI research of Thimathi Dissanayake, a technology professional working across software engineering, data engineering, product design, and artificial intelligence.",
  },

  socials: [
    {
      name: "LinkedIn",
      url: "https://lk.linkedin.com/in/thimathi",
      icon: "Linkedin",
      label: "Connect on LinkedIn",
    },
    {
      name: "GitHub",
      url: "https://github.com/thimathi",
      icon: "Github",
      label: "View GitHub Profile",
    },
    {
      name: "ResearchGate",
      url: "https://www.researchgate.net/profile/Thimathi-Dissanayake",
      icon: "BookOpen",
      label: "ResearchGate Profile",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/thimathiii?utm_source=qr",
      icon: "Instagram",
      label: "Instagram Profile",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/thimathiii/?locale=ca_ES",
      icon: "Facebook",
      label: "Facebook Profile",
    },
  ],

  aboutPillars: [
    {
      title: "Software & Mobile Engineering",
      description:
        "Building resilient, scalable web and mobile applications with React, Next.js, React Native, and type-safe systems.",
      icon: "Code2",
    },
    {
      title: "Data Engineering & Analytics",
      description:
        "Designing automated data extraction, ETL pipelines, schema validation, and statistical modeling across cloud repositories.",
      icon: "Database",
    },
    {
      title: "Multimodal AI & NLP Research",
      description:
        "Investigating affective computing, BERT-based linguistic modeling, CNN speech feature extraction, and multimodal fusion.",
      icon: "Cpu",
    },
    {
      title: "Product Design & UX Systems",
      description:
        "Crafting intuitive design systems, interactive prototypes, and user flows that bridge real human needs with robust technical architecture.",
      icon: "Layout",
    },
  ],

  experiences: [
    {
      id: "exp-1",
      role: "Data Engineer",
      company: "CreativeX Technology (Pvt) Ltd",
      period: "March 2026 – Present",
      isParallel: false,
      location: "Sri Lanka (Full-Time Professional Employment)",
      website: "https://creativexlab.online/",
      summary:
        "Spearheading enterprise relational and cloud data management, statistical modeling, and automated reporting pipelines for core business workflows.",
      responsibilities: [
        "Relational & Cloud Data Management: Extracts, validates, and models enterprise datasets across PostgreSQL, MySQL, Snowflake, GCP, and AWS data stores to maintain structural integrity and analytical accuracy.",
        "Statistical Modeling & Anomaly Detection: Applies regression models and exploratory statistical techniques to large business datasets, identifying operational patterns, data shifts, and performance trends.",
        "Automated Data Pipelines & Reporting: Designs and optimizes automated queries, summaries, and data reporting workflows to assist senior technical decision-makers with evidence-based assessments.",
        "Cross-Functional Requirement Mapping: Partners with system architects and engineering teams to translate high-level reporting requirements into data transformation schemas and analytical models.",
      ],
      skills: ["PostgreSQL", "Snowflake", "AWS", "GCP", "MySQL", "Data Pipelines", "Statistical Modeling", "ETL"],
    },
    {
      id: "exp-2",
      role: "Product Designer",
      company: "NONO AI",
      period: "March 2025 – Present",
      isParallel: true,
      parallelNote: "Parallel Role · Product & Design Systems",
      location: "Sri Lanka",
      linkedin: "https://lk.linkedin.com/company/nono-ai",
      summary:
        "Leading user experience architecture, design systems, and interface prototyping for AI-driven products in parallel with data engineering responsibilities.",
      responsibilities: [
        "User-Centered Interface Architecture: Conceptualizes and iterates wireframes, interactive flows, and production-ready UI designs tailored for AI-assisted digital experiences.",
        "Design System Development: Standardizes modular component libraries, typography tokens, and visual patterns to guarantee cross-platform consistency.",
        "Cross-Disciplinary Bridge: Collaborates closely with frontend developers and AI engineers to translate complex model interactions into seamless, accessible user touchpoints.",
      ],
      skills: ["Product Design", "UI/UX Architecture", "Figma", "Design Systems", "Prototyping", "User Research"],
    },
    {
      id: "exp-3",
      role: "Intern Data Analytics Engineer",
      company: "CreativeX Technology (Pvt) Ltd",
      period: "September 2025 – March 2026",
      isParallel: false,
      location: "Sri Lanka (Full-Time Internship)",
      website: "https://creativexlab.online/",
      summary:
        "Supported enterprise data ingestion workflows, database cleansing, field-level verification, and recurring analytical reporting.",
      responsibilities: [
        "Supported end-to-end data processing workflows, encompassing data ingestion, schema cleansing, and field verification across internal databases.",
        "Cleaned and normalized complex data records, executing structured validation checks in accordance with established data governance protocols.",
        "Maintained recurrent documentation, logs, and query schedules for internal diagnostic reporting and operational reviews.",
        "Assisted senior analysts with exploratory data discovery, query refinement, and summarizing preliminary evaluation metrics.",
      ],
      skills: ["Data Ingestion", "Schema Cleansing", "SQL Verification", "Diagnostic Reporting", "Database Normalization"],
    },
    {
      id: "exp-4",
      role: "Full Stack Developer (Freelance)",
      company: "E-Tech Lab Software Solutions",
      period: "August 2024 – July 2025",
      isParallel: false,
      location: "Freelance",
      summary:
        "Delivered full-stack software solutions, custom web applications, responsive user interfaces, and backend RESTful integrations for private clients.",
      responsibilities: [
        "Architected and deployed responsive full-stack web applications prioritizing modularity, clean code practices, and fast load speeds.",
        "Implemented RESTful APIs and connected relational databases to power business logic and interactive dashboards.",
        "Coordinated directly with project stakeholders to gather technical specifications and execute rapid sprint milestones under agile principles.",
      ],
      skills: ["Full Stack Development", "React", "Node.js", "REST APIs", "SQL", "Tailwind CSS"],
    },
  ],

  projects: [
    {
      id: "baby-mine",
      title: "Baby Mine",
      subtitle: "Comprehensive Maternal & Early Childhood Support Platform",
      category: "Parenting Technology · Mobile Application · Healthcare Support",
      description:
        "A parenting support platform designed to help families manage pregnancy, newborn care, and early childhood through health tracking, smart reminders, support services, and curated entertainment.",
      longDescription:
        "Built with React Native, powered by Supabase, and guided by Agile methodology, Baby Mine aims to provide a connected experience for parents from pregnancy through the first four years of a child's life. The platform bridges daily health observations with smart reminders, emergency access, and vetted family services.",
      technologies: ["React Native", "Redux", "Supabase", "React.js", "Material UI", "Chart.js", "React Native SVG"],
      featured: true,
      badge: "Featured Product",
      image: "/baby_mine.png",
      externalLink: "https://lnkd.in/p/grE_hC9A",
      architecture: {
        frontend: ["React Native (Cross-Platform iOS & Android)", "Redux Toolkit for Centralized State", "React Native SVG for Custom Visualizations"],
        backend: ["Supabase Backend Infrastructure", "Supabase PostgreSQL Database", "Row-Level Security & Role Authentication", "Realtime Subscriptions & Event Triggers"],
        devops: ["Admin Panel built with React.js & Material UI", "Chart.js for Administrative Analytics", "Push Notification Pipelines via Supabase Functions"],
      },
      featureGroups: [
        {
          groupName: "Key Capabilities Before Birth (Pregnancy Journey)",
          items: [
            "Pregnancy guidance, gestational milestone tracking, and wellness support.",
            "Health monitoring with automated reminders for scheduled clinics and prescriptions.",
            "Instant-access emergency contacts and rapid hospital liaison directory.",
            "Integrated maternity product marketplace.",
          ],
        },
        {
          groupName: "Key Capabilities After Birth (0–4 Years Child Care)",
          items: [
            "Baby BMI and pediatric developmental growth metrics tracking.",
            "Vaccination tracking schedule with automated reminder alerts.",
            "Virtual mother-support services and nanny supervision tools.",
            "Interactive learning games, educational entertainment, and cognitive exercises.",
            "Curated baby product marketplace.",
          ],
        },
      ],
      businessModel: "Freemium model with premium feature upgrades; potential partnerships with hospitals, pediatric clinics, and maternal care brands.",
      notes: "Project specifications and intended capabilities as defined in technical design documentation.",
    },
    {
      id: "aurevia",
      title: "Aurevia",
      subtitle: "Multimodal AI Burnout Detection & Emotional Well-Being Framework",
      category: "Artificial Intelligence · Multimodal Machine Learning · Research",
      description:
        "A multimodal artificial intelligence framework exploring burnout-related indicators and emotional well-being monitoring by combining textual sentiment analysis and acoustic speech signals.",
      longDescription:
        "Aurevia addresses the challenge of workplace burnout and affective tracking through a unified multimodal pipeline. By fusing BERT-based NLP token representations with CNN acoustic spectrogram features, the framework captures complementary affective signals across communicative modalities.",
      technologies: ["Python", "FastAPI", "PyTorch", "BERT (NLP)", "CNN (Speech)", "Supabase", "PostgreSQL", "React.js", "Multimodal Fusion"],
      featured: true,
      badge: "Academic Research Project",
      image: "/aurevia.png",
      externalLink: "https://www.researchgate.net/publication/408064387_Aurevia_A_Multimodal_Artificial_Intelligence_Framework_for_Burnout_Detection_and_Emotional_Well-Being_Monitoring_Using_Textual_and_Speech-Based_Emotional_Analysis",
      paperLink: "https://www.researchgate.net/publication/408064387_Aurevia_A_Multimodal_Artificial_Intelligence_Framework_for_Burnout_Detection_and_Emotional_Well-Being_Monitoring_Using_Textual_and_Speech-Based_Emotional_Analysis",
      architecture: {
        frontend: ["React.js Dashboard for Realtime Inference & Longitudinal Score Tracking"],
        backend: ["FastAPI High-Performance Inference Microservice", "Supabase PostgreSQL Database for Longitudinal Affective Tracking"],
        aiMl: [
          "BERT-based Transformer Pipeline for Text Sentiment & Semantic Nuance (78% classification accuracy)",
          "CNN Architecture for Speech Emotion Recognition on Acoustic Spectrograms (83% classification accuracy)",
          "Multimodal Late Fusion Mechanism achieving 85% multimodal fusion accuracy across evaluated benchmarks",
        ],
      },
      featureGroups: [
        {
          groupName: "Methodology & Curation",
          items: [
            "Dataset exploration on validated benchmarks including RAVDESS, TESS, and GoEmotions.",
            "Preprocessing pipelines for raw acoustic normalization, spectral transformation, and textual tokenization.",
            "Preparation as lead author academic output for the 7th CINEC International Research Symposium (CIRS 2026).",
          ],
        },
      ],
      notes: "Affective computing research framework. Emotional analysis and burnout detection are related but distinct tasks; experimental prototype, not a clinically validated diagnostic device.",
    },
  ],

  research: {
    title: "Aurevia: A Multimodal Artificial Intelligence Framework for Burnout Detection and Emotional Well-Being Monitoring Using Textual and Speech-Based Emotional Analysis",
    leadAuthor: "Thimathi Dissanayake",
    affiliation: "CINEC Campus | CIRS 2026",
    status: "Lead Author · Academic output prepared for the 7th CINEC International Research Symposium (CIRS 2026)",
    overview:
      "Aurevia explores a multimodal artificial intelligence approach to burnout-related analysis and emotional well-being monitoring by combining deep contextual information from textual statements with acoustic representations from speech emotion analysis.",
    publicationUrl:
      "https://www.researchgate.net/publication/408064387_Aurevia_A_Multimodal_Artificial_Intelligence_Framework_for_Burnout_Detection_and_Emotional_Well-Being_Monitoring_Using_Textual_and_Speech-Based_Emotional_Analysis",
    researchGateProfile: "https://www.researchgate.net/profile/Thimathi-Dissanayake",
    interests: [
      {
        title: "Multimodal Artificial Intelligence",
        description: "Fusing asynchronous data streams (text, audio, temporal signals) into cohesive latent representation spaces.",
        icon: "Layers",
      },
      {
        title: "Natural Language Processing",
        description: "Transformer-based linguistic modeling (BERT architectures) for contextual sentiment, stress indicators, and semantic nuances.",
        icon: "MessageSquare",
      },
      {
        title: "Speech & Emotion Analysis",
        description: "Extracting acoustic prosody, spectrograms, and pitch contours via Convolutional Neural Networks for affective signal recognition.",
        icon: "Mic",
      },
      {
        title: "Human-Centered AI & Well-Being",
        description: "Designing responsible, non-invasive technology interventions that prioritize user privacy and ethical boundary enforcement.",
        icon: "HeartPulse",
      },
    ],
    methodology: {
      textProcessing: "BERT-based transformer architecture fine-tuned on nuanced sentiment and emotional corpora, capturing semantic context and linguistic stress cues (78% experimental classification accuracy).",
      speechProcessing: "Deep Convolutional Neural Network (CNN) trained on mel-spectrogram representations from speech signals to classify acoustic prosody and tonal variance (83% experimental classification accuracy).",
      multimodalFusion: "Intermediate and late fusion strategies combining normalized textual embeddings and acoustic feature vectors, yielding an integrated 85% multimodal classification accuracy.",
      stack: ["Python", "FastAPI", "PyTorch", "Supabase PostgreSQL", "React.js"],
      datasets: ["RAVDESS (Audio)", "TESS (Audio)", "GoEmotions (Text)"],
    },
    disclaimer:
      "Important Note on Scope: Emotional analysis and burnout detection are related but distinct tasks; emotional classification alone is not presented as clinical proof of burnout. Aurevia is an affective computing research project, and results represent provisional experimental benchmarks rather than a validated diagnostic medical tool.",
  },

  skillsGrouped: [
    {
      category: "Programming & Core Engineering",
      icon: "Code",
      skills: [
        { name: "Python" },
        { name: "TypeScript" },
        { name: "JavaScript" },
        { name: "SQL" },
        { name: "C#" },
        { name: "C++" },
        { name: "Java" },
        { name: "PHP" },
        { name: "HTML5 / CSS3" },
      ],
    },
    {
      category: "Frontend & Mobile Development",
      icon: "Smartphone",
      skills: [
        { name: "React" },
        { name: "React Native" },
        { name: "Next.js" },
        { name: "Redux / Redux Toolkit" },
        { name: "Tailwind CSS" },
        { name: "Material UI" },
        { name: "Responsive Architecture" },
        { name: "Design System Implementation" },
      ],
    },
    {
      category: "Backend, APIs & Microservices",
      icon: "Server",
      skills: [
        { name: "FastAPI" },
        { name: "Node.js" },
        { name: "ASP.NET Core / MVC" },
        { name: "Spring Boot" },
        { name: "RESTful API Design" },
        { name: "Microservices Architecture" },
      ],
    },
    {
      category: "Data Engineering & Databases",
      icon: "Database",
      skills: [
        { name: "PostgreSQL" },
        { name: "Snowflake" },
        { name: "Microsoft SQL Server" },
        { name: "MySQL" },
        { name: "Oracle Database" },
        { name: "Supabase" },
        { name: "Data Pipelines & ETL" },
        { name: "Data Cleansing & Modeling" },
        { name: "Advanced SQL Transformation" },
      ],
    },
    {
      category: "AI, Machine Learning & NLP",
      icon: "Brain",
      skills: [
        { name: "Machine Learning" },
        { name: "Natural Language Processing (NLP)" },
        { name: "BERT Transformer Models" },
        { name: "Convolutional Neural Networks (CNN)" },
        { name: "Speech Emotion Recognition (SER)" },
        { name: "Multimodal Feature Fusion" },
        { name: "Model Evaluation Pipelines" },
      ],
    },
    {
      category: "Cloud, Tools & Methodologies",
      icon: "Wrench",
      skills: [
        { name: "Amazon Web Services (AWS)" },
        { name: "Google Cloud Platform (GCP)" },
        { name: "Docker" },
        { name: "Firebase" },
        { name: "Git / GitHub" },
        { name: "Visual Studio / VS Code" },
        { name: "Agile Development" },
      ],
    },
  ],

  education: [
    {
      id: "edu-1",
      qualification: "Bachelor of Science with Honours in Computer Science (Software Engineering)",
      degreeType: "Undergraduate Terminal Qualification",
      institution: "University of Wolverhampton",
      deliveryInstitution: "CINEC Campus, Sri Lanka",
      awardDate: "1 October 2026",
      classification: "First-Class Honours",
      mark: "Average: 72%",
      logo: "/images/uow-logo.png",
      secondaryLogo: "/images/cinec-logo.png",
      description:
        "Primary terminal undergraduate qualification achieved through a progressive software engineering degree pathway. Delivered in partnership with CINEC Campus.",
      highlights: [
        "First-Class Honours classification with an overall average mark of 72%",
        "Specialized in Software Engineering, advanced systems design, and applied computing",
        "Lead author research paper developed for CIRS 2026",
      ],
    },
    {
      id: "edu-2",
      qualification: "Higher National Diploma (HND) in Software Engineering",
      degreeType: "Undergraduate Articulated Qualification Pathway",
      institution: "National Institute of Business Management (NIBM)",
      period: "May 2024 – July 2025",
      gpa: "GPA: 3.42 / 4.00",
      logo: "/images/nibm-logo.png",
      description:
        "Direct progression stage establishing advanced software engineering principles, algorithms, distributed architecture, and database design leading into direct degree articulation.",
      highlights: [
        "Cumulative GPA of 3.42 / 4.00",
        "Rigorous training in software development lifecycle, OOP, and data modeling",
      ],
    },
    {
      id: "edu-3",
      qualification: "Diploma in Software Engineering (DSE)",
      degreeType: "Foundation Computing Diploma Program",
      institution: "National Institute of Business Management (NIBM)",
      period: "April 2023 – April 2024",
      gpa: "GPA: 3.74 / 4.00",
      logo: "/images/nibm-logo.png",
      description:
        "Foundational computer science program establishing core programming concepts, relational schema construction, and algorithms.",
      highlights: [
        "High-distinction academic performance with a cumulative GPA of 3.74 / 4.00",
        "Foundation in algorithms, data structures, and web technologies",
      ],
    },
  ],
};
