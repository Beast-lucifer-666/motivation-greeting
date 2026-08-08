function ThemeToggle({
  darkMode,
  setDarkMode
}) {
  return (
    <button
      className={`theme-toggle ${
        darkMode ? "dark-active" : ""
      }`}
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <span className="toggle-track">

        <span className="toggle-icon sun">
          ☀
        </span>

        <span className="toggle-icon moon">
          ☾
        </span>

        <span className="toggle-knob"></span>

      </span>
    </button>
  );
}

export default ThemeToggle;