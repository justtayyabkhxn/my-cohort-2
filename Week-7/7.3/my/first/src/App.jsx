import "./App.css";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { networkAtom,jobsAtom,messagingAtom,notificationAtom } from "./assets/atoms";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networknotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const [messagingAtomCount,setmessagingCount] = useRecoilState(messagingAtom);
  return (
    <>
      <div>
        <button>Home</button>
        <button>
          My Network(
          {networknotificationCount >= 99 ? "99+" : networknotificationCount})
        </button>
        <button>Jobs({jobsAtomCount})</button>
        <button>Notification({notificationAtomCount})</button>
        <button>Messages({messagingAtomCount})</button>
        <button>Me</button>
        <br/><br/>
        <button onClick={()=>{
          setmessagingCount(messagingAtomCount+1)
        }}>Click</button>
      </div>
    </>
  );
}

export default App;
