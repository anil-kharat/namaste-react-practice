/**
 * <div>
 *      <div>
 *          <h1>Heading</h1>
 *      </div>
 * </div>
 */

/* const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from react"
); */

const parentDiv = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm heading"),
    React.createElement("h1", {}, "I'm h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm heading"),
    React.createElement("h1", {}, "I'm h2"),
  ]),
]);

console.log(parentDiv);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentDiv);
