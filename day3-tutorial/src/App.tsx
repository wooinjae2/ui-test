import { Provider } from "mobx-react";
import ProfileListContainer from "./comp/ProfileListContainer";
import ProfileStore from "./store/ProfileStore";

function App() {
  return (
    <div className="App">
      <Provider profileStore={new ProfileStore()}>
        <ProfileListContainer />
      </Provider>
    </div>
  );
}

export default App;
