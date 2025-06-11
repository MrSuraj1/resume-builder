
    function generateResume() {
      const get = id => document.getElementById(id).value;
   const resume = `
${get("fullName")}
${get("address")} | ${get("phone")} | ${get("email")}
LinkedIn: ${get("linkedin")} | GitHub: ${get("github")}

<span class="section-highlight">Professional Summary:</span>
${get("summary")}

<span class="section-highlight">Education:</span>
${get("degree")} - ${get("university")}, ${get("graduationYear")}

<span class="section-highlight">Skills:</span>
${get("skills")}

<span class="section-highlight">Work Experience:</span>
${get("jobTitle")} at ${get("companyName")} (${get("workDuration")})
${get("jobDescription")}

<span class="section-highlight">Projects:</span>
${get("projects")}

<span class="section-highlight">Certifications:</span>
${get("certifications")}

<span class="section-highlight">Languages Known:</span>
${get("languages")}
`;
  document.getElementById("resumeContent").innerHTML = resume;
      document.getElementById("resumePreview").style.display = "block";
    }
function printResume() {
  const printContents = document.querySelector('.resume-preview').innerHTML;
  const originalContents = document.body.innerHTML;

  document.body.innerHTML = `
    <html>
    <head>
      <title>Resume</title>
      <style>
        body {
          font-family: 'Segoe UI', sans-serif;
          padding: 40px;
          background: white;
        }
        h3 {
          text-align: center;
        }
        pre {
          white-space: pre-wrap;
          font-size: 16px;
          line-height: 1.6;
        }
        .section-highlight {
          color: #0d6efd;
          font-weight: 600;
          margin-top: 16px;
          display: block;
        }
      </style>
    </head>
    <body>${printContents}</body>
    </html>
  `;

  window.print();
  document.body.innerHTML = originalContents;
  location.reload(); // reloads the page to return to normal UI
}

    function generateResume() {
      const get = id => document.getElementById(id).value;
   const resume = `
${get("fullName")}
${get("address")} | ${get("phone")} | ${get("email")}
LinkedIn: ${get("linkedin")} | GitHub: ${get("github")}

<span class="section-highlight">Professional Summary:</span>
${get("summary")}

<span class="section-highlight">Education:</span>
${get("degree")} - ${get("university")}, ${get("graduationYear")}

<span class="section-highlight">Skills:</span>
${get("skills")}

<span class="section-highlight">Work Experience:</span>
${get("jobTitle")} at ${get("companyName")} (${get("workDuration")})
${get("jobDescription")}

<span class="section-highlight">Projects:</span>
${get("projects")}

<span class="section-highlight">Certifications:</span>
${get("certifications")}

<span class="section-highlight">Languages Known:</span>
${get("languages")}
`;
  document.getElementById("resumeContent").innerHTML = resume;
      document.getElementById("resumePreview").style.display = "block";
    }
function printResume() {
  const printContents = document.querySelector('.resume-preview').innerHTML;
  const originalContents = document.body.innerHTML;

  document.body.innerHTML = `
    <html>
    <head>
      <title>Resume</title>
      <style>
        body {
          font-family: 'Segoe UI', sans-serif;
          padding: 40px;
          background: white;
        }
        h3 {
          text-align: center;
        }
        pre {
          white-space: pre-wrap;
          font-size: 16px;
          line-height: 1.6;
        }
        .section-highlight {
          color: #0d6efd;
          font-weight: 600;
          margin-top: 16px;
          display: block;
        }
      </style>
    </head>
    <body>${printContents}</body>
    </html>
  `;

  window.print();
  document.body.innerHTML = originalContents;
  location.reload(); // reloads the page to return to normal UI
}