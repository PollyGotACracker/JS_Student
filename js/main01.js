document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("input");
  const btnAdd = document.querySelector("#btn_add");
  const tbody = document.querySelector("tbody");
  let studentList = [];
  let student = {};

  const addStudent = () => {
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      if (!input.value) {
        alert(`${input.placeholder} 칸을 입력하세요.`);
      } else {
        continue;
      }
      input.focus();
      input.select();
      return false;
    }

    saveStudent();
  };

  const saveStudent = () => {
    student = {
      num: inputs[0].value,
      name: inputs[1].value,
      depart: inputs[2].value,
      years: inputs[3].value,
      tel: inputs[4].value,
      addr: inputs[5].value,
    };

    studentList.push(student);
    localStorage.setItem("StudentInfo", JSON.stringify(studentList));

    printStudent();
  };

  const printStudent = () => {
    const objVals = Object.values(student);
    const tr = document.createElement("TR");

    objVals.forEach((e) => {
      let td = document.createElement("TD");
      td.textContent = e;
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  };

  const loadStudent = () => {
    const studentLists = localStorage.getItem("StudentInfo");
    if (studentLists) {
      studentList = JSON.parse(studentLists);
    }
    studentList.forEach((e) => {
      const student = Object.values(e);
      let tr = document.createElement("TR");

      student.forEach((val) => {
        let td = document.createElement("TD");
        td.textContent = val;
        tr.appendChild(td);
      });

      tbody.appendChild(tr);
    });
  };
  loadStudent();

  btnAdd?.addEventListener("click", addStudent);
});
