import { Link } from "react-router";
import { ArrowRightIcon, RocketIcon } from "lucide-react";
import { SignInButton } from "@clerk/react";

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white">
      {/* Navbar */}
      <nav className="border-b border-emerald-900/40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 text-2xl font-bold text-emerald-400"
          >
            <RocketIcon className="w-8 h-8" />
            <span>Interview Prep</span>
          </Link>

          {/* Button */}
          <SignInButton mode="modal">
            <button className="bg-emerald-600 hover:bg-emerald-500 px-5 py-2 rounded-lg flex items-center gap-2 transition">
              Get Started
              <ArrowRightIcon size={18} />
            </button>
          </SignInButton>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Practice <span className="text-emerald-400">Coding</span>
              <br />
              Interviews
            </h1>

            <p className="text-slate-300 text-lg leading-8 mb-8">
              The ultimate platform for collaborative coding interviews and pair
              programming. Connect face-to-face, code in real-time, learn to
              master problem-solving and ace technical interviews with
              confidence.
            </p>

            {/* Features */}
            <ul className="space-y-4 text-lg mb-10">
              <li>
                <span className="text-emerald-400">✔</span> Live Video Call
              </li>
              <li>
                <span className="text-emerald-400">✔</span> Real-Time Code
                Editor
              </li>
              <li>
                <span className="text-emerald-400">✔</span> DSA Practice
              </li>
            </ul>

            {/* Start Button */}
            <SignInButton mode="modal">
              <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-3 rounded-lg font-semibold transition">
                Start Now
              </button>
            </SignInButton>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <img
              src="/hero.png"
              alt="Interview Prep"
              className="w-full max-w-xl rounded-xl drop-shadow-[0_0_35px_rgba(16,185,129,0.25)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
