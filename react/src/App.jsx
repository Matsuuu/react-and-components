import './App.css'

const parts = [
    { href: "/properties", title: "Properties" },
    { href: "/change-detection", title: "Change detection" },
    { href: "/expressions", title: "Expression" },
    { href: "/conditional-rendering", title: "Conditional Rendering" },
    { href: "/lists-and-arrays", title: "Lists and arrays" },
    { href: "/nesting", title: "Nesting" },
    { href: "/element-composition", title: "Composing elements" },
    { href: "/part-composition", title: "Composing parts" },
    { href: "/styling", title: "Styling components" },
    { href: "/working-with-shadow-dom", title: "Working with shadow dom" },
];

function App() {
  console.log("Hello world!");

    function renderDemo() {
        const path = window.location.pathname;
        console.log(path)

        switch(path) {
            case "/properties": return <h3>Properties</h3>
            case "/change-detection": return <h3> Change detection</h3>
            case "/expressions": return <h3> Expression</h3>
            case "/conditional-rendering": return <h3> Conditional Rendering</h3>
            case "/lists-and-arrays": return <h3> Lists and arrays</h3>
            case "/nesting": return <h3> Nesting</h3>
            case "/element-composition": return <h3> Composing elements</h3>
            case "/part-composition": return <h3> Composing parts</h3>
            case "/styling": return <h3> Styling components</h3>
            case "/working-with-shadow-dom": return <h3> Working with shadow dom</h3>
            default:
                return <></>
        }
    }

  return (
    <div className="App">
      <h2>Web Components Workshop</h2>
      <section>
        {renderDemo()}

          <ul>
            {parts.map(part => <li key={part.href}><a href={part.href}>{part.title}</a></li>)}
          </ul>
      </section>

    </div>
  )
}

export default App
