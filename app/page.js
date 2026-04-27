const skillGroups = [
  {
    title: "Core & frontend",
    items: [
      "Python",
      "Web Scraping",
      "Data Extraction",
      "Automation",
      "ReactJS",
      "NextJS",
      "JavaScript ES6+",
      "HTML5 / CSS3",
      "Tailwind CSS",
      "Responsive & component UIs"
    ]
  },
  {
    title: "Parsing & data",
    items: [
      "PDF / HTML / Word parsing",
      "Text extraction & transformation",
      "ETL & structured conversion",
      "Large dataset handling"
    ]
  },
  {
    title: "Backend, DB & quality",
    items: [
      "RESTful APIs & pipelines",
      "PostgreSQL & MySQL",
      "Data modeling & query tuning",
      "BeautifulSoup",
      "Requests",
      "Selenium",
      "lxml",
      "Pandas",
      "Git & CI/CD",
      "Debugging & performance"
    ]
  }
];

const services = [
  {
    n: "01",
    title: "Web scraping & crawlers",
    text: "Static and dynamic sites, retries, anti-blocking, and reliable scheduling at scale."
  },
  {
    n: "02",
    title: "Document & page parsing",
    text: "PDF, Word, and HTML into clean structured data for analysis and storage."
  },
  {
    n: "03",
    title: "Automation & ETL",
    text: "Pipelines, cleaning, and SQL-backed storage with integrity in mind."
  }
];

/** Case-study style cards (kawsarlog.com pattern: .py file, metric, category, stack). */
const featuredProjects = [
  {
    file: "fintech_ingest.py",
    impact: "Multi-source",
    type: "Web Scraping",
    title: "Market & vendor data acquisition",
    snippet: ">>> pipeline.run(sources, validate=True)",
    text: "End-to-end Python scrapers and scheduled jobs to pull public and partner feeds, normalize fields, and land rows in PostgreSQL with schema checks.",
    stack: ["Python", "Requests", "PostgreSQL", "Selenium"]
  },
  {
    file: "html_parser.py",
    impact: "High volume",
    type: "Data Extraction",
    title: "HTML extraction & cleaning pipeline",
    snippet: ">>> soup.select(structured_selectors)",
    text: "Structured parsing of HTML with BeautifulSoup and lxml, handling layout drift and building resilient selectors for long-running production scrapes.",
    stack: ["BeautifulSoup", "lxml", "Pandas", "SQL"]
  },
  {
    file: "pdf_pipeline.py",
    impact: "Documents",
    type: "PDF / Word",
    title: "Document-to-database parsing",
    snippet: ">>> extract_tables(pdf, schema)",
    text: "Pipelines to turn PDFs and Word files into tabular and JSON-ready data, with validation and error reporting for bad pages or OCR edge cases.",
    stack: ["Python", "Pandas", "Regex", "ETL"]
  },
  {
    file: "dynamic_scraper.py",
    impact: "JS-heavy sites",
    type: "Automation",
    title: "Selenium & headless browser flows",
    snippet: ">>> driver.get(url); wait_for(render)",
    text: "Automation for JavaScript-rendered UIs, login flows, and anti-bot aware retries—paired with back-off and logging for operations teams.",
    stack: ["Selenium", "Python", "CI/CD", "Logging"]
  },
  {
    file: "etl_jobs.py",
    impact: "Batch & cron",
    type: "ETL",
    title: "Scheduled ETL and dataset QA",
    snippet: ">>> cron.schedule(ingest, '0 * * * *')",
    text: "Batch transforms, de-duplication, and quality checks on large extracted datasets before downstream analytics and APIs consume them.",
    stack: ["Python", "Pandas", "MySQL", "Git"]
  },
  {
    file: "api_glue.py",
    impact: "Internal APIs",
    type: "Backend",
    title: "REST layers over curated extracts",
    snippet: ">>> app.get('/datasets/latest')",
    text: "Thin REST services over cleaned tables so product and analytics can query stable contracts instead of raw scrape dumps.",
    stack: ["REST", "JSON", "Python", "PostgreSQL"]
  }
];

const experience = [
  {
    company: "Apex Fintech Solutions",
    role: "Python Developer — Web Scraping / Data Processing",
    period: "10/2022 – 02/2026",
    location: "Remote",
    highlights: [
      "Large-scale scraping in Python; automated acquisition from multiple online sources",
      "HTML and document parsing pipelines; accurate transformation to structured data",
      "BeautifulSoup, Requests, Selenium; dynamic and static content",
      "High-volume pipeline design, retries, anti-blocking, SQL storage and schema design"
    ]
  },
  {
    company: "Endava",
    role: "Python Developer — Data Extraction / Automation",
    period: "07/2020 – 08/2022",
    location: "Singapore",
    highlights: [
      "Extraction and processing systems supporting automated workflows",
      "Scripts for structured and semi-structured sources; SQL-optimized storage",
      "Team collaboration; debugging and stability improvements"
    ]
  },
  {
    company: "Thoughtworks",
    role: "Web Developer — JavaScript / UI Development",
    period: "09/2015 – 06/2020",
    location: "Singapore",
    highlights: [
      "Python for processing and automation alongside UI delivery",
      "Transforming raw data to structured formats; maintained reliable systems"
    ]
  }
];

const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" }
];

export default function Home() {
  return (
    <>
      <a href="#main" className="skip">
        Skip to content
      </a>

      <header className="header">
        <div className="header-inner">
          <a className="logo" href="#">
            Ariel Berjit
            <span>Python &amp; data</span>
          </a>
          <nav className="nav" aria-label="Primary">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="header-cta" href="#contact">
            Get in touch
          </a>
        </div>
      </header>

      <main id="main" className="main">
        <div className="grid-bg" aria-hidden="true" />

        <section className="hero" aria-label="Introduction">
          <div className="hero-inner">
            <p className="status">Open to opportunities · Bacolod City, Philippines</p>
            <h1>
              I build
              <br />
              <span>data systems</span>
              <br />
              you can trust.
            </h1>
            <p className="hero-lede">
              <strong>Ariel Berjit</strong> — Python developer focused on web scraping, data
              extraction, and automation. 8+ years turning unstructured sources into
              reliable pipelines and clean structured data.
            </p>
            <div className="hero-actions">
              <a className="btn solid" href="mailto:berjitariel342@gmail.com">
                Email me
              </a>
              <a className="btn outline" href="#projects">
                Featured projects
              </a>
              <a
                className="btn outline"
                href="https://www.linkedin.com/in/ariel-berjit-9166a4404"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <ul className="meta-row" aria-label="At a glance">
              <li>
                <span className="meta-k">8+ years</span>
                <span className="meta-v">Engineering</span>
              </li>
              <li>
                <span className="meta-k">3 companies</span>
                <span className="meta-v">Remote &amp; Singapore</span>
              </li>
              <li>
                <span className="meta-k">Stack</span>
                <span className="meta-v">Python · SQL · Web</span>
              </li>
            </ul>
          </div>
        </section>

        <section id="about" className="section section--alt">
          <div className="section-inner">
            <p className="kicker">About</p>
            <h2>From messy data to something you can ship.</h2>
            <div className="prose two-col">
              <p>
                I design and run extraction pipelines, scraping frameworks, and automation
                that handle high volume and real-world edge cases — PDFs, Word files, HTML,
                and live sites — with a focus on accuracy, performance, and maintainability.
              </p>
              <p>
                I care about data integrity across sources, clear schema design, and
                error handling that does not break when the web changes. If you need
                structure from chaos, I can help.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-inner">
            <p className="kicker">Skills</p>
            <h2>What I work with</h2>
            <p className="section-intro">
              Grouped the way I think about the work — from core delivery to data quality and
              operations.
            </p>
            <div className="skill-groups">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section section--dark">
          <div className="section-inner">
            <p className="kicker kicker--on-dark">Services</p>
            <h2>What I deliver</h2>
            <div className="service-cards">
              {services.map((s) => (
                <article className="service-card" key={s.n}>
                  <span className="service-num">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section section--projects" aria-label="Featured projects">
          <div className="section-inner section-inner--wide">
            <p className="projects-prelude" aria-hidden="true">
              from portfolio import *
            </p>
            <p className="kicker">Projects</p>
            <h2>Featured projects</h2>
            <p className="section-intro">
              Work shaped like the portfolio you referenced: code-style modules, impact labels, and
              stacks—highlighting the kind of systems I design (scraping, parsing, ETL, APIs).
            </p>
            <ul className="projects-grid">
              {featuredProjects.map((p) => (
                <li className="project-card" key={p.file}>
                  <p className="project-file">{p.file}</p>
                  <p className="project-badges">
                    <span className="project-impact">{p.impact}</span>
                    <span className="project-type">{p.type}</span>
                  </p>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-snippet">{p.snippet}</p>
                  <p className="project-desc">{p.text}</p>
                  <ul className="project-tags" aria-label="Technologies">
                    {p.stack.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <p className="projects-foot" aria-hidden="true">
              # more pipelines in production — ask for case details
            </p>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-inner">
            <p className="kicker">Experience</p>
            <h2>Where I have shipped</h2>
            <ol className="timeline">
              {experience.map((job) => (
                <li className="timeline-item" key={job.company}>
                  <div className="timeline-meta">
                    <span className="timeline-period">{job.period}</span>
                    <span className="timeline-loc">{job.location}</span>
                  </div>
                  <div className="timeline-body">
                    <h3>{job.company}</h3>
                    <p className="timeline-role">{job.role}</p>
                    <ul>
                      {job.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="education" className="section section--tight">
          <div className="section-inner">
            <p className="kicker">Education</p>
            <h2>Academic</h2>
            <div className="edu-block">
              <h3>Singapore Institute of Technology (SIT)</h3>
              <p className="edu-degree">B.Sc. in Computer Science</p>
              <p className="edu-dates">08/2012 – 07/2015</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section section--contact">
          <div className="section-inner contact-block">
            <p className="kicker">Contact</p>
            <h2>Let us talk about your data problem.</h2>
            <p className="contact-text">
              Usually reply within 24 hours. For project inquiries, the fastest path is email.
            </p>
            <div className="contact-links">
              <a className="contact-link" href="mailto:berjitariel342@gmail.com">
                berjitariel342@gmail.com
              </a>
              <a
                className="contact-link"
                href="https://www.linkedin.com/in/ariel-berjit-9166a4404"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/ariel-berjit-9166a4404
              </a>
            </div>
            <p className="location">Bacolod City, Philippines</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Ariel Berjit. All rights reserved.</p>
      </footer>
    </>
  );
}
