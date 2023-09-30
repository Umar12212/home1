const data = ["Иван", "Иванов", "Отдел разработки", "Программист", 2000];
function func([name, surname, ...rest]) {
  const [department, position, salary] = rest;
  console.log(name, surname, department, position, salary);
}
func(data);
