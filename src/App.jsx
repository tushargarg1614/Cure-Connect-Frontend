import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import Navbar from './Navbar'
import DonorForm from './DonorForm'
import MediAvailForm from './MediAvailForm'
import NeedyForm from './NeedyForm'
import MedicineList from './MedicineList'
import FindMed from './FindMed'
import Index from './indexPage/Index'
import NeedyDashboard from './NeeyDashBoard'
import DashNav from './DashNav'
import DonorDash from './DonorDash'
import AdminDash from './adminPannel/adminDash'
import UserList from './adminPannel/UserList'
import AllDonors from './adminPannel/allDonors'
import AllNeedies from './adminPannel/allNeedies'
import ProtectedRoute from './ProtectedRoute'

function App() {
  

  return (
    <>
    
    <BrowserRouter>
      
    <div className=' '>
      <div className="content mt-16">
    <Routes>
      <Route path='/' element={<Navbar></Navbar>}>

      <Route index element={<Index></Index>}></Route>
      <Route path='home' element={<Index></Index>}></Route>
      <Route path='signup' element={<SignupForm></SignupForm>}></Route> 
      <Route path='login' element={<LoginForm></LoginForm>}></Route>

      </Route> 

      <Route element={<ProtectedRoute allowedRole='needy' ></ProtectedRoute>}>

      <Route path='needy' element={<DashNav dashboard={'/needy'}></DashNav>}>
      
       <Route index element={<NeedyDashboard></NeedyDashboard>}></Route>
       <Route path='needyForm' element={<NeedyForm></NeedyForm>}></Route>
       <Route path='findMed' element={<FindMed></FindMed>}></Route> 
       <Route path='findEquipment' ></Route>  

      </Route>
      </Route>

      <Route element={<ProtectedRoute allowedRole='donor' ></ProtectedRoute>}>
      <Route path='donor' element={<DashNav dashboard={'/donor'}></DashNav>}>
      
       <Route index element={<DonorDash></DonorDash>}></Route>
       <Route path='donorForm' element={<DonorForm></DonorForm>}></Route>
       <Route path='mediAvailForm' element={<MediAvailForm></MediAvailForm>}></Route> 
       <Route path='medicineList' element={<MedicineList></MedicineList>} ></Route>  
       {/* <Route path='MediAvailForm' element={<MediAvailForm></MediAvailForm>} ></Route>   */}


      </Route>
      </Route>
      
       <Route element={<ProtectedRoute allowedRole='admin' ></ProtectedRoute>}>
      <Route path='admin' element={<DashNav dashboard={'/admin'}></DashNav>} >
        <Route index element={<AdminDash></AdminDash>} ></Route>
        <Route path='allUsers' element={<UserList></UserList>}></Route>
        <Route path='allDonors' element={<AllDonors></AllDonors>}></Route>
        <Route path='allNeedies' element={<AllNeedies></AllNeedies>}></Route>
      </Route>
      </Route>
    
       
     <Route path='donorForm' element={<DonorForm></DonorForm>}></Route>
      
    </Routes>
      </div>
      
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
