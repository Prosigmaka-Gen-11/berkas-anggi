import React from 'react'
import ReactDOM from 'react-dom/client'
import CourseProvider from './CourseProvider'
import CourseList from './CourseList'
import CourseForm from './CourseForm'
ReactDOM.createRoot(document.getElementById('root')).render(

  <CourseProvider>
    <CourseList />
    <CourseForm />
  </CourseProvider>

)
