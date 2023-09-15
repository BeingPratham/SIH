import React from 'react'
import { useParams } from 'react-router-dom';
import Colleges from './Data';
import './landing.css';
import { Link } from 'react-router-dom';

export default function () {
const { id } = useParams();
const item = Colleges.find(item => item.phone_no === id);
  return (
    <div className='main-body'>
        {item.lists.map(it=>(
              <div className="lists">
              <Link to={'#'}>
              <div className="Container">
                <div className="Sr_No">
                  <p>{it.stu_id}</p>
                </div>
                <div className="Name">
                  <p>{it.stu_name}</p>
                </div>
                <div className="Class">
                  <p>{it.stu_class}</p>
                </div>
                <div className="Year">
                  <p>{it.stu_year}</p>
                </div>
              </div>
              </Link>
            </div>
        ))}
    </div>
  )
}
