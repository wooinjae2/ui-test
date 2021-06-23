import ProfileListView from "./ProfileListView";
import Profile from "../model/Profile";
import React, { useState } from "react";

function ProfileListContainer() {
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
    <ProfileListView
      profile={profile}
      profileList={profileList}
      onChangeProfile={onChangeProfile}
      onClickRegist={onClickRegist}
      onClickRemove={onClickRemove}
      onClickPass={onClickPass}
    />
  );
}
export default ProfileListContainer;
