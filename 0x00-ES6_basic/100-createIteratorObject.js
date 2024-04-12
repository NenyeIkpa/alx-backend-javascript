export default function createIteratorObject(report) {
  return {
    * [Symbol.iterator]() {
      for (const department in report.allEmployees) {
        if (report.allEmployees.hasOwnProperty.call(report.allEmployees, department)) {
          const employees = report.allEmployees[department];
          for (const employee of employees) {
            yield employee;
          }
        }
      }
    },
  };
}
