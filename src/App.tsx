
import { useState } from "react";

import {
  CheckSquare,
  Bell,
  NotebookPen,
  Mic,
  Image,
  ShieldCheck,
  ArrowRight,
  Menu,
  X,
  CalendarDays,
  Clock3,
  Check,
  Sparkles,
  Smartphone,
  ListChecks,
  Cloud,
  CheckCircle,
  Plus,
  ChevronRight,
  Headphones,
} from "lucide-react";

import "./App.css";

const features = [
  {
    icon: CheckSquare,
    title: "Smart Task Management",
    description:
      "Create tasks, organize your daily activities and keep track of everything that matters.",
  },
  {
    icon: NotebookPen,
    title: "Quick Notes",
    description:
      "Capture ideas, save important information and keep your notes organized.",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description:
      "Stay on schedule with reminders for your important tasks and activities.",
  },
  {
    icon: Mic,
    title: "Voice Recording",
    description:
      "Record your thoughts and ideas whenever typing is not convenient.",
  },
  {
    icon: Image,
    title: "Image Attachments",
    description:
      "Keep images and important visual information alongside your notes.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy & Security",
    description:
      "Manage your personal information with account and privacy controls.",
  },
  {
    icon: ListChecks,
    title: "Interactive Checklists",
    description:
      "Break bigger activities into smaller steps and track your progress.",
  },
  {
    icon: Cloud,
    title: "Data Synchronization",
    description:
      "Access synchronized information across supported devices and services.",
  },
];

const benefits = [
  "Keep everyday tasks organized",
  "Save notes and important ideas",
  "Set reminders for important activities",
  "Manage your day in one place",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="website">

      {/* Navigation */}
      <header className="navbar">
        <div className="nav-container">

          <a href="#home" className="brand" onClick={closeMenu}>
            <span className="brand-icon">
              <CheckSquare size={23} strokeWidth={2.5} />
            </span>
            <span>Ekuripedu</span>
          </a>

          <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#features" onClick={closeMenu}>Features</a>
            <a href="#about" onClick={closeMenu}>About Us</a>
            <a href="/privacy-policy" onClick={closeMenu}>Privacy</a>
            <a href="/contact" onClick={closeMenu}>Contact</a>
          </nav>

          <a href="#download" className="nav-cta">
            Get Started <ArrowRight size={16} />
          </a>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

        </div>
      </header>

      <main>

        {/* Hero */}
        <section className="hero" id="home">
          <div className="hero-container">

            <div className="hero-content">

              <div className="hero-label">
                <Sparkles size={15} />
                YOUR EVERYDAY PRODUCTIVITY PARTNER
              </div>

              <h1>
                Make Every Day
                <br />
                <span>More Organized.</span>
              </h1>

              <p className="hero-description">
                Bring your tasks, notes and reminders together.
                Ekuripedu helps you stay organized and make
                every day more productive.
              </p>

              <div className="hero-buttons">
                <a href="#features" className="primary-button">
                  Explore Features <ArrowRight size={18} />
                </a>

                <a href="#about" className="secondary-button">
                  Discover Ekuripedu
                </a>
              </div>

              <div className="hero-highlights">
                <div>
                  <ShieldCheck size={18} />
                  <span>Privacy focused</span>
                </div>

                <div>
                  <Smartphone size={18} />
                  <span>Mobile friendly</span>
                </div>
              </div>

            </div>

            {/* Product Preview */}
            <div className="hero-visual">

              <div className="visual-glow" />

              <div className="dashboard-card">

                <div className="dashboard-top">
                  <div>
                    <span className="dashboard-subtitle">
                      YOUR WORKSPACE
                    </span>
                    <h3>My Day</h3>
                  </div>

                  <div className="profile-avatar">E</div>
                </div>

                <div className="dashboard-date">
                  <CalendarDays size={16} />
                  <span>Today's Overview</span>
                  <span className="today-badge">My Tasks</span>
                </div>

                <div className="progress-card">
                  <div className="progress-header">
                    <div>
                      <span>Daily Progress</span>
                      <h2>Stay on track</h2>
                    </div>

                    <div className="progress-number">75%</div>
                  </div>

                  <div className="progress-track">
                    <div className="progress-fill" />
                  </div>

                  <span className="progress-caption">
                    Example dashboard preview
                  </span>
                </div>

                <div className="task-heading">
                  <h4>My Tasks</h4>
                  <span>Preview</span>
                </div>

                <div className="task-item">
                  <span className="task-check completed">
                    <Check size={14} />
                  </span>
                  <div className="task-info">
                    <strong>Review daily activities</strong>
                    <span>Completed</span>
                  </div>
                  <CheckCircle className="task-status" size={19} />
                </div>

                <div className="task-item">
                  <span className="task-check">
                    <Check size={14} />
                  </span>
                  <div className="task-info">
                    <strong>Organize important notes</strong>
                    <span>Personal</span>
                  </div>
                  <Clock3 className="task-status" size={19} />
                </div>

                <div className="task-item">
                  <span className="task-check">
                    <Check size={14} />
                  </span>
                  <div className="task-info">
                    <strong>Plan upcoming activities</strong>
                    <span>Upcoming</span>
                  </div>
                  <CalendarDays className="task-status" size={19} />
                </div>

                <div className="dashboard-bottom">
                  <div className="mini-feature-icon">
                    <NotebookPen size={19} />
                  </div>
                  <div>
                    <strong>Quick Notes</strong>
                    <p>Your ideas, all in one place.</p>
                  </div>
                  <ChevronRight size={19} />
                </div>

              </div>

              <div className="floating-card floating-reminder">
                <div className="floating-icon">
                  <Bell size={19} />
                </div>
                <div>
                  <strong>Stay on time</strong>
                  <span>Smart reminders</span>
                </div>
              </div>

              <div className="floating-card floating-note">
                <div className="floating-icon note-icon">
                  <NotebookPen size={19} />
                </div>
                <div>
                  <strong>Quick Notes</strong>
                  <span>Capture your ideas</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Brand Statement */}
        <section className="brand-statement">
          <div>
            <ShieldCheck size={20} />
            <span>One place for your everyday productivity</span>
          </div>
          <div>
            <CheckCircle size={20} />
            <span>Designed for simpler task management</span>
          </div>
          <div>
            <Smartphone size={20} />
            <span>Built for everyday use</span>
          </div>
        </section>

        {/* Features */}
        <section className="features-section" id="features">

          <div className="section-heading">
            <span className="section-label">WHAT YOU CAN DO</span>

            <h2>
              Everything you need.
              <br />
              <span>All in one place.</span>
            </h2>

            <p>
              A collection of useful tools designed to help
              you manage tasks, capture ideas and stay organized.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <article className="feature-card" key={feature.title}>
                  <div className="feature-card-top">
                    <div className="feature-icon">
                      <Icon size={23} />
                    </div>
                    <span className="feature-number">
                      0{index + 1}
                    </span>
                  </div>

                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>

                  <div className="feature-arrow">
                    <ArrowRight size={17} />
                  </div>
                </article>
              );
            })}
          </div>

        </section>

        {/* About */}
        <section className="about-section" id="about">

          <div className="about-visual">
            <div className="about-decoration decoration-one" />
            <div className="about-decoration decoration-two" />

            <div className="about-main-card">
              <div className="about-main-icon">
                <CheckSquare size={35} />
              </div>

              <span>EKURIPEDU</span>

              <h3>
                Your day.
                <br />
                Your tasks.
                <br />
                Your progress.
              </h3>

              <div className="about-check-list">
                {benefits.map((benefit) => (
                  <div key={benefit}>
                    <span><Check size={14} /></span>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-content">
            <span className="section-label">ABOUT EKURIPEDU</span>

            <h2>
              A simpler way
              <br />
              to organize your
              <span> everyday life.</span>
            </h2>

            <p>
              Ekuripedu is a productivity application designed
              to bring your everyday tasks, personal notes
              and reminders into one convenient space.
            </p>

            <p>
              Whether you are planning your day, recording
              an idea or managing important activities,
              Ekuripedu helps you keep everything organized.
            </p>

            <a href="#features" className="text-link">
              Discover our features <ArrowRight size={18} />
            </a>
          </div>

        </section>

        {/* How it works */}
        <section className="workflow-section">

          <div className="section-heading">
            <span className="section-label">SIMPLE BY DESIGN</span>

            <h2>
              Your productivity,
              <span> made simple.</span>
            </h2>

            <p>
              Get started with a simple approach to
              everyday organization.
            </p>
          </div>

          <div className="workflow-grid">

            <div className="workflow-card">
              <span className="workflow-step">01</span>
              <div className="workflow-icon">
                <Plus size={25} />
              </div>
              <h3>Create</h3>
              <p>Add tasks, write notes and capture important ideas.</p>
            </div>

            <div className="workflow-card">
              <span className="workflow-step">02</span>
              <div className="workflow-icon">
                <ListChecks size={25} />
              </div>
              <h3>Organize</h3>
              <p>Keep your activities organized and easy to manage.</p>
            </div>

            <div className="workflow-card">
              <span className="workflow-step">03</span>
              <div className="workflow-icon">
                <CheckCircle size={25} />
              </div>
              <h3>Accomplish</h3>
              <p>Track your progress and complete your daily activities.</p>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="cta-section" id="download">

          <div className="cta-content">
            <div className="cta-icon">
              <Sparkles size={25} />
            </div>

            <span>MAKE YOUR DAY COUNT</span>

            <h2>
              Ready to get
              <br />
              more organized?
            </h2>

            <p>
              Bring your daily tasks, notes and reminders
              together with Ekuripedu.
            </p>

            <a href="#features" className="cta-button">
              Explore Ekuripedu <ArrowRight size={18} />
            </a>
          </div>

        </section>

      </main>

      {/* Footer */}
      <footer className="footer">

        <div className="footer-main">

          <div className="footer-brand-section">
            <a href="#home" className="brand footer-brand">
              <span className="brand-icon">
                <CheckSquare size={23} />
              </span>
              Ekuripedu
            </a>

            <p>
              A simpler way to manage your everyday
              tasks, notes and reminders.
            </p>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#about">About Us</a>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms & Conditions</a>
            <a href="/delete-account">Delete Account</a>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <a href="/contact">
              <Headphones size={15} /> Contact Us
            </a>
            <a href="mailto:support@yourdomain.com">
              Email Support
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Ekuripedu.
            All rights reserved.
          </p>

          <span>
            Made for a more organized day.
          </span>
        </div>

      </footer>

    </div>
  );
}

export default App;
