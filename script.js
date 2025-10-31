document.getElementById("bookLesson").addEventListener("click", () => {
  alert("Форма запису на урок з'явиться тут!");
});

const teachers = [
  { name: "Anna", level: "B2", price: 300 },
  { name: "Mark", level: "C1", price: 400 },
  { name: "Sophie", level: "C2", price: 450 },
];

const list = document.getElementById("teacherList");
teachers.forEach(t => {
  const div = document.createElement("div");
  div.textContent = `${t.name} — рівень ${t.level}, ${t.price} грн/год`;
  list.appendChild(div);
});


