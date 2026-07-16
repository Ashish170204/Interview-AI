import {
  ArrowRightIcon,
  UsersIcon,
  LoaderIcon,
  Code2Icon,
} from "lucide-react";
import { Link } from "react-router";
import { getDifficultyBadgeClass } from "../lib/utils";

function ActiveSessions({ sessions, isLoading, isUserInSession }) {
  return (
    <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-white">
          Live Sessions
        </h2>

        <p className="text-emerald-400 font-medium">
          {sessions.length} Active
        </p>
      </div>

      {/* Loading */}
      {isLoading ? (
        <div className="flex justify-center py-20">
          <LoaderIcon className="w-10 h-10 animate-spin text-emerald-500" />
        </div>
      ) : sessions.length === 0 ? (
        // Empty State
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">
            No live sessions available.
          </p>

          <p className="text-gray-500 mt-2">
            Create the first session!
          </p>
        </div>
      ) : (
        // Session List
        <div className="space-y-4">
          {sessions.map((session) => (
            <div
              key={session._id}
              className="bg-[#273449] rounded-lg p-5 flex justify-between items-center hover:border hover:border-emerald-500 transition"
            >
              {/* Left */}
              <div className="flex items-center gap-4">
                <div className="bg-emerald-600 p-3 rounded-lg">
                  <Code2Icon className="text-white" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {session.problem}
                  </h3>

                  <div className="flex items-center gap-3 mt-2">
                    <span
                      className={`badge ${getDifficultyBadgeClass(
                        session.difficulty
                      )}`}
                    >
                      {session.difficulty}
                    </span>

                    <div className="flex items-center gap-1 text-gray-300">
                      <UsersIcon size={16} />
                      {session.participant ? "2/2" : "1/2"}
                    </div>

                    <span className="text-gray-400">
                      Host: {session.host?.name}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right */}
              {session.participant && !isUserInSession(session) ? (
                <button
                  disabled
                  className="bg-gray-600 text-white px-4 py-2 rounded"
                >
                  Full
                </button>
              ) : (
                <Link
                  to={`/session/${session._id}`}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2 rounded-lg flex items-center gap-2"
                >
                  {isUserInSession(session) ? "Rejoin" : "Join"}

                  <ArrowRightIcon size={18} />
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ActiveSessions;