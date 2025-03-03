import React from 'react'
import MainSection from './MainSection'
import TasksSection from './TasksSection'

const Dashboard = () => {
  return (
    <div className='flex-col'>
        <MainSection />
        <TasksSection />
    </div>
  )
}

export default Dashboard