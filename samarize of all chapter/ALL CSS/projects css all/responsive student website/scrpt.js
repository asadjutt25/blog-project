function calculateResult() {
    const totalInputs = document.querySelectorAll(".total");
    const obtainedInputs = document.querySelectorAll(".obtained");
  
    let total = 0;
    let obtained = 0;
  
    for (let i = 0; i < totalInputs.length; i++) {
      total += Number(totalInputs[i].value);
      obtained += Number(obtainedInputs[i].value);
    }
  
    const percentage = ((obtained / total) * 100).toFixed(2);
    let grade = "-";
    let cgpa = "-";
    let performance = "-";
  
    if (percentage >= 90) {
      grade = "A+";
      cgpa = "4.0";
      performance = "Excellent";
    } else if (percentage >= 80) {
      grade = "A";
      cgpa = "3.7";
      performance = "Very Good";
    } else if (percentage >= 70) {
      grade = "B";
      cgpa = "3.0";
      performance = "Good";
    } else if (percentage >= 50) {
      grade = "C";
      cgpa = "2.5";
      performance = "Better";
    } else if (percentage >= 30) {
      grade = "D";
      cgpa = "2.0";
      performance = "Poor";
    } else {
      grade = "F";
      cgpa = "0.0";
      performance = "Fail";
    }
  
    document.getElementById("totalMarks").innerText = total;
    document.getElementById("obtainedMarks").innerText = obtained;
    document.getElementById("percentage").innerText = percentage + "%";
    document.getElementById("grade").innerText = grade;
    document.getElementById("cgpa").innerText = cgpa;
    document.getElementById("performance").innerText = performance;
  }
  
  // Profile image preview
  document.getElementById("profile-img").addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
      document.getElementById("profileDisplay").src = URL.createObjectURL(file);
    }
  });