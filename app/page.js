const skills = [
  { name: "Python", percent: 95, type: "Language" },
  { name: "Web Scraping", percent: 94, type: "Data Extraction" },
  { name: "Selenium", percent: 90, type: "Automation" },
  { name: "Pandas", percent: 92, type: "Data Processing" },
  { name: "PDF / HTML Parsing", percent: 91, type: "Document Parsing" },
  { name: "REST APIs", percent: 86, type: "Backend" },
  { name: "PostgreSQL", percent: 87, type: "Database" },
  { name: "MySQL", percent: 84, type: "Database" }
];

const services = [
  {
    title: "Web Scraping Systems",
    text: "Scalable crawlers for static and dynamic websites with reliability guards, retries, and anti-blocking strategy."
  },
  {
    title: "Document Data Extraction",
    text: "Parsing PDF, Word, and HTML documents to transform unstructured content into clean, structured datasets."
  },
  {
    title: "Automation Workflows",
    text: "Automated scripts and scheduled pipelines that reduce manual work and keep business operations running 24/7."
  },
  {
    title: "ETL & Data Pipelines",
    text: "High-volume extraction and transformation workflows focused on speed, resilience, and data consistency."
  }
];

const experience = [
  {
    company: "Apex Fintech Solutions",
    role: "Python Developer (Web Scraping / Data Processing)",
    time: "10/2022 - 02/2026 | Remote",
    detail:
      "Designed large-scale scraping systems, implemented robust parsing for HTML and document sources, and built reliable SQL-backed ingestion pipelines."
  },
  {
    company: "Endava",
    role: "Python Developer (Data Extraction / Automation)",
    time: "07/2020 - 08/2022 | Singapore",
    detail:
      "Developed automated extraction workflows, optimized SQL storage, and improved processing stability for structured and semi-structured data."
  },
  {
    company: "Thoughtworks",
    role: "Web Developer (JavaScript / UI Development)",
    time: "09/2015 - 06/2020 | Singapore",
    detail:
      "Built web UI features and supported backend operations with Python automation and data transformation logic."
  }
];

export default function Home() {
  return (
    <main className="site">
      <div className="bg-orb orb-a" />
      <div className="bg-orb orb-b" />
      <div className="bg-orb orb-c" />

      <section className="hero">
        <div className="top-badge">Open to freelance projects</div>
        <h1>
          Ariel Berjit
          <span>Python Developer</span>
        </h1>
        <p className="hero-role">
          Web Scraping / Data Extraction / Automation
        </p>
        <p className="hero-summary">
          Python Developer with 8+ years of experience building robust data
          extraction pipelines, large-scale scraping systems, and automation
          workflows that deliver reliable structured data.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Hire Me
          </a>
          <a href="#experience" className="btn btn-ghost">
            See Experience
          </a>
        </div>
      </section>

      <section className="metrics">
        {[
          ["8+", "Years Experience"],
          ["3", "Global Companies"],
          ["1000+", "Automated Runs"],
          ["99.9%", "Data Reliability"]
        ].map(([value, label]) => (
          <article className="metric-card" key={label}>
            <h3>{value}</h3>
            <p>{label}</p>
          </article>
        ))}
      </section>

      <section className="panel about">
        <div>
          <p className="eyebrow">ABOUT</p>
          <h2>Crafting Reliable Data Infrastructure</h2>
        </div>
        <p>
          I specialize in turning messy, unstructured sources into accurate,
          structured datasets. From crawling websites to parsing document files
          and designing resilient pipelines, I build systems that prioritize
          performance, maintainability, and real-world reliability.
        </p>
      </section>

      <section className="panel">
        <div className="section-head">
          <p className="eyebrow">SKILLS</p>
          <h2>Technical Expertise</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <article key={skill.name} className="skill-card">
              <div className="skill-row">
                <strong>{skill.name}</strong>
                <span>{skill.percent}%</span>
              </div>
              <div className="skill-bar">
                <div style={{ width: `${skill.percent}%` }} />
              </div>
              <p>{skill.type}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="section-head">
          <p className="eyebrow">SERVICES</p>
          <h2>What I Deliver</h2>
        </div>
        <div className="service-grid">
          {services.map((item) => (
            <article key={item.title} className="service-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="panel">
        <div className="section-head">
          <p className="eyebrow">EXPERIENCE</p>
          <h2>Career Highlights</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={item.company}>
              <p className="timeline-time">{item.time}</p>
              <h3>{item.company}</h3>
              <p className="timeline-role">{item.role}</p>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel education">
        <p className="eyebrow">EDUCATION</p>
        <h2>Academic Foundation</h2>
        <article className="edu-card">
          <h3>Singapore Institute of Technology (SIT)</h3>
          <p>B.Sc. in Computer Science</p>
          <p className="edu-date">08/2012 - 07/2015</p>
        </article>
      </section>

      <section id="contact" className="panel contact">
        <p className="eyebrow">CONTACT</p>
        <h2>Let&apos;s Build Something Great</h2>
        <p>
          If you need scraping, data extraction, or automation systems, I can
          help build scalable and dependable solutions for your business.
        </p>
        <div className="contact-grid">
          <a href="mailto:berjitariel342@gmail.com">berjitariel342@gmail.com</a>
          <a
            href="https://linkedin.com/in/ariel-berjit-9166a4404"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/ariel-berjit-9166a4404
          </a>
          <span>Bacolod City, Philippines</span>
        </div>
      </section>
    </main>
  );
}
