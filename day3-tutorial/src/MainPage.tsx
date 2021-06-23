import React, { useState } from "react";

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

function MainPage() {
  const [profile, setProfile] = useState<Profile>({
    name: "",
    email: "",
    age: "",
    pass: "-",
  });

  const [profileList, setProfileList] = useState<Profile[]>([]);

  function onChangeProfile(
    key: keyof Profile,
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setProfile({ ...profile, [key]: e.target.value });
  }

  function onClickRegist() {
    setProfileList([...profileList, profile]);
    setProfile(new Profile());
  }

  function onClickRemove(selectedIdx: number) {
    const newProfileList = profileList.filter(
      (data: Profile, idx: number) => selectedIdx !== idx
    );

    setProfileList(newProfileList);
  }

  function onClickPass(selectedIdx: number) {
    const newProfileList = profileList.map((profile: Profile, idx: number) => {
      if (idx === selectedIdx) {
        profile.pass = "통과";
      }
      return profile;
    });
    setProfileList(newProfileList);
  }

  return (
    <div>
      <div>
        name
        <input
          value={profile.name}
          onChange={(e) => {
            onChangeProfile("name", e);
          }}
        />
      </div>
      <div>
        email
        <input
          value={profile.email}
          onChange={(e) => {
            onChangeProfile("email", e);
          }}
        />
      </div>
      <div>
        age
        <input
          value={profile.age}
          onChange={(e) => {
            onChangeProfile("age", e);
          }}
        />
      </div>
      <button onClick={onClickRegist}>등록</button>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>age</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {profileList.length > 0
            ? profileList.map((profile: Profile, idx: number) => (
                <tr key={idx}>
                  <td>{profile.name}</td>
                  <td>{profile.email}</td>
                  <td>{profile.age}</td>
                  <td>{profile.pass}</td>
                  <td>
                    <button
                      onClick={() => {
                        onClickRemove(idx);
                      }}
                    >
                      삭제
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        onClickPass(idx);
                      }}
                    >
                      통과
                    </button>
                  </td>
                </tr>
              ))
            : "데이터가 없습니다."}
        </tbody>
      </table>
    </div>
  );
}

export default MainPage;
