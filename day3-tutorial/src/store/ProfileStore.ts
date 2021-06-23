import Profile from "../model/Profile";
import { makeAutoObservable } from "mobx";

class ProfileStore {
  profile: Profile = { name: "", email: "", age: "", pass: "" };
  proflieList: Profile[] = [];
  constructor() {
    makeAutoObservable(this);
  }
}

export default ProfileStore;
