function PartHeader() {
  return <h1>Motorcycle Parts Shop</h1>;
}

function PartTagline() {
  return <p>High‑performance parts for your ride.</p>;
}

function App() {
  return (
    <div>
      <PartHeader />
      <PartTagline />
      <p>Welcome to the store!</p>
    </div>
  );
}

export default App;