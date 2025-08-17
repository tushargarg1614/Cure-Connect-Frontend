import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserList from './adminPannel/UserList.jsx'
import AllDonorsList from './adminPannel/allDonors.jsx'
import AllNeedies from './adminPannel/allNeedies.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <UserList></UserList> */}
    {/* <AllDonorsList></AllDonorsList> */}
    {/* <AllNeedies></AllNeedies> */}
  </StrictMode>,
)
