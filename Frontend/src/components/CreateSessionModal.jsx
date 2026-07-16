import { LoaderIcon } from "lucide-react";
import { PROBLEMS } from "../data/problems";

function CreateSessionModal({
  isOpen,
  onClose,
  roomConfig,
  setRoomConfig,
  onCreateRoom,
  isCreating,
}) {
  const problems = Object.values(PROBLEMS);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-[#1e293b] rounded-xl p-6 w-[450px] text-white">

        <h2 className="text-2xl font-bold mb-6">
          Create Session
        </h2>

        <select
          className="w-full p-3 rounded-lg bg-[#273449] border border-gray-600"
          value={roomConfig.problem}
          onChange={(e) => {
            const selectedProblem = problems.find(
              (p) => p.title === e.target.value
            );

            setRoomConfig({
              problem: selectedProblem.title,
              difficulty: selectedProblem.difficulty,
            });
          }}
        >
          <option value="">Select Problem</option>

          {problems.map((problem) => (
            <option key={problem.id} value={problem.title}>
              {problem.title}
            </option>
          ))}
        </select>

        {roomConfig.problem && (
          <div className="mt-5 p-4 rounded-lg bg-[#273449]">
            <p>
              <strong>Problem:</strong> {roomConfig.problem}
            </p>

            <p>
              <strong>Difficulty:</strong> {roomConfig.difficulty}
            </p>
          </div>
        )}

        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={onClose}
            className="bg-gray-600 hover:bg-gray-500 px-5 py-2 rounded-lg"
          >
            Cancel
          </button>

          <button
            disabled={!roomConfig.problem || isCreating}
            onClick={onCreateRoom}
            className="bg-emerald-600 hover:bg-emerald-500 px-5 py-2 rounded-lg flex items-center gap-2 disabled:opacity-50"
          >
            {isCreating && (
              <LoaderIcon className="animate-spin" size={18} />
            )}

            {isCreating ? "Creating..." : "Create"}
          </button>
        </div>

      </div>
    </div>
  );
}

export default CreateSessionModal;