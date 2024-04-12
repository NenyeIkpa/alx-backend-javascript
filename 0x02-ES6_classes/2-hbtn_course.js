export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string' && typeof length === 'number' && Array.isArray(students) && students.every((student) => typeof student === 'string')) {
      this._name = name;
      this._length = length;
      this._students = students;
    }
  }

  getName() {
    return this._name;
  }

  getLength() {
    return this._length;
  }

  getStudents() {
    return this._students;
  }

  setName(name) {
    if (typeof name === 'string') {
      this._name = name;
    }
  }

  setLength(length) {
    if (typeof length === 'number') {
      this._length = length;
    }
  }

  setStudents(students) {
    if (Array.isArray(students) && students.every((student) => typeof student === 'string')) {
      this._students = students;
    }
  }
}
