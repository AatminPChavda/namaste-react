/*

<div id=parent>
    <div id=child1>
        <h1>I'm an h1 tag</h1>
        <h2>I'm an h2 tag</h2>
    </div>
    <div id=child2>
        <h1>I'm an h1 tag</h1>
        <h2>I'm an h2 tag</h2>
    </div>
</div>

ReactElement(Object) => HTML(Browser Understands)

*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);

console.log(parent); // parent -> object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
