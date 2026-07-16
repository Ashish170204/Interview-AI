import { Link } from "react-router";
import Navbar from "../components/Navbar";
import { PROBLEMS } from "../data/problems";
import { ChevronRightIcon, Code2Icon } from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";

function ProblemsPage() {
  const problems = Object.values(PROBLEMS);

  const easy = problems.filter((p) => p.difficulty === "Easy").length;
  const medium = problems.filter((p) => p.difficulty === "Medium").length;
  const hard = problems.filter((p) => p.difficulty === "Hard").length;

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Practice Problems</h1>
          <p className="text-slate-400 mt-2">
            Sharpen your coding skills with curated DSA problems.
          </p>
        </div>

        {/* Problems */}
        <div className="space-y-5">
          {problems.map((problem) => (
            <Link
              key={problem.id}
              to={`/problem/${problem.id}`}
              className="block bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition"
            >
              <div className="flex justify-between items-center">
                {/* Left */}
                <div className="flex gap-4">
                  <div className="bg-emerald-600 p-3 rounded-lg">
                    <Code2Icon className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl font-semibold">{problem.title}</h2>

                      <span
                        className={`px-2 py-1 text-sm rounded font-medium ${
                          problem.difficulty === "Easy"
                            ? " bg-emerald-400 text-white"
                            : problem.difficulty === "Medium"
                              ? "bg-yellow-400 text-black"
                              : "bg-red-400 text-white"
                        }`}
                      >
                        {problem.difficulty}
                      </span>
                    </div>

                    <p className="text-slate-400 text-sm mt-1">
                      {problem.category}
                    </p>

                    <p className="text-slate-300 mt-3">
                      {problem.description.text}
                    </p>
                  </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-2 text-emerald-400">
                  <span>Solve</span>
                  <ChevronRightIcon size={20} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-10 bg-slate-800 rounded-lg p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-slate-400">Total</p>
              <h2 className="text-3xl font-bold text-emerald-400">
                {problems.length}
              </h2>
            </div>

            <div>
              <p className="text-slate-400">Easy</p>
              <h2 className="text-3xl font-bold text-green-400">{easy}</h2>
            </div>

            <div>
              <p className="text-slate-400">Medium</p>
              <h2 className="text-3xl font-bold text-yellow-400">{medium}</h2>
            </div>

            <div>
              <p className="text-slate-400">Hard</p>
              <h2 className="text-3xl font-bold text-red-400">{hard}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProblemsPage;



// import { Link } from "react-router";
// import Navbar from "../components/Navbar";
// import { PROBLEMS } from "../data/problems";

// import { ChevronRightIcon, Code2Icon } from "lucide-react";
// import { getDifficultyBadgeClass } from "../lib/utils";

// function ProblemsPage() {
//   const problems = Object.values(PROBLEMS);

//   const easyProblemsCount = problems.filter((p) => p.difficulty === "Easy").length;
//   const mediumProblemsCount = problems.filter((p) => p.difficulty === "Medium").length;
//   const hardProblemsCount = problems.filter((p) => p.difficulty === "Hard").length;

//   return (
//     <div className="min-h-screen bg-base-200">
//       <Navbar />

//       <div className="max-w-6xl mx-auto px-4 py-12">
//         {/* HEADER */}
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold mb-2">Practice Problems</h1>
//           <p className="text-base-content/70">
//             Sharpen your coding skills with these curated problems
//           </p>
//         </div>

//         {/* PROBLEMS LIST */}
//         <div className="space-y-4">
//           {problems.map((problem) => (
//             <Link
//               key={problem.id}
//               to={`/problem/${problem.id}`}
//               className="card bg-base-100 hover:scale-[1.01] transition-transform"
//             >
//               <div className="card-body">
//                 <div className="flex items-center justify-between gap-4">
//                   {/* LEFT SIDE */}
//                   <div className="flex-1">
//                     <div className="flex items-center gap-3 mb-2">
//                       <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
//                         <Code2Icon className="size-6 text-primary" />
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex items-center gap-2 mb-1">
//                           <h2 className="text-xl font-bold">{problem.title}</h2>
//                           <span className={`badge ${getDifficultyBadgeClass(problem.difficulty)}`}>
//                             {problem.difficulty}
//                           </span>
//                         </div>
//                         <p className="text-sm text-base-content/60"> {problem.category}</p>
//                       </div>
//                     </div>
//                     <p className="text-base-content/80 mb-3">{problem.description.text}</p>
//                   </div>
//                   {/* RIGHT SIDE */}

//                   <div className="flex items-center gap-2 text-primary">
//                     <span className="font-medium">Solve</span>
//                     <ChevronRightIcon className="size-5" />
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* STATS FOOTER */}
//         <div className="mt-12 card bg-base-100 shadow-lg">
//           <div className="card-body">
//             <div className="stats stats-vertical lg:stats-horizontal">
//               <div className="stat">
//                 <div className="stat-title">Total Problems</div>
//                 <div className="stat-value text-primary">{problems.length}</div>
//               </div>

//               <div className="stat">
//                 <div className="stat-title">Easy</div>
//                 <div className="stat-value text-success">{easyProblemsCount}</div>
//               </div>
//               <div className="stat">
//                 <div className="stat-title">Medium</div>
//                 <div className="stat-value text-warning">{mediumProblemsCount}</div>
//               </div>
//               <div className="stat">
//                 <div className="stat-title">Hard</div>
//                 <div className="stat-value text-error">{hardProblemsCount}</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default ProblemsPage;