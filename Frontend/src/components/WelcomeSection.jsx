import { useUser } from "@clerk/react";
import { ArrowRightIcon } from "lucide-react";

function WelcomeSection({ onCreateSession }) {
  const { user } = useUser();

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 flex items-center justify-between shadow-lg">
      {/* Left Side */}
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">
          Welcome, {user?.firstName || "User"} 👋
        </h1>

        <p className="text-slate-400 text-lg">
          Ready to practice coding and improve your interview skills?
        </p>
      </div>

      {/* Right Side */}
      <button
        onClick={onCreateSession}
        className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition"
      >
        Create Session
        <ArrowRightIcon size={18} />
      </button>
    </div>
  );
}

export default WelcomeSection;