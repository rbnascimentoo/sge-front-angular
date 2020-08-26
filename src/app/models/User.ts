export class User {

  id: number;
  name: string;
  login: string;
  password: string;
  role: string;
  state: string;

  constructor(id: number, name: string, login: string, password: string, role: string, state: string) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
    this.role = role;
    this.state = state;
  }

}
