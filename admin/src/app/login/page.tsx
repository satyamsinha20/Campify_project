export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-2xl shadow-md w-80 flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-center">Admin Login</h2>

        <input
          type="email"
          placeholder="Enter email"
          className="border p-2 rounded-lg"
        />

        <input
          type="password"
          placeholder="Enter password"
          className="border p-2 rounded-lg"
        />

        <button
          type="submit"
          className="bg-black text-white py-2 rounded-lg hover:bg-gray-800"
        >
          Login
        </button>
      </form>
    </div>
  );
}