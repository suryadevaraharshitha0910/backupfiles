import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";
import { useAuth } from "../components/hooks/useAuth";


export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      login(
        {
          username: "admin",
          name: "Admin User",
        },
        ["user_read", "user_write"]
      );

      toast.success("Login Successful!");
      navigate(ROUTES.DASHBOARD);
    } else {
      toast.error("Invalid username or password");
    }
  };

  return (
    <div className="h-dvh overflow-hidden grid grid-cols-1 lg:grid-cols-2">
      
      <div className="relative hidden lg:block">
        <img
          src="/images/login-banner.jpg"
          alt="AI Learning"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 via-indigo-900/40 to-transparent" />

        <div className="absolute bottom-14 left-14 right-14 text-white">
          <p className="text-lg font-semibold tracking-wide">
            SkillZen AI Learning
          </p>

          <h1 className="mt-5 text-6xl font-bold leading-tight">
            Welcome to the Future
            <br />
            of Learning
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-200 leading-8">
            Experience AI-powered education with personalized learning paths,
            interactive courses and real-world projects designed for modern
            developers.
          </p>

          <p className="mt-20 text-sm text-gray-300">
            © 2026 SkillZen. All rights reserved.
          </p>
        </div>
      </div>

   
      <div className="flex items-center justify-center lg:justify-start bg-white px-4 py-4 lg:pl-35 lg:pr-6 lg:py-0">
          <div className="w-full max-w-[340px] lg:max-w-[380px]">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Welcome back!
          </h1>
          <p className="mt-2 text-gray-500">
            Please sign in to continue your learning journey
          </p>

     
          <div className="mt-5 space-y-5">
           
            <div>
              <label className="mb-2 block font-semibold">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-600 focus:outline-none"
              />
            </div>

           
            <div>
              <label className="mb-2 block font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 focus:border-blue-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 transition"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
              </div>
            </div>

          
            <div className="flex justify-end pt-1">
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
              className="mt-1 w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
            >
              Sign In
            </button>

       
            
          </div>
        </div>
      </div>
    </div>
  );
}
