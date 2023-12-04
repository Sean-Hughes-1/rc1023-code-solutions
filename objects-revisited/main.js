const business = {
  opens: '08:00 AM',
  closes: '06:00 PM',
  totalEmployees: 4,
  daysOpen: ['M', 'T', 'W', 'Th', 'F'],
  employees: {
    shawn: { position: 'manager', daysOfWeekWorking: ['M', 'W', 'F'] },
    Emily: { position: 'cashier', daysOfWeekWorking: ['M', 'W'] },
    Mike: { position: 'server', daysOfWeekWorking: ['M', 'T', 'W', 'F'] },
    Jesica: { position: 'Cook', daysOfWeekWorking: ['F'] },
  },
};
console.log('Business Object: ', business);
function addWeekends(business) {
  business.daysOpen = ['M', 'T', 'W', 'Th', 'F', 'Sa', 'Su'];
  for (const employee in business.employees) {
    business.employees[employee].daysOfWeekWorking.push('Sa');
    business.employees[employee].daysOfWeekWorking.push('Su');
  }
}
console.log('Before adding weekends: ', business);
addWeekends(business);
console.log('After adding weekends: ', business);
