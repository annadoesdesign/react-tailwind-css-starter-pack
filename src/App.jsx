import "./App.css";
import Pill from "./Pill.jsx"; // Ensure the path is correct
import useTheme from "./hooks/useTheme";
import Button from "./Button.jsx"; // Ensure this path is correct
import Card from "./Card.jsx";
import Avatar from "./Avatar.jsx";
import ComboBox from "./components/Combobox.jsx";

function App() {
  const { theme, toggleTheme } = useTheme();

  const options = [
    { label: "Option 1", icon: "🔥", subtext: "Description 1", pills: [{ text: "New", color: "blue" }] },
    { label: "Option 2", icon: "⭐" },
    { label: "Option 3", subtext: "Description 3" },
  ];

  
  return (
    <main
  className="min-h-screen bg-bg"
  theme={theme} // Dynamically set the theme
  style={{
    backgroundColor: theme === "light" ? "var(--bg)" : "var(--dark-bg)",
    borderColor: theme === "light" ? "var(--border)" : "var(--dark-border)",
    color: theme === "light" ? "var(--text)" : "var(--dark-text)",
  }}
>
         <Button
        variant="primary"
        size="medium"
        onClick={toggleTheme}
        leftIcon={theme === "light" ? <span>☀️</span> : <span>🌙</span>}
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </Button>

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


      <Pill color="yellow" theme={theme} >Yellow Pill</Pill>
       <Pill color="brown" theme={theme} >Brown Pill</Pill>
      <Pill color="cobaltblue" theme={theme} >Cobalt Blue Pill</Pill>
      <Pill color="coral" theme={theme} >Coral Pill</Pill>
      <Pill color="deepgreen" theme={theme} >Deep Green Pill</Pill>
      <Pill color="lavendar" theme={theme} >Lavender Pill</Pill>
      <Pill color="olive" theme={theme} >Olive Pill</Pill>
      <Pill color="trueyellow" theme={theme} >True Yellow</Pill>
      <Pill color="tangerine" theme={theme} >True Yellow</Pill>
      <Pill color="seafoam" theme={theme} >True Yellow</Pill>
      <Pill color="cyan" theme={theme} >True Yellow</Pill>
      <Pill color="grey" theme={theme} >Grey</Pill>
      <Pill color="purple" theme={theme} >Purple</Pill>
      <Pill color="blue" theme={theme} >Blue</Pill>
      <Pill color="outline" theme={theme} >Outline</Pill>
      <Pill color="blue" rounded="4px" theme={theme} >200px Rounded Pill</Pill>
      <Pill color="brown" rounded="4px" theme={theme} >Brown Pill</Pill>
      <Pill color="cobaltblue" rounded="4px" theme={theme} >Cobalt Blue Pill</Pill>
      <Pill color="coral" rounded="4px" theme={theme} >Coral Pill</Pill>
      <Pill color="deepgreen" rounded="4px" theme={theme} >Deep Green Pill</Pill>
      <Pill color="lavendar" rounded="4px" theme={theme} >Lavender Pill</Pill>
      <Pill color="olive" rounded="4px" theme={theme} >Olive Pill</Pill>
      <Pill color="trueyellow" rounded="4px" theme={theme} >True Yellow</Pill>
      <Pill color="tangerine" rounded="4px" theme={theme} >True Yellow</Pill>
      <Pill color="seafoam" rounded="4px" theme={theme} >True Yellow</Pill>
      <Pill color="cyan" rounded="4px" theme={theme} >True Yellow</Pill>
      <Pill color="grey" rounded="4px" theme={theme} >Grey</Pill>
      <Pill color="purple" rounded="4px" theme={theme} >Purple</Pill>
      <Pill color="blue" rounded="4px" theme={theme} >Blue</Pill>
      <Pill color="outline" rounded="4px" theme={theme} >Outline</Pill>

      <Avatar initials="AE" size="lg" theme={theme} />

      <ComboBox
          options={options}
          placeholder="Pick an option"
          size="md"
          theme={theme}
        />

    </main>
  );
}

export default App;