import "./App.css";
import Pill from "./components/Pill.jsx"; // Ensure the path is correct
import useTheme from "./hooks/useTheme";
import Button from "./components/Button.jsx";
import Card from "./components/Card.jsx";
import Avatar from "./components/Avatar.jsx";
import ComboBox from "./components/Combobox.jsx";

function App() {
  const { theme, toggleTheme } = useTheme();

  const options = [
    { label: "Option 1", icon: "🔥", subtext: "Description 1", pills: [{ text: "New", color: "blue" }] },
    { label: "Option 2", icon: "⭐" },
    { label: "Option 3", subtext: "Description 3" },
  ];

  const pillColors = [
    "yellow",
    "brown",
    "cobaltblue",
    "coral",
    "deepgreen",
    "lavendar",
    "olive",
    "trueyellow",
    "tangerine",
    "seafoam",
    "cyan",
    "grey",
    "purple",
    "blue",
    "outline",
  ];

  return (
    <main
      className="min-h-screen bg-bg"
      theme={theme} // Dynamically set the theme
      style={{
        backgroundColor: theme === "light" ? "var(--bg)" : "var(--dark-bg)",
        color: theme === "light" ? "var(--text)" : "var(--dark-text)",
      }}
    >
      {/* Theme Toggle Button */}
      <Button
        variant="primary"
        size="medium"
        onClick={toggleTheme}
        leftIcon={theme === "light" ? <span>☀️</span> : <span>🌙</span>}
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </Button>

      {/* Card Component */}
      <div className="mt-6">
        <Card
          theme={theme}
          avatar={<Avatar initials="AE" size="xl" theme={theme} />}
          title="Card Title"
          subtitle="Card Subtitle"
          pillProps={{ color: "green", text: "2%" }}
        >
          <Button
            variant="primary"
            size="small"
            onClick={() => alert("Button in card clicked!")}
          >
            Click me
          </Button>
        </Card>
      </div>

     {/* Pill Components */}
<div className="mt-6 flex flex-wrap gap-4">
  {pillColors.map((color) => (
    <Pill 
      key={color} 
      color={color} 
      theme={theme} 
      className="inline-flex items-center px-3 py-1 w-auto"
    >
      {color.charAt(0).toUpperCase() + color.slice(1)} Pill
    </Pill>
  ))}
</div>

{/* Rounded Pill Variants */}
<div className="mt-6 flex flex-wrap gap-4">
  {pillColors.map((color) => (
    <Pill 
      key={`rounded-${color}`} 
      color={color} 
      rounded="4px" 
      theme={theme} 
      className="inline-flex items-center px-3 py-1 w-auto"
    >
      {color.charAt(0).toUpperCase() + color.slice(1)} Rounded Pill
    </Pill>
  ))}
</div>

      {/* Avatar Component */}
      <div className="mt-6">
        <Avatar initials="AE" size="lg" theme={theme} />
      </div>

      {/* ComboBox Component */}
      <div className="mt-6">
        <ComboBox
          options={options}
          placeholder="Pick an option"
          size="md"
          theme={theme}
        />
      </div>
    </main>
  );
}

export default App;