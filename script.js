function analyzeResume() {
  const resumeText = document.getElementById("resume").value.toLowerCase();
  const jobText = document.getElementById("job").value.toLowerCase();
  const resultBox = document.getElementById("result");

  if (!resumeText || !jobText) {
    resultBox.innerHTML = "⚠ Please enter both Resume and Job Description.";
    return;
  }

  const jobWords = jobText.match(/\b\w+\b/g);
  const resumeWords = resumeText.match(/\b\w+\b/g);

  const uniqueJobWords = [...new Set(jobWords)];
  let matchCount = 0;
  let missingSkills = [];

  uniqueJobWords.forEach(word => {
    if (resumeWords.includes(word)) {
      matchCount++;
    } else if (word.length > 4) { // filter small words
      missingSkills.push(word);
    }
  });

  const matchPercent = ((matchCount / uniqueJobWords.length) * 100).toFixed(2);

  resultBox.innerHTML = `
    <h3>Match Score: ${matchPercent}%</h3>
    <p><strong>Missing Keywords:</strong> ${missingSkills.slice(0, 10).join(", ")}</p>
  `;
}
