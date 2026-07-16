function OutputPanel({ output }) {
  return (
    <div className="h-full bg-slate-900 text-white flex flex-col">
      {/* Header */}
      <div className="p-3 border-b border-slate-700 font-semibold">
        Output
      </div>

      {/* Output */}
      <div className="flex-1 p-4 overflow-auto">
        {output === null ? (
          <p className="text-gray-400">
            Click <span className="font-semibold">Run Code</span> to see the
            output...
          </p>
        ) : output.success ? (
          <pre className="text-green-400 whitespace-pre-wrap">
            {output.output}
          </pre>
        ) : (
          <div>
            {output.output && (
              <pre className="text-white mb-3 whitespace-pre-wrap">
                {output.output}
              </pre>
            )}

            <pre className="text-red-400 whitespace-pre-wrap">
              {output.error}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default OutputPanel;






// function OutputPanel({ output }) {
//   return (
//     <div className="h-full bg-base-100 flex flex-col">
//       <div className="px-4 py-2 bg-base-200 border-b border-base-300 font-semibold text-sm">
//         Output
//       </div>
//       <div className="flex-1 overflow-auto p-4">
//         {output === null ? (
//           <p className="text-base-content/50 text-sm">Click "Run Code" to see the output here...</p>
//         ) : output.success ? (
//           <pre className="text-sm font-mono text-success whitespace-pre-wrap">{output.output}</pre>
//         ) : (
//           <div>
//             {output.output && (
//               <pre className="text-sm font-mono text-base-content whitespace-pre-wrap mb-2">
//                 {output.output}
//               </pre>
//             )}
//             <pre className="text-sm font-mono text-error whitespace-pre-wrap">{output.error}</pre>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
// export default OutputPanel;