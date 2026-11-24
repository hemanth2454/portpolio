import React, { useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, MapPin,
  Menu, X, Code2, Database, Layers3, BriefcaseBusiness, GraduationCap,
  ExternalLink, Download, Sparkles, Terminal, Send
} from "lucide-react";

const skills = [
  { title: "Programming", items: ["Java", "JavaScript", "HTML5", "CSS3"] },
  { title: "Backend", items: ["Spring Boot", "REST APIs", "JDBC", "Node.js", "Express.js"] },
  { title: "Frontend", items: ["React.js", "Responsive UI", "Vanilla JavaScript"] },
  { title: "Databases", items: ["MySQL", "MongoDB"] },
  { title: "Tools & Practices", items: ["Git", "GitHub", "SDLC", "STLC","postman"] },
  { title: "Software Testing", items: [ "Manual Testing",
      "Functional Testing",
      "Regression Testing",
      "Smoke Testing",
      "Sanity Testing",
      "Test Case Design",
      "Bug Reporting",] }
  
];

const projects = [
  {
    number: "01",
    name: "SkillX — Skill Exchange Platform",
    type: "JAVA FULL STACK · GROUP PROJECT",
    description: "A peer-to-peer platform designed to help people exchange knowledge and learn from one another without monetary cost. Built with a Java Spring Boot backend and a responsive web interface.",
    stack: ["Java", "Spring Boot", "MongoDB", "HTML", "CSS", "JavaScript", "REST APIs"],
    live: "https://skillexchange-self.vercel.app/",
    code: "https://github.com/hemanth2454/major-project.git",
    accent: "violet",
    mark: "SX"
  },
  {
    number: "02",
    name: "Career Guidance Platform",
    type: "MERN STACK",
    description: "A career guidance web application built to help users explore career paths and make more informed learning and career decisions.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    live: "https://career-path-ashen-one.vercel.app/",
    code: "https://github.com/hemanth2454/career-path.git",
    accent: "blue",
    mark: "CG"
  }
];

function SectionHeading({ eyebrow, title, subtitle }) {
  return <div className="section-heading">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {subtitle && <p>{subtitle}</p>}
  </div>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const navItems = ["About", "Skills", "Projects", "Experience", "Contact"];

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">H.</span><span>HEMANTH<span className="brand-dot">.</span></span></a>
        <button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-cta" href="/resume.pdf" target="_blank" rel="noreferrer" onClick={closeMenu}>Resume <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="pulse"></span> OPEN TO OPPORTUNITIES</div>
            <p className="hero-kicker">HELLO, I'M</p>
            <h1>H.E. <span>Hemanth</span><br/><em>Building ideas</em><br/>into web experiences.</h1>
            <p className="hero-description">Java Full Stack Developer focused on building useful, reliable web applications — from clean interfaces to backend APIs and databases.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17}/></a>
              <a className="button button-ghost" href="#contact">Let's connect <ArrowUpRight size={17}/></a>
            </div>
            <div className="hero-meta"><span><MapPin size={15}/> Bengaluru, India</span><span className="meta-divider"></span><span><Code2 size={15}/> Java Full Stack Developer</span></div>
          </div>
          <div className="hero-art" aria-label="Decorative developer illustration">
            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
            <div className="hero-glow"></div>
            <div className="code-window">
              <div className="window-top"><div className="window-dots"><i></i><i></i><i></i></div><span>developer.java</span><span className="window-lock">●</span></div>
              <div className="code-content">
                <div><span className="line-no">01</span><span className="code-purple">public class</span> <span className="code-yellow">Developer</span> {"{"}</div>
                <div><span className="line-no">02</span>&nbsp;&nbsp;<span className="code-purple">String</span> role = <span className="code-green">"Full Stack"</span>;</div>
                <div><span className="line-no">03</span>&nbsp;&nbsp;<span className="code-purple">String</span> focus = <span className="code-green">"Java"</span>;</div>
                <div><span className="line-no">04</span>&nbsp;&nbsp;<span className="code-purple">boolean</span> learning = <span className="code-orange">true</span>;</div>
                <div><span className="line-no">05</span>&nbsp;&nbsp;<span className="code-purple">void</span> <span className="code-blue">build</span>() {"{"}</div>
                <div><span className="line-no">06</span>&nbsp;&nbsp;&nbsp;&nbsp;createSomethingUseful();</div>
                <div><span className="line-no">07</span>&nbsp;&nbsp;{"}"}</div>
                <div><span className="line-no">08</span>{"}"}</div>
                <div className="cursor-line"><span className="line-no">09</span><span className="typing-cursor"></span></div>
              </div>
              <div className="window-footer"><span><span className="footer-status"></span> Ready to build</span><span>UTF-8&nbsp;&nbsp; Java</span></div>
            </div>
            <div className="float-chip chip-java"><span>☕</span> Java</div>
            <div className="float-chip chip-spring"><span>✳</span> Spring Boot</div>
            <div className="float-chip chip-db"><Database size={15}/> MYSQL</div>
            <div className="hero-orbit-label">CREATIVE<br/>DEVELOPMENT</div>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
        </section>

        <section className="about section-wrap section-block" id="about">
          <SectionHeading eyebrow="01 / ABOUT ME" title={<>A little about <span>my journey.</span></>} subtitle="Curious by nature. Developer by choice."/>
          <div className="about-grid">
            <div className="about-main">
              <p className="lead">I enjoy turning ideas into practical digital experiences, connecting the dots between frontend interfaces, backend logic, and data.</p>
              <p>I'm a Java Full Stack Developer based in Bengaluru. My hands-on learning journey includes building full-stack applications, designing REST APIs, integrating databases, and creating responsive user interfaces. I like understanding how each layer works together and continuously improving the way I build.</p>
              <p>I'm currently interested in opportunities where I can contribute, collaborate with a team, and grow as a software developer.</p>
              <a className="text-link" href="/resume.pdf" target="_blank" rel="noreferrer">View my resume <ArrowUpRight size={16}/></a>
            </div>
            <div className="about-stats">
              <div className="stat-card"><span className="stat-icon"><GraduationCap size={20}/></span><strong>MCA</strong><span>Master of Computer Applications</span><small>2024 — 2026 · GPA 8.1</small></div>
              <div className="stat-card"><span className="stat-icon"><BriefcaseBusiness size={20}/></span><strong>6 months</strong><span>Java Full Stack Trainee</span><small>Dhee Coding Labs · 2026</small></div>
              <div className="stat-card"><span className="stat-icon"><Sparkles size={20}/></span><strong>2 projects</strong><span>Full-stack applications</span><small>Java & MERN stack</small></div>
            </div>
          </div>
        </section>

        <section className="skills section-wrap section-block" id="skills">
          <SectionHeading eyebrow="02 / TOOLKIT" title={<>Technologies I <span>work with.</span></>} subtitle="A growing toolkit for building end-to-end applications."/>
          <div className="skill-grid">
            {skills.map((group, i) => <div className="skill-card" key={group.title}>
              <div className="skill-card-top"><span className="skill-index">0{i+1}</span><span className="skill-symbol">{i===0?<Terminal/>:i===1?<Layers3/>:i===2?<Code2/>:i===3?<Database/>:<BriefcaseBusiness/>}</span></div>
              <h3>{group.title}</h3><div className="skill-tags">{group.items.map(item=><span key={item}>{item}</span>)}</div>
            </div>)}
          </div>
        </section>

        <section className="projects section-wrap section-block" id="projects">
          <SectionHeading eyebrow="03 / SELECTED WORK" title={<>Projects with a <span>purpose.</span></>} subtitle="A couple of applications I've worked on — combining problem-solving with full-stack development."/>
          <div className="project-list">
            {projects.map(project=><article className={`project-card ${project.accent}`} key={project.number}>
              <div className="project-visual">
                <div className="project-visual-grid"></div><div className="project-monogram">{project.mark}</div>
                <span className="project-number">{project.number} / 02</span>
                <div className="project-visual-caption"><span className="caption-line"></span> FULL STACK PROJECT</div>
              </div>
              <div className="project-info">
                <span className="project-type">{project.type}</span><h3>{project.name}</h3><p>{project.description}</p>
                <div className="project-stack">{project.stack.map(s=><span key={s}>{s}</span>)}</div>
                <div className="project-links"><a href={project.live} target="_blank" rel="noreferrer">Live website <ExternalLink size={15}/></a><a href={project.code} target="_blank" rel="noreferrer">Source code <Github size={15}/></a></div>
              </div>
            </article>)}
          </div>
        </section>

        <section className="experience section-wrap section-block" id="experience">
          <SectionHeading eyebrow="04 / EXPERIENCE & EDUCATION" title={<>Learning, building, <span>growing.</span></>}/>
          <div className="timeline">
            <div className="timeline-item"><span className="timeline-dot"></span><div className="timeline-date">APR 2026 — SEP 2026 · BENGALURU</div><h3>Java Full Stack Trainee</h3><h4>Dhee Coding Labs</h4><p>Worked on full-stack development projects to strengthen practical development and testing skills, using Java, J2EE, HTML, CSS, JavaScript, and MySQL.</p></div>
            <div className="timeline-item"><span className="timeline-dot"></span><div className="timeline-date">AUG 2024 — JUN 2026 · TIRUPATI</div><h3>Master of Computer Applications</h3><h4>Sri Venkateshwara University</h4><p>Computer Science · GPA 8.1</p></div>
            <div className="timeline-item"><span className="timeline-dot"></span><div className="timeline-date">AUG 2021 — JUN 2024 · KUPPAM</div><h3>BSc — MSCS</h3><h4>Dravidian University</h4><p>Computer Science · CGPA 8.15</p></div>
          </div>
        </section>

        <section className="contact section-wrap section-block" id="contact">
          <div className="contact-panel">
            <div className="contact-orb"></div>
            <span className="eyebrow">05 / GET IN TOUCH</span>
            <h2>Have a project<br/>in <span>mind?</span></h2>
            <p>I'm open to discussing software development opportunities, collaborations, and interesting ideas. Let's connect.</p>
            <a className="button button-primary contact-button" href="mailto:hehemanth868@gmail.com?subject=Portfolio%20Enquiry">Say hello <Send size={16}/></a>
            <div className="contact-details">
              <a href="mailto:hehemanth868@gmail.com"><Mail size={17}/> hehemanth868@gmail.com <ArrowUpRight size={14}/></a>
              <a href="https://www.linkedin.com/in/hemanth-h-e-8671b0256/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={14}/></a>
              <a href="https://github.com/hemanth2454" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={14}/></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">H.</span><span>HEMANTH<span className="brand-dot">.</span></span></a><span>Designed & built with curiosity.</span><span>© {new Date().getFullYear()} H.E. Hemanth</span></footer>
    </div>
  );
}
