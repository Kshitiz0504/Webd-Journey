
import { RecoilRoot, useRecoilValue } from "recoil"
import{ jobsAtom, notificationsAtom, messagingAtom, networkAtom, totalNotificationSelector } from './atoms'
import './App.css'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}


function MainApp() {

  const networkNotificationCount = useRecoilValue(networkAtom);
  const finalValue = networkNotificationCount >= 100 ? "99+" : networkNotificationCount
  
  const jobsAtomCount = useRecoilValue(jobsAtom);

  const notificationsAtomCount = useRecoilValue(notificationsAtom)
  
  const messagingAtomCount = useRecoilValue(messagingAtom);

  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Home</button>

      <button>My Network({ finalValue })</button>
      <button>Jobs({ jobsAtomCount })</button>
      <button>Messaging({ messagingAtomCount })</button>
      <button>Notifications({ notificationsAtomCount })</button>

      <button>Me({ totalNotificationCount })</button>
    </>
  )
}

export default App
