export default function LoginPage() {
  return (
    <div className="min-h-screen bg-blue-950 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-900 mb-6 text-center">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-3 py-2 border rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-3 py-2 border rounded"
        />

        <button className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800">
          Login
        </button>
      </div>
    </div>
  );
}