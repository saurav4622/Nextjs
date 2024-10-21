// src/app/page.tsx

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm border border-gray-300">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Username</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              placeholder="Enter your password"
            />
          </div>
          <button 
            className="bg-blue-600 text-white py-3 px-4 rounded-lg w-full hover:bg-blue-700 transition duration-300 border border-transparent"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-600">
          Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}
