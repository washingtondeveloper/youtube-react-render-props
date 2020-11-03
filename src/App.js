import React from "react";
import "./App.css";

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  render() {
    return (
      <div style={{ height: "100vh" }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

function RenderText({ mouse }) {
  return (
    <p>
      The current mouse position is ({mouse.x}, {mouse.y})
    </p>
  );
}

function RenderColors({ mouse }) {
  return (
    <div
      style={{
        width: 100,
        height: 100,
        backgroundColor: `${mouse.x <= 600 ? "blue" : "red"}`,
        color: "white",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: `${mouse.y / 16}px`,
      }}
    >
      COR
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Render Props</h1>
      <Mouse
        render={(mouse) => {
          return (
            <>
              <RenderText mouse={mouse} />
              <RenderColors mouse={mouse} />
            </>
          );
        }}
      />
    </div>
  );
}

export default App;
