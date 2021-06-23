class Profile {
  name: string = "";
  age: string = "";
  email: string = "";
  pass: string = "";

  constructor(profile?: Profile) {
    this.name = "";
    this.age = "";
    this.email = "";
    this.pass = "-";
    Object.assign(this, profile);
  }
}

export default Profile;
