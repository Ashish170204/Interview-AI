const JUDGE0_API = "https://ce.judge0.com";

const LANGUAGE_IDS = {
  javascript: 63,
  python: 71,
  java: 62,
  cpp: 54,
};

export async function executeCode(language, code) {
  try {
    const languageId = LANGUAGE_IDS[language];

    if (!languageId) {
      return {
        success: false,
        error: `Unsupported language: ${language}`,
      };
    }

    const response = await fetch(
      `${JUDGE0_API}/submissions?base64_encoded=false&wait=true`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language_id: languageId,
          source_code: code,
        }),
      }
    );

    if (!response.ok) {
      return {
        success: false,
        error: `HTTP Error ${response.status}`,
      };
    }

    const data = await response.json();

    if (data.compile_output) {  //compile error.
      return {
        success: false,
        error: data.compile_output,
      };
    }
 
    if (data.stderr) {        //runtime error.
      return {
        success: false,
        error: data.stderr,
      };
    }

    return {
      success: true,
      output: data.stdout || "No output",
    };
  } catch (err) {
    return {
      success: false,
      error: err.message,
    };
  }
}
