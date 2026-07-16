import { getDifficultyBadgeClass } from "../lib/utils";

function ProblemDescription({
  problem,
  currentProblemId,
  onProblemChange,
  allProblems,
}) {
  return (
    <div className="h-full overflow-y-auto bg-slate-900 text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-3xl font-bold">{problem.title}</h1>

          <span
            className={`px-3 py-1 rounded text-sm ${getDifficultyBadgeClass(
              problem.difficulty
            )}`}
          >
            {problem.difficulty}
          </span>
        </div>

        <p className="text-gray-400 mb-4">{problem.category}</p>

        <select
          value={currentProblemId}
          onChange={(e) => onProblemChange(e.target.value)}
          className="w-full p-2 rounded bg-slate-800 border border-slate-700"
        >
          {allProblems.map((p) => (
            <option key={p.id} value={p.id}>
              {p.title} - {p.difficulty}
            </option>
          ))}
        </select>
      </div>

      {/* Description */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Description</h2>

        <p className="text-gray-300 mb-3">{problem.description.text}</p>

        {problem.description.notes.map((note, index) => (
          <p key={index} className="text-gray-300 mb-2">
            {note}
          </p>
        ))}
      </div>

      {/* Examples */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Examples</h2>

        {problem.examples.map((example, index) => (
          <div
            key={index}
            className="bg-slate-800 p-4 rounded mb-4 border border-slate-700"
          >
            <h3 className="font-semibold mb-2">
              Example {index + 1}
            </h3>

            <p>
              <strong>Input:</strong> {example.input}
            </p>

            <p>
              <strong>Output:</strong> {example.output}
            </p>

            {example.explanation && (
              <p className="mt-2 text-gray-400">
                <strong>Explanation:</strong> {example.explanation}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Constraints */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Constraints</h2>

        <ul className="list-disc ml-6 space-y-2 text-gray-300">
          {problem.constraints.map((constraint, index) => (
            <li key={index}>
              <code>{constraint}</code>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProblemDescription;
