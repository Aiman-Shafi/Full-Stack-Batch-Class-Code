let student = {
  userName: "Aiman Shafi",
  stuAge: 20,
  dob: "1994",
  isCollegeStudent: false,
  university: "NSU",
  isAdmitted: function () {
    console.log(`${this.userName} is admitted to ${this.university}`);
  },
  highestMark: function () {
    console.log("Highest Marks:", 60);
  },
};

// student.userName = "Rahim";
// student.stuAge = 50;

// console.log(student.userName, student.stuAge);
// console.log(student["userName"], student.stuAge);

student.isAdmitted();
student.highestMark();
