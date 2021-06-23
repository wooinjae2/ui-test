import React from "react";
import Profile from "../model/Profile";

interface Props {
  profile: Profile;
  profileList: Profile[];
  onChangeProfile: (
    key: keyof Profile,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onClickRegist: () => void;
  onClickRemove: (idx: number) => void;
  onClickPass: (idx: number) => void;
}

function ProfileListView(props: Props) {
  return (
    <div>
      <div>
        name
        <input
          value={props.profile.name}
          onChange={(e) => {
            props.onChangeProfile("name", e);
          }}
        />
      </div>
      <div>
        email
        <input
          value={props.profile.email}
          onChange={(e) => {
            props.onChangeProfile("email", e);
          }}
        />
      </div>
      <div>
        age
        <input
          value={props.profile.age}
          onChange={(e) => {
            props.onChangeProfile("age", e);
          }}
        />
      </div>
      <button onClick={props.onClickRegist}>등록</button>
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
          {props.profileList.length > 0
            ? props.profileList.map((profile: Profile, idx: number) => (
                <tr key={idx}>
                  <td>{profile.name}</td>
                  <td>{profile.email}</td>
                  <td>{profile.age}</td>
                  <td>{profile.pass}</td>
                  <td>
                    <button
                      onClick={() => {
                        props.onClickRemove(idx);
                      }}
                    >
                      삭제
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        props.onClickPass(idx);
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

export default ProfileListView;
