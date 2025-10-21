import React from 'react'
import { Header } from '../Common/Header'
import Footer from '../Common/Footer'

export const Dashboard = () => {
  return (
   <>
    <Header/>
    <main>
        <div className="row">
            <div>
                <div className='col-md-3'>
                    {/*sidebar*/ }
                </div>
                <div className='col-md-3'>
                {/*Dashboard*/ }
                <div className='card shadow border-0'>
                <div className="card-body">
                    <h4>Dashboard</h4>
                </div>

                </div>
                    
                </div>
            </div>
        </div>
    </main>
    <Footer/> 
   </>
  )
}
