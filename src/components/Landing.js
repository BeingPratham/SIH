import { Link } from 'react-router-dom';
import './landing.css';
import Colleges from './Data';
function Landing() {
  
  return (
    <div className="main-body">
        <div className="features">
         
          <div className="filter">
            <button>Filter</button>
          </div>
        </div>
        {Colleges.map(clg=>(
          <>
            <div className="lists">
          <Link to={`/student/${clg.phone_no}`}>
          <div className="Container">
            <div className="Sr_No">
              <p>{clg.id}</p>
            </div>
            <div className="Name">
              <p>{clg.name}</p>
            </div>
            <div className="Class">
              <p>{clg.city}</p>
            </div>
            <div className="Year">
              <p>{clg.state}</p>
            </div>
          </div>
          </Link>
        </div>
          </>
        ))}
        
      </div>
  );
}

export default Landing;