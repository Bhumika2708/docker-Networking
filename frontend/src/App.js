function App() {
  return (
    <div className="min-h-screen animated-bg flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl text-center text-white w-[420px]">
        <h1 className="text-3xl font-bold mb-4">
          Docker Networking Demo
        </h1>
        <p className="text-blue-200 mb-6">
          React Frontend → Flask Backend → MongoDB
        </p>
        <button
  onClick={() => {
    fetch("http://localhost:5000")
  .then(res => res.text())
  .then(data => alert(data))
  .catch(err => alert("ERROR: " + err))
 }}
  className="bg-white text-blue-700 px-6 py-2 rounded-xl font-semibold hover:scale-105 transition"
>
  Call Backend
         </button>




      </div>
    </div>
  );
}

export default App;
