import { useEffect, useState } from "react";

import Clock from "./components/Clock";
import Greeting from "./components/Greeting";
import Quote from "./components/Quote";
import ThemeToggle from "./components/ThemeToggle";
import Weather from "./components/Weather";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("motivation-theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );

    localStorage.setItem(
      "motivation-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={`app ${loaded ? "app-loaded" : ""}`}>
      {/* Animated background */}
      <div className="background">
        <div className="gradient-orb orb-one"></div>
        <div className="gradient-orb orb-two"></div>
        <div className="gradient-orb orb-three"></div>

        <div className="grid-background"></div>

        <div className="floating-particle particle-one"></div>
        <div className="floating-particle particle-two"></div>
        <div className="floating-particle particle-three"></div>
        <div className="floating-particle particle-four"></div>
        <div className="floating-particle particle-five"></div>
        <div className="floating-particle particle-six"></div>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="brand">
          <div className="brand-icon">
            ✦
          </div>

          <div>
            <h1>Motivation</h1>
            <span>YOUR DAILY SPARK</span>
          </div>
        </div>

        <div className="nav-actions">
          <div className="status-indicator">
            <span className="status-dot"></span>
            <span>Focus Mode</span>
          </div>

          <ThemeToggle
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </div>
      </nav>

      {/* Main content */}
      <section className="dashboard">

        {/* Hero section */}
        <section className="hero-section">

          <div className="hero-content">

            <div className="hero-badge">
              <span className="badge-pulse"></span>
              A NEW DAY. A NEW CHANCE.
            </div>

            <Greeting />

            <p className="hero-description">
              Start your day with purpose.
              <br />
              Small steps today create a better tomorrow.
            </p>

            <div className="hero-actions">
              <button
                className="primary-button"
                onClick={() => {
                  document
                    .querySelector(".quote-section")
                    ?.scrollIntoView({
                      behavior: "smooth"
                    });
                }}
              >
                <span>Get Inspired</span>
                <span className="button-arrow">→</span>
              </button>

              <button
                className="secondary-button"
                onClick={() => {
                  document
                    .querySelector(".stats-section")
                    ?.scrollIntoView({
                      behavior: "smooth"
                    });
                }}
              >
                Explore
              </button>
            </div>
          </div>

          {/* Hero visual */}
          <div className="hero-visual">

            <div className="hero-glow"></div>

            <div className="hero-ring ring-one"></div>
            <div className="hero-ring ring-two"></div>
            <div className="hero-ring ring-three"></div>

            <div className="hero-image-container">

              <div className="image-shine"></div>

              <img
                src="/src/assets/hero.png"
                alt="Motivation"
                className="hero-image"
              />

              <div className="image-overlay"></div>
            </div>

            <div className="floating-card floating-card-one">
              <span className="mini-icon">⚡</span>

              <div>
                <strong>Energy</strong>
                <small>100%</small>
              </div>
            </div>

            <div className="floating-card floating-card-two">
              <span className="mini-icon">🎯</span>

              <div>
                <strong>Focus</strong>
                <small>Locked in</small>
              </div>
            </div>

          </div>

        </section>

        {/* Information cards */}
        <section className="info-grid">

          <div className="glass-card clock-card">
            <Clock />
          </div>

          <div className="glass-card weather-card-wrapper">
            <Weather />
          </div>

        </section>

        {/* Quote */}
        <section className="quote-section">

          <div className="section-heading">
            <span className="section-label">
              DAILY MOTIVATION
            </span>

            <h2>
              Something to
              <span> remember.</span>
            </h2>
          </div>

          <Quote />

        </section>

        {/* Stats */}
        <section className="stats-section">

          <div className="section-heading center-heading">
            <span className="section-label">
              YOUR MINDSET
            </span>

            <h2>
              Progress starts
              <span> here.</span>
            </h2>
          </div>

          <div className="stats-grid">

            <div className="stat-card">
              <div className="stat-icon">🔥</div>

              <div className="stat-number">
                01
              </div>

              <div className="stat-title">
                Start Today
              </div>

              <p>
                Every journey begins with one decision.
              </p>
            </div>

            <div className="stat-card">
              <div className="stat-icon">⚡</div>

              <div className="stat-number">
                ∞
              </div>

              <div className="stat-title">
                Potential
              </div>

              <p>
                There is always another level to reach.
              </p>
            </div>

            <div className="stat-card">
              <div className="stat-icon">🚀</div>

              <div className="stat-number">
                GO
              </div>

              <div className="stat-title">
                Take Action
              </div>

              <p>
                Progress comes from consistent action.
              </p>
            </div>

          </div>

        </section>

        {/* Final CTA */}
        <section className="final-section">

          <div className="final-glow"></div>

          <div className="final-content">

            <span className="final-label">
              REMEMBER
            </span>

            <h2>
              You don't need
              <br />
              <span>motivation every day.</span>
            </h2>

            <p>
              Build discipline. Trust the process.
              Keep moving forward.
            </p>

            <div className="final-line">
              <span></span>
              <b>KEEP GOING</b>
              <span></span>
            </div>

          </div>

        </section>

      </section>

      {/* Footer */}
      <footer className="footer">

        <div className="footer-line"></div>

        <div className="footer-content">

          <span>
            © {new Date().getFullYear()} Motivation
          </span>

          <span className="footer-center">
            MADE WITH <span>♥</span> & CODE
          </span>

          <span>
            KEEP MOVING →
          </span>

        </div>

      </footer>
    </main>
  );
}

export default App;