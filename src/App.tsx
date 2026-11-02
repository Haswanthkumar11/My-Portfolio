import React, { useState, useEffect } from 'react';
import {
  Cpu,
  Layers,
  Database,
  GitBranch,
  ShieldCheck,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Copy,
  Check,
  Sparkles,
  ArrowRight,
  Code2,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  Award,
  GraduationCap,
  Briefcase,
  ChevronRight,
  Menu,
  X,
  Server,
  Phone
} from 'lucide-react';

// --- DATA STRUCTURES (SIMPLE, HONEST, HUMAN) ---
const PORTFOLIO_DATA = {
  personal: {
    name: "D S V Haswanth Kumar",
    title: "Full-Stack Developer | AI & Python Developer",
    email: "haswanthk517@gmail.com",
    phone: "+91 8310557227",
    github: "https://github.com/Haswanthkumar11",
    linkedin: "https://www.linkedin.com/in/haswanth-kumar-8803a5275/",
    headline: "Hi, I'm Haswanth. I build web apps, backend services, and practical AI tools.",
    summary:
      "I'm an Integrated M.Tech student at VIT-AP and a full-stack developer. I like building reliable web applications with React, Python, FastAPI, and Node.js, and integrating AI APIs to solve real, everyday problems."
  },
  skills: [
    {
      category: "Programming & Backend",
      icon: Server,
      color: "from-blue-500/20 to-indigo-500/20 border-blue-500/30",
      description: "Writing clean, dependable backend APIs and business logic.",
      items: [
        { name: "Python", detail: "FastAPI, script automation, AST parsing, and testing" },
        { name: "FastAPI", detail: "RESTful APIs with Pydantic schemas and async endpoints" },
        { name: "Node.js & Express", detail: "Backend services, routing, and data handling" },
        { name: "REST APIs & JWT", detail: "Secure endpoints with token authentication and role checks" },
        { name: "Git & Diff Analysis", detail: "Inspecting commits and tracking code changes" }
      ]
    },
    {
      category: "Frontend Development",
      icon: Code2,
      color: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
      description: "Building responsive, user-friendly interfaces.",
      items: [
        { name: "React.js", detail: "Component architecture, hooks, and clean state handling" },
        { name: "JavaScript (ES6+)", detail: "Async/await, DOM interactions, and modern syntax" },
        { name: "Tailwind CSS", detail: "Responsive layouts and clean styling" },
        { name: "HTML5 & CSS3", detail: "Semantic markup and responsive design" }
      ]
    },
    {
      category: "AI & LLM Tools",
      icon: Sparkles,
      color: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
      description: "Integrating modern AI capabilities into practical applications.",
      items: [
        { name: "Gemini API", detail: "Multimodal image analysis and structured text generation" },
        { name: "Prompt Engineering", detail: "Writing clear, structured prompts for consistent JSON outputs" },
        { name: "RAG & Document Search", detail: "Chunking text and retrieving relevant context for queries" },
        { name: "ChromaDB", detail: "Storing and searching document embeddings locally" }
      ]
    },
    {
      category: "Databases & Tools",
      icon: Database,
      color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
      description: "Data storage, testing, and deployment workflows.",
      items: [
        { name: "PostgreSQL & Supabase", detail: "Relational tables, foreign keys, and role permissions" },
        { name: "MongoDB & MySQL", detail: "Document collections and relational database queries" },
        { name: "Docker", detail: "Containerizing services for reproducible environments" },
        { name: "Pytest", detail: "Automated unit and integration test suites" },
        { name: "Vercel & Render", detail: "Deploying frontend clients and containerized backends" }
      ]
    }
  ],
  projects: [
    {
      id: "self-healing-docs",
      title: "Self-Healing Docs",
      subtitle: "Automated tool that keeps docstrings updated when code changes",
      badge: "Python & Git Tool",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      tech: ["Python", "Gemini API", "Python AST", "Git", "Pytest", "CLI"],
      repo: "https://github.com/Haswanthkumar11/self-healing-docs",
      overview:
        "A Python tool that watches your Git commits, checks your Python code for changes in function signatures or arguments, and automatically suggests docstring updates using the Gemini API so your documentation never gets outdated.",
      problem:
        "When code changes quickly, function docstrings and documentation are often forgotten, leading to out-of-date docs and confusion for other developers.",
      solution:
        "I used Python's AST (Abstract Syntax Tree) module to compare code changes before and after a commit. When a function or parameter changes, the tool prompts Gemini to suggest updated docstrings, giving developers a reviewable diff before anything is saved.",
      architecture: [
        "1. Git Diff Check: Finds modified Python files from recent commits or staged changes.",
        "2. AST Inspection: Compares old and new AST trees to find changes in function names, arguments, and return types.",
        "3. Gemini Suggestion: Prompts Gemini to write a clean docstring update matching the new code signature.",
        "4. Reviewable Patch: Shows the developer the suggested changes in the CLI for review before applying."
      ],
      highlights: [
        "Uses Python's built-in AST parser to reliably detect actual code signature changes.",
        "Developer-friendly workflow that suggests changes as reviewable diffs rather than blindly overwriting files.",
        "Verified with automated test cases covering various Python function and syntax patterns."
      ]
    },
    {
      id: "rescuelens",
      title: "RescueLens",
      subtitle: "Emergency incident reporting web application",
      badge: "Full-Stack App",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      tech: ["React.js", "FastAPI", "Gemini API", "Supabase", "PostgreSQL", "Tailwind CSS"],
      repo: "https://github.com/Haswanthkumar11/RescueLensAI",
      overview:
        "A full-stack emergency response and incident reporting application. Responders and users can upload photos of an incident, and Gemini analyzes the image to quickly provide a summary of the hazard and suggested response actions.",
      problem:
        "During emergencies, dispatchers often get overwhelmed with vague or conflicting verbal reports and lack visual information to prioritize resources effectively.",
      solution:
        "Built a responsive React web app backed by FastAPI and Supabase. Users can upload incident photos, which are sent to Gemini to estimate hazard severity and suggest initial safety steps, stored in PostgreSQL with role-based access.",
      architecture: [
        "1. Image Upload: React frontend allows uploading photos from the scene.",
        "2. FastAPI Backend: Validates data, handles authentication, and sends images to Gemini.",
        "3. Gemini Vision Analysis: Assesses the photo for hazards and returns an estimated severity rating.",
        "4. Supabase PostgreSQL: Stores incident records, locations, and user roles.",
        "5. Deployment: Frontend hosted on Vercel; FastAPI backend containerized on Render."
      ],
      highlights: [
        "Provides quick hazard summaries and recommended response actions from incident photos.",
        "Role-based access control (RBAC) ensuring dispatchers and responders see appropriate information.",
        "Full-stack architecture with a responsive React frontend and asynchronous FastAPI backend."
      ]
    },
    {
      id: "agra",
      title: "Air-Gap RAG (AGRA)",
      subtitle: "Local document search and question answering system",
      badge: "Document Q&A",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
      tech: ["Python", "FastAPI", "ChromaDB", "RAG", "JWT Auth", "PostgreSQL"],
      repo: "https://github.com/Haswanthkumar11/Air-gap",
      overview:
        "A document search tool that helps users query technical documentation locally. It splits documents into chunks, indexes them in ChromaDB, and uses a FastAPI backend with JWT authentication so users can find relevant answers quickly.",
      problem:
        "Finding specific information across long technical PDFs or manuals is slow, and many teams prefer keeping document queries local and private.",
      solution:
        "Built a retrieval pipeline that chunks documents, creates vector indexes using ChromaDB, and retrieves the most relevant paragraphs to answer questions, wrapped in an authenticated FastAPI backend.",
      architecture: [
        "1. Document Processing: Reads and splits technical PDF or text files into manageable text chunks.",
        "2. Vector Indexing: Stores and indexes chunks in ChromaDB for fast semantic search.",
        "3. Query Matching: Finds the top matching document sections when a user asks a question.",
        "4. Answer Formulation: Returns relevant source paragraphs along with the answer.",
        "5. FastAPI Layer: Authenticates users with JWT tokens and provides search endpoints."
      ],
      highlights: [
        "Fast local document search using ChromaDB vector database.",
        "JWT-based user authentication protecting API endpoints.",
        "Returns clear references to source document sections with every answer."
      ]
    }
  ],
  experience: [
    {
      role: "Developer Intern",
      organization: "APCRDA (Andhra Pradesh Capital Region Development Authority)",
      period: "Jul 2026 – Oct 2026",
      type: "Internship",
      location: "Andhra Pradesh, India",
      summary:
        "Worked on administrative dashboards, PostgreSQL database schemas, and enterprise asset tracking systems for state government operations.",
      responsibilities: [
        "Built Annuity and Loan Waiver dashboards connecting frontend UI to PostgreSQL via REST APIs.",
        "Designed PostgreSQL schemas with role-based access control (RBAC) to keep sensitive records protected.",
        "Developed modules for an HRMS employee tracker including user login, MongoDB storage, and search filters.",
        "Set up custom DocTypes and asset data structures in Frappe ERPNext for organizational asset management.",
        "Cleaned and migrated legacy employee records between Saral and Frappe HR systems using Excel scripts.",
        "Tested conversational chatbot workflows to handle common employee questions."
      ]
    }
  ],
  education: {
    institution: "VIT-AP University",
    degree: "Integrated M.Tech in Computer Science and Engineering",
    period: "2022 – 2027",
    cgpa: "8.15",
    details: "Coursework in data structures, algorithms, database systems, software engineering, and web development."
  },
  certifications: [
    { title: "AWS Cloud (EC2, S3)", issuer: "NxtWave", topic: "Cloud basics, virtual machines, and object storage" },
    { title: "Model Context Protocol", issuer: "NxtWave", topic: "Agent tool calling and system context concepts" },
    { title: "Responsive Web Development", issuer: "NxtWave", topic: "HTML, CSS, flexbox, and modern web layouts" },
    { title: "OpenAI & LLM Foundations", issuer: "OpenAI × NxtWave", topic: "API integration, prompting, and practical LLM use cases" }
  ],
  leadership: [
    {
      role: "Club Manager",
      organization: "Telugu Chaitra Association, VIT-AP",
      period: "2025 – Present",
      description: "Coordinated university cultural events, organized student volunteers, and managed event logistics."
    },
    {
      role: "Social Media Team Lead",
      organization: "NSS, VIT-AP",
      period: "2023 – 2024",
      description: "Led digital outreach for community service drives and helped organize local awareness programs."
    }
  ]
};

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Toast helper
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const copyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
      setCopiedEmail(true);
      triggerToast("Copied to clipboard: " + PORTFOLIO_DATA.personal.email);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  // Scroll listener for active navbar highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "skills", "experience", "education", "contact"];
      const scrollPos = window.scrollY + 250;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-200 font-sans selection:bg-blue-500/30 selection:text-blue-200 antialiased relative overflow-x-hidden">
      {/* Background Subtle Gradient */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E263812_1px,transparent_1px),linear-gradient(to_bottom,#1E263812_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[30rem] bg-gradient-to-b from-blue-600/10 via-indigo-600/5 to-transparent blur-[120px] rounded-full" />
        <div className="absolute top-[60%] right-[-10%] w-[45rem] h-[30rem] bg-gradient-to-l from-indigo-600/10 to-transparent blur-[140px] rounded-full" />
      </div>

      {/* Floating System Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#0E131F]/90 backdrop-blur-md border border-blue-500/40 text-blue-200 px-5 py-3 rounded-xl shadow-2xl text-sm font-medium">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#07090E]/85 backdrop-blur-xl border-b border-slate-800/80 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo / Identity */}
          <a href="#hero" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-mono font-bold text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200 border border-blue-400/30">
              HK
            </div>
            <div>
              <div className="font-semibold text-white tracking-tight flex items-center gap-2 group-hover:text-blue-400 transition-colors">
                <span>D S V Haswanth Kumar</span>
                <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <div className="text-xs text-slate-400 font-mono hidden sm:block">Full-Stack & AI Developer</div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0D111A]/80 border border-slate-800/90 rounded-full px-4 py-1.5 shadow-inner">
            {[
              { id: "hero", label: "Home" },
              { id: "about", label: "About" },
              { id: "projects", label: "Projects" },
              { id: "skills", label: "Skills" },
              { id: "experience", label: "Experience" },
              { id: "contact", label: "Contact" }
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  activeSection === link.id
                    ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials & Visible Email Action */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#0F1420] border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all hover:scale-105"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#0F1420] border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all hover:scale-105"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={copyEmail}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-600/10 border border-blue-500/30 text-blue-400 hover:bg-blue-600/20 text-xs font-mono tracking-wide transition-all active:scale-95"
              title="Click to copy email address"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? "Copied Email!" : PORTFOLIO_DATA.personal.email}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-[#07090E]/95 backdrop-blur-xl px-4 py-4 space-y-3">
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: "hero", label: "Home" },
                { id: "about", label: "About" },
                { id: "projects", label: "Projects" },
                { id: "skills", label: "Skills" },
                { id: "experience", label: "Experience" },
                { id: "contact", label: "Contact" }
              ].map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-sm rounded-lg bg-[#111624] border border-slate-800 text-slate-300 hover:text-blue-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <div className="flex gap-3">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-[#111624] text-slate-300"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-[#111624] text-slate-300"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <button
                onClick={copyEmail}
                className="px-3 py-1.5 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-lg text-xs font-mono"
              >
                {copiedEmail ? "Copied!" : PORTFOLIO_DATA.personal.email}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-24">
        {/* ===================== HERO SECTION ===================== */}
        <section id="hero" className="min-h-[calc(100vh-5rem)] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Introduction & Simple Headlines */}
              <div className="lg:col-span-7 space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                  Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Haswanth Kumar</span>.
                </h1>

                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
                  Full-stack developer building clean web applications, reliable backend APIs, and practical AI tools.
                </p>

                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  {PORTFOLIO_DATA.personal.summary}
                </p>

                {/* Honest Metric Strip (54 pytest container removed) */}
                <div className="grid grid-cols-2 gap-3 pt-2 max-w-md">
                  <div className="p-3.5 rounded-xl bg-[#0D121F] border border-slate-800 hover:border-slate-700 transition-colors">
                    <div className="flex items-center gap-2 text-indigo-400 font-mono font-bold text-lg">
                      <GraduationCap className="w-4 h-4" />
                      8.15 CGPA
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">Integrated M.Tech @ VIT-AP</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0D121F] border border-slate-800 hover:border-slate-700 transition-colors">
                    <div className="flex items-center gap-2 text-blue-400 font-mono font-bold text-lg">
                      <Briefcase className="w-4 h-4" />
                      APCRDA
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">Developer Intern (2026)</div>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/25"
                  >
                    <span>View Projects</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#skills"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0F1422] hover:bg-[#141B2D] text-slate-200 border border-slate-800 text-sm font-medium transition-all"
                  >
                    <Cpu className="w-4 h-4 text-blue-400" />
                    <span>Skills & Tech</span>
                  </a>

                  {/* Direct Visible Email Button */}
                  <button
                    onClick={copyEmail}
                    className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl bg-[#0F1422] hover:bg-[#141B2D] border border-slate-800 text-slate-300 hover:text-white text-sm font-medium transition-colors"
                    title="Click to copy email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Mail className="w-4 h-4 text-blue-400" />}
                    <span className="font-mono text-xs">{copiedEmail ? "Copied to Clipboard!" : PORTFOLIO_DATA.personal.email}</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Clean Developer Snapshot */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl bg-[#0B0F1A] border border-slate-800 p-6 shadow-2xl relative">
                  {/* Header */}
                  <div className="flex items-center gap-3.5 border-b border-slate-800 pb-5 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-mono font-bold text-white text-base shadow-lg shadow-blue-500/20">
                      HK
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">D S V Haswanth Kumar</h3>
                      <p className="text-xs text-slate-400">Full-Stack & AI Developer • Andhra Pradesh, India</p>
                    </div>
                  </div>

                  {/* Highlights list */}
                  <div className="space-y-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-[#0E1322] border border-slate-800">
                      <span className="text-slate-400 font-mono text-[11px] block mb-1">Education</span>
                      <span className="text-slate-200 font-medium">Integrated M.Tech in CSE, VIT-AP University (8.15 CGPA)</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#0E1322] border border-slate-800">
                      <span className="text-slate-400 font-mono text-[11px] block mb-1">Experience</span>
                      <span className="text-slate-200 font-medium">APCRDA Intern — Built PostgreSQL dashboards, RBAC security, & ERP modules</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#0E1322] border border-slate-800">
                      <span className="text-slate-400 font-mono text-[11px] block mb-1.5">Key Tools</span>
                      <div className="flex flex-wrap gap-1.5">
                        {["Python", "FastAPI", "React.js", "Node.js", "PostgreSQL", "Supabase", "MongoDB", "Gemini API", "Docker", "Pytest"].map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded bg-[#13192B] border border-slate-700/60 text-[11px] font-mono text-slate-300">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Links to Repos & Profile */}
                  <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                    <a
                      href={PORTFOLIO_DATA.personal.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1.5"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      <span>LinkedIn Profile</span>
                    </a>
                    <a
                      href={PORTFOLIO_DATA.personal.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-300 hover:text-white font-medium flex items-center gap-1"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub Profile</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== ABOUT SECTION ===================== */}
        <section id="about" className="py-20 border-t border-slate-800/80 bg-[#0A0D15]/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-4 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-blue-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  About Me
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-white">
                  How I build software.
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  I like writing straightforward code, testing it properly, and building tools that solve real problems.
                </p>
              </div>

              <div className="md:col-span-8 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <div className="p-6 rounded-2xl bg-[#0D121E] border border-slate-800 space-y-2">
                  <h3 className="text-base font-semibold text-white flex items-center gap-2">
                    <Server className="w-4 h-4 text-blue-400" /> Full-Stack Web & Backend
                  </h3>
                  <p className="text-slate-400 text-sm">
                    I build web apps end-to-end using React on the frontend and Python (FastAPI) or Node.js on the backend. I care about designing clean database schemas in PostgreSQL or MongoDB, handling authentication securely with JWTs, and making sure the API connects smoothly with the user interface.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#0D121E] border border-slate-800 space-y-2">
                  <h3 className="text-base font-semibold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-400" /> Practical AI & Automation
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Rather than using AI just for the sake of it, I use LLM APIs like Gemini to automate tedious tasks. For example, in Self-Healing Docs, I used Python's AST parser to inspect code changes and suggest doc updates, and in RescueLens, I used vision capabilities to summarize emergency photos.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#0D121E] border border-slate-800 space-y-2">
                  <h3 className="text-base font-semibold text-white flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" /> Real-World Experience & Testing
                  </h3>
                  <p className="text-slate-400 text-sm">
                    During my developer internship at APCRDA, I worked on real government dashboards, database schemas with role-based access, and HR tracking modules. I make sure my personal projects are well-tested too—like Self-Healing Docs, where I built automated unit tests with Pytest to verify code change detection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== FEATURED PROJECTS (FULL WIDTH, NO PREVIEW CONTAINERS) ===================== */}
        <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="space-y-3 mb-12 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Work
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
              Here are three full-stack and AI projects I've built, with their GitHub repositories and how they work.
            </p>
          </div>

          <div className="space-y-10">
            {PORTFOLIO_DATA.projects.map((project, idx) => (
              <div
                key={project.id}
                className="group rounded-3xl bg-[#0B0F1A] border border-slate-800 hover:border-slate-700 transition-all duration-300 p-6 sm:p-8 shadow-xl relative"
              >
                {/* Project Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="text-xs font-mono text-slate-500">PROJECT 0{idx + 1}</span>
                      <span className={`text-xs px-2.5 py-0.5 rounded-full border font-mono ${project.badgeColor}`}>
                        {project.badge}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-400 mt-0.5">{project.subtitle}</p>
                  </div>

                  <div>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-md shadow-blue-600/20"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub Repo</span>
                    </a>
                  </div>
                </div>

                {/* Body Content - Full Width Clean Layout */}
                <div className="pt-6 space-y-6">
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {project.overview}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-[#0E1322] border border-slate-800">
                      <div className="text-xs font-mono uppercase text-amber-400 flex items-center gap-1.5 mb-1.5">
                        <AlertTriangle className="w-3.5 h-3.5" /> The Problem
                      </div>
                      <p className="text-xs text-slate-300 leading-normal">{project.problem}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0E1322] border border-slate-800">
                      <div className="text-xs font-mono uppercase text-emerald-400 flex items-center gap-1.5 mb-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" /> The Solution
                      </div>
                      <p className="text-xs text-slate-300 leading-normal">{project.solution}</p>
                    </div>
                  </div>

                  {/* How It Works List */}
                  <div className="space-y-2.5 p-4 rounded-xl bg-[#090D17] border border-slate-800/80">
                    <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                      How It Works
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.architecture.map((step, sIdx) => (
                        <div key={sIdx} className="text-xs text-slate-300 flex items-start gap-2">
                          <ChevronRight className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Badges & Source Link */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg bg-[#121828] border border-slate-800 text-xs font-mono text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono text-blue-400 hover:text-blue-300 flex items-center gap-1"
                    >
                      <span>Explore code on GitHub</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== SKILLS & TECH ===================== */}
        <section id="skills" className="py-24 border-t border-slate-800/80 bg-[#080B12]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center sm:text-left mb-12 space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Technical Skills
              </h2>
              <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
                Tools and technologies I use to build full-stack web applications and backend systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PORTFOLIO_DATA.skills.map((skillGroup) => {
                const IconComponent = skillGroup.icon;
                return (
                  <div
                    key={skillGroup.category}
                    className="p-6 rounded-2xl bg-[#0D121F] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between shadow-lg"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-blue-400">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h3 className="font-semibold text-white tracking-tight">{skillGroup.category}</h3>
                      </div>
                      <p className="text-xs text-slate-400 mb-4 leading-relaxed">{skillGroup.description}</p>

                      <div className="space-y-2.5">
                        {skillGroup.items.map((item) => (
                          <div key={item.name} className="p-2.5 rounded-xl bg-[#090D17] border border-slate-800/80">
                            <div className="font-medium text-xs text-slate-200">
                              {item.name}
                            </div>
                            <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                              {item.detail}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================== WORK EXPERIENCE ===================== */}
        <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="space-y-3 mb-12 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Work Experience
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
              My software development internship at state agency APCRDA.
            </p>
          </div>

          <div className="space-y-8">
            {PORTFOLIO_DATA.experience.map((exp, index) => (
              <div
                key={index}
                className="rounded-3xl bg-[#0B0F1A] border border-slate-800 p-6 sm:p-8 shadow-xl relative"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800/80 pb-5">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-mono">
                        {exp.type}
                      </span>
                      <span className="text-xs font-mono text-slate-400">{exp.location}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mt-1.5">{exp.role}</h3>
                    <div className="text-sm font-semibold text-blue-400">{exp.organization}</div>
                  </div>

                  <div className="font-mono text-xs sm:text-sm text-slate-400 bg-slate-900/80 px-4 py-2 rounded-xl border border-slate-800 inline-block self-start md:self-auto">
                    {exp.period}
                  </div>
                </div>

                <p className="text-sm text-slate-300 mt-5 leading-relaxed">
                  {exp.summary}
                </p>

                <div className="mt-6 space-y-3">
                  <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                    What I Did:
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-3.5 rounded-xl bg-[#0E1424] border border-slate-800/70 text-xs sm:text-sm text-slate-300 flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== EDUCATION, CERTIFICATIONS & LEADERSHIP ===================== */}
        <section id="education" className="py-24 border-t border-slate-800/80 bg-[#080B12]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Education & Certifications
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Education Card */}
              <div className="lg:col-span-6 p-6 sm:p-7 rounded-3xl bg-[#0B0F1A] border border-slate-800 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <GraduationCap className="w-6 h-6" />
                    </span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 font-mono text-xs border border-blue-500/30">
                      CGPA: {PORTFOLIO_DATA.education.cgpa}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{PORTFOLIO_DATA.education.degree}</h3>
                  <div className="text-blue-400 text-sm font-semibold mt-1">
                    {PORTFOLIO_DATA.education.institution}
                  </div>
                  <div className="text-xs font-mono text-slate-400 mt-0.5">
                    {PORTFOLIO_DATA.education.period}
                  </div>
                  <p className="text-slate-300 text-sm mt-4 leading-relaxed">
                    {PORTFOLIO_DATA.education.details}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>VIT-AP University</span>
                  <span className="text-emerald-400">Integrated M.Tech (CSE)</span>
                </div>
              </div>

              {/* Certifications Card */}
              <div className="lg:col-span-6 p-6 sm:p-7 rounded-3xl bg-[#0B0F1A] border border-slate-800 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      <Award className="w-6 h-6" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-white">Certifications</h3>
                      <p className="text-xs text-slate-400">Completed training & certifications</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    {PORTFOLIO_DATA.certifications.map((cert) => (
                      <div
                        key={cert.title}
                        className="p-3.5 rounded-xl bg-[#0F1424] border border-slate-800 hover:border-purple-500/30 transition-colors"
                      >
                        <div className="font-semibold text-xs text-white">{cert.title}</div>
                        <div className="text-[11px] font-mono text-purple-400 mt-0.5">{cert.issuer}</div>
                        <div className="text-[11px] text-slate-400 mt-1 leading-snug">{cert.topic}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Campus Leadership Card */}
              <div className="lg:col-span-12 p-6 sm:p-7 rounded-3xl bg-[#0B0F1A] border border-slate-800 shadow-lg">
                <div className="flex items-center gap-3 mb-5">
                  <span className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <BookOpen className="w-6 h-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">Campus Activities & Leadership</h3>
                    <p className="text-xs text-slate-400">Student associations and outreach</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {PORTFOLIO_DATA.leadership.map((item, lIdx) => (
                    <div
                      key={lIdx}
                      className="p-4 rounded-xl bg-[#0E1322] border border-slate-800 space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-white">{item.role}</span>
                        <span className="text-xs font-mono text-slate-400">{item.period}</span>
                      </div>
                      <div className="text-xs font-semibold text-blue-400">{item.organization}</div>
                      <p className="text-xs text-slate-300 leading-relaxed pt-1">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== CONTACT SECTION (CLEAN, NO REDUNDANT EMAIL CONTAINER) ===================== */}
        <section id="contact" className="py-24 border-t border-slate-800/80 bg-[#06080E] relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Details</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white max-w-xl mx-auto">
              Get In Touch
            </h2>

            <p className="text-slate-400 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
              I'm actively looking for full-time software developer or engineering intern roles. Feel free to connect via LinkedIn, GitHub, or phone.
            </p>

            {/* Direct Contact Matrix: LinkedIn, GitHub, Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto pt-2 text-left">
              {/* LinkedIn */}
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-[#0A0E18] border border-slate-800 hover:border-blue-500/40 hover:bg-[#0E1422] transition-all group flex items-center gap-3.5 shadow-lg"
              >
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">LinkedIn</div>
                  <div className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors">haswanth-kumar</div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-[#0A0E18] border border-slate-800 hover:border-slate-700 hover:bg-[#0E1422] transition-all group flex items-center gap-3.5 shadow-lg"
              >
                <div className="p-2.5 rounded-xl bg-slate-800 text-slate-200 group-hover:scale-110 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">GitHub</div>
                  <div className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors">Haswanthkumar11</div>
                </div>
              </a>

              {/* Phone */}
              <div className="p-4 rounded-2xl bg-[#0A0E18] border border-slate-800 flex items-center gap-3.5 shadow-lg">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Phone</div>
                  <div className="text-xs font-semibold text-white select-all">{PORTFOLIO_DATA.personal.phone}</div>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="pt-14 border-t border-slate-800/80 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
              <div>© {new Date().getFullYear()} D S V Haswanth Kumar. Built with React & Tailwind CSS.</div>
              <div className="text-slate-400">VIT-AP University</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}