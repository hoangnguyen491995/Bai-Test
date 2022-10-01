import "./App.css";
import AutoGenSeenPhrase from "./component/AutoGenSeenPhrase";
import ConfirmYourSeedPhrase from "./component/ConfirmYourSeedPhrase";
import CustomSeedPhrase from "./component/CustomSeedPhrase";

function App() {
  return (
    <div className="flex justify-evenly bg-slate-200 ">
      <AutoGenSeenPhrase />
      <CustomSeedPhrase />
      <ConfirmYourSeedPhrase />
    </div>
  );
}

export default App;
