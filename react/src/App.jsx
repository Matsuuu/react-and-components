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

        switch(path) {

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
