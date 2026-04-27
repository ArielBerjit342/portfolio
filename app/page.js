const skills = [
  { name: "Python", percent: 95, type: "Language" },
  { name: "Web Scraping", percent: 94, type: "Data Extraction" },
  { name: "Selenium", percent: 90, type: "Automation" },
  { name: "Pandas", percent: 92, type: "Data" },
  { name: "PDF / HTML Parsing", percent: 91, type: "Document Processing" },
  { name: "REST APIs", percent: 86, type: "Backend" },
  { name: "PostgreSQL", percent: 87, type: "Database" },
  { name: "MySQL", percent: 84, type: "Database" },
  { name: "ETL Pipelines", percent: 90, type: "Data Engineering" }
];

const services = [
  {
    file: "web_automation.py",
    title: "Web Automation",
    code: "def automate_task()",
    text: "Automate repetitive workflows, browser actions, data entry, and scheduled jobs for continuous operations.",
    stack: ["Selenium", "Puppeteer", "Playwright"]
  },
  {
    file: "data_scraping.py",
    title: "Data Scraping",
    code: "def scrape_data()",
    text: "Build robust crawlers for static and dynamic websites with anti-blocking, retries, and high-volume ingestion.",
    stack: ["BeautifulSoup", "Requests", "Selenium"]
  },
  {
    file: "document_parsing.py",
    title: "PDF / HTML Data Parsing",
    code: "def parse_documents()",
    text: "Parse PDF, Word, and HTML documents to transform unstructured text into clean structured datasets.",
    stack: ["lxml", "Pandas", "Regex"]
  },
  {
    file: "etl_pipeline.py",
    title: "ETL Pipelines",
    code: "def run_pipeline()",
    text: "Design reliable extract-transform-load workflows for large datasets and multi-source ingestion pipelines.",
    stack: ["Python", "Pandas", "SQL"]
  },
  {
    file: "api_development.py",
    title: "API Development",
    code: "def create_api()",
    text: "Develop backend services and RESTful APIs for data access, integrations, and automation systems.",
    stack: ["Python", "REST APIs", "JSON"]
  },
  {
    file: "storage_layer.py",
    title: "Data Storage Design",
    code: "def design_schema()",
    text: "Create normalized SQL schemas and optimize queries to maintain integrity and improve retrieval speed.",
    stack: ["PostgreSQL", "MySQL", "Indexing"]
  }
];

const projects = [
  {
    file: "apex_fintech.py",
    impact: "10/2022 - 02/2026",
    type: "Remote",
    title: "Apex Fintech Solutions - Python Developer",
    text: "Designed and optimized large-scale scraping and data processing systems, including PDF/HTML parsing, retry logic, anti-blocking strategies, and SQL-backed storage for reliable high-volume extraction.",
    stack: ["Python", "BeautifulSoup", "Requests", "Selenium", "PostgreSQL"]
  },
  {
    file: "endava.py",
    impact: "07/2020 - 08/2022",
    type: "Singapore",
    title: "Endava - Python Developer",
    text: "Built automated data extraction workflows, processed structured and semi-structured sources, and improved storage/retrieval performance through SQL optimization and robust debugging practices.",
    stack: ["Python", "Automation", "Data Extraction", "MySQL"]
  },
  {
    file: "thoughtworks.py",
    impact: "09/2015 - 06/2020",
    type: "Singapore",
    title: "Thoughtworks - Web Developer",
    text: "Developed Python automation scripts and data transformation logic while collaborating in delivery teams to maintain stable, high-performance processing systems.",
    stack: ["JavaScript", "ReactJS", "NextJS", "Python"]
  }
];

const timeline = [
  {
    year: "2022 - 2026",
    title: "Apex Fintech Solutions",
    role: "Python Developer (Web Scraping / Data Processing)",
    note: "Large-scale scraping architecture, parsing pipelines, anti-blocking logic, and SQL-backed storage."
  },
  {
    year: "2020 - 2022",
    title: "Endava",
    role: "Python Developer (Data Extraction / Automation)",
    note: "Automated extraction systems, robust data processing workflows, and storage optimization."
  },
  {
    year: "2015 - 2020",
    title: "Thoughtworks",
    role: "Web Developer (JavaScript / UI Development)",
    note: "Front-end delivery with Python automation support and data transformation workflows."
  }
];

function Card({ children }) {
  return <div className="card">{children}</div>;
}

export default function Home() {
  return (
    <main className="page">
      <section className="hero panel">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="available">Available for freelance work</p>
            <h1>
              I&apos;m <span>Ariel Berjit</span>
              <br />
              Python Developer
            </h1>
            <p className="hero-subtitle">
              Web Scraping / Data Extraction / Automation
            </p>
            <p className="lead">
              Python Developer with 8+ years of experience building scalable
              data extraction pipelines, parsing unstructured documents, and
              automating high-volume workflows.
            </p>
            <p className="muted">Bacolod City, Philippines</p>
            <div className="chips">
              {[
                "Python",
                "Web Scraping",
                "Data Extraction",
                "Automation",
                "ReactJS",
                "NextJS"
              ].map((chip) => (
                <span key={chip}>{chip}</span>
              ))}
            </div>
            <div className="cta">
              <a href="#contact" className="btn primary">
                Let&apos;s Talk
              </a>
              <a href="#projects" className="btn">
                View Experience
              </a>
            </div>
          </div>

          <aside className="terminal">
            <p className="terminal-title">terminal</p>
            <p className="code">$ python extraction_engine.py --mode production</p>
            <p className="success">✓ Pipeline active · 99.9% data integrity</p>
            <p className="code">class Developer:</p>
            <p className="code">  name = &quot;Ariel Berjit&quot;</p>
            <p className="code">  specialty = [&quot;Scraping&quot;, &quot;Parsing&quot;, &quot;Automation&quot;]</p>
            <p className="code">  location = &quot;Philippines&quot;</p>
            <p className="code">  years = 8+</p>
          </aside>
        </div>
      </section>

      <section className="stats">
        {[
          ["8+ yrs", "Experience"],
          ["3", "Companies"],
          ["1000+", "Automation Jobs"],
          ["24/7", "Pipeline Reliability"]
        ].map(([v, l]) => (
          <Card key={l}>
            <h3>{v}</h3>
            <p>{l}</p>
          </Card>
        ))}
      </section>

      <section className="panel">
        <p className="code">def about_me():</p>
        <h2>Python Developer & Data Extraction Specialist</h2>
        <Card>
          <p>
            I design and implement robust scraping frameworks that parse PDF,
            Word, and HTML documents and convert unstructured content into
            structured formats. My work focuses on performance, reliability,
            data integrity, and handling edge cases in real-world environments.
          </p>
          <p className="code">return &quot;Let&apos;s build something amazing!&quot;</p>
        </Card>
      </section>

      <section className="panel">
        <p className="code">./skills --visualize</p>
        <h2>Technical Skills</h2>
        <div className="grid two">
          {skills.map((skill) => (
            <Card key={skill.name}>
              <div className="row">
                <strong>{skill.name}</strong>
                <span>{skill.percent}%</span>
              </div>
              <div className="bar">
                <span style={{ width: `${skill.percent}%` }} />
              </div>
              <p className="muted">{skill.type}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="panel">
        <p className="code">class Services:</p>
        <h2>What I Build</h2>
        <div className="grid three">
          {services.map((service) => (
            <Card key={service.title}>
              <p className="file">{service.file}</p>
              <h3>{service.title}</h3>
              <p className="code">{service.code}</p>
              <p>{service.text}</p>
              <div className="chips">
                {service.stack.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="projects" className="panel">
        <p className="code">experience_timeline.py</p>
        <h2>Career Journey</h2>
        <div className="timeline">
          {timeline.map((item) => (
            <Card key={item.title}>
              <p className="file">{item.year}</p>
              <h3>{item.title}</h3>
              <p className="muted">{item.role}</p>
              <p>{item.note}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="panel">
        <p className="code">from portfolio import *</p>
        <h2>Professional Highlights</h2>
        <div className="grid three">
          {projects.map((project) => (
            <Card key={project.title}>
              <p className="file">{project.file}</p>
              <p className="muted">
                {project.impact} · {project.type}
              </p>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <div className="chips">
                {project.stack.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="panel">
        <p className="code">education.json</p>
        <h2>Education</h2>
        <Card>
          <p>
            <strong>Singapore Institute of Technology (SIT)</strong>
          </p>
          <p>B.Sc. in Computer Science</p>
          <p className="muted">08/2012 - 07/2015</p>
        </Card>
      </section>

      <section id="contact" className="panel">
        <p className="code">// contact</p>
        <h2>Let&apos;s Build Together</h2>
        <Card>
          <p>
            Need web scraping, document parsing, automation, or data pipelines?
            I can help design and build reliable systems tailored to your
            business goals.
          </p>
          <p>
            <strong>Email:</strong> berjitariel342@gmail.com
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://linkedin.com/in/ariel-berjit-9166a4404"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/ariel-berjit-9166a4404
            </a>
          </p>
          <p>
            <strong>Location:</strong> Bacolod City, Philippines
          </p>
          <p>
            <strong>Response time:</strong> Usually within 24 hours
          </p>
        </Card>
      </section>
    </main>
  );
}
