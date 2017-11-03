function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = [];
}

Student.prototype.name = function name() {
  return `${this.firstName} ${this.lastName}`;
};

Student.prototype.enroll = function enroll(course) {
  if (this.courses.includes(course)) {
    return;
  }
  for (var i = 0; i < this.courses.length; i++) {
    let enrolledCourse = this.courses[i];
    if (enrolledCourse.conflictsWith(course)) {
      throw 'Conflict!';
    }
  }
  this.courses.push(course);
  course.students.push(this);
};

function Course(name, department, credits, weekdays, timeblock) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.weekdays = weekdays;
  this.timeblock = timeblock;
  this.students = [];
}

Course.prototype.addStudent = function addStudent(student){
  student.enroll(this);
};

Course.prototype.conflictsWith = function conflictsWith(course) {
  if (course.timeblock !== this.timeblock) {
    return false;
  }

  for (var i = 0; i < this.weekdays.length; i++) {
    if (course.weekdays.includes(this.weekdays[i])) {
      return true;
    }
  }
  return false;
};



// let d = new Student("adfad","adfdsf");
// let c = new Course("fads", "adfad", 5, ['mon','wed','fri'], 2);
// let o = new Course("sfg", "adfad", 5, ['tues','wed','fri'], 2);
//
// d.enroll(c);
// d.enroll(o);
