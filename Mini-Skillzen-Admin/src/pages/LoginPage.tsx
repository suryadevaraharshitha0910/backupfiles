import { useState } from "react";
import { Eye, EyeOff, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function handleLogin() {
  if (username === "admin" && password === "123") {
    navigate("/dashboard");
  } else {
    alert("Invalid Credentials");
  }
}

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6 py-8">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

      
        <div className="flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-100">
            <GraduationCap
              size={54}
              className="text-blue-600"
            />
          </div>
        </div>

     
        <div className="mt-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Mini SkillZen
          </h1>

          <p className="mt-2 text-gray-500">
            Sign in to continue to the Admin Dashboard
          </p>
        </div>

      
        <div className="mt-8 space-y-5">

         
          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 focus:border-blue-600 focus:outline-none"
            />
          </div>

          
          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Password
            </label>

            <div className="relative">
              <input
                type={
                  showPassword ? "text" : "password"
                }
                placeholder="Enter password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 pr-12 focus:border-blue-600 focus:outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
              >
                {showPassword ? (
                  <Eye size={20} />
                ) : (
                  <EyeOff size={20} />
                )}
              </button>
            </div>
          </div>

          
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

    
          <button
            type="button"
            onClick={handleLogin}
            className="w-full rounded-xl bg-blue-600 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}