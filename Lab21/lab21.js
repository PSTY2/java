// Lab 21 – Prototypes & Classes (variant 9)
class User {
  constructor(login) { this.login = login; }
  info() { console.log(`?? ${this.login}`); }
}
export class Administrator extends User {
  deleteUser(arr, lg) {
    const i = arr.findIndex(u => u.login === lg);
    i === -1
      ? console.warn(`? ${lg} not found`)
      : (arr.splice(i,1), console.log(`? ${lg} removed`));
  }
}
