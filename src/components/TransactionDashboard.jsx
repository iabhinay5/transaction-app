import React from 'react'
import './dashboard.css'
import DataTable from './DataTable'

export default function TransactionDashboard() {
  return (
    <div className='dashboard-container'>
        <div className='dashboard-header'>
            <h4>Transaction Dashboard</h4>
        </div>
        <div className='dashboard-content'>
          <DataTable/>
        </div>
    </div>
  )
}
