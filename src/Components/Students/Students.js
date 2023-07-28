import React,{useState} from 'react'
import Data from '../../data/Data'
import './StuStyle.css';

function Students() {
  const [data,useData] = useState(Data)
  console.log(data);
  return (
    <div className='main'>
    <div className='flex'>
      <span className='stu'>
        Students Details
      </span>
      <button className='btn'>Add new Student</button>
    </div>
    </div>
  )
}

export default Students