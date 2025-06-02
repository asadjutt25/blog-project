window.onload = function(){
    const savedata=JSON.parse(localstorage.getitem("attendenceData"));
        if (savedData) {
            const rows = document.querySelectorAll("#attendanceTable tbody tr");
            rows.forEach((row, index) => {
                if (savedData[index]) {
                    row.querySelector("select").value = savedData[index].status;
                }
            });
        }
    };

function saveAttendance() {
    const rows = document.querySelectorAll("#attendanceTable tbody tr");

let attendanceData = [];
rows.forEach(row => {
    const name = row.cells[0].innerText;
    const status = row.cells[1].querySelector("select").value;
    attendanceData.push({ name, status });
});

localStorage.setItem("attendanceData", JSON.stringify(attendanceData));
alert("Attendance saved to local storage!");
}

function resetAttendance() {
localStorage.removeItem("attendanceData");

const rows = document.querySelectorAll("#attendanceTable tbody tr");
rows.forEach(row => {
    row.querySelector("select").value = "Present";
});

alert("Attendance reset!");
}
