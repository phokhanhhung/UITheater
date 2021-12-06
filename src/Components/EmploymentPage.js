import React, {useState, useEffect} from 'react';
import './EmploymentPage.css';
import Job from './Job';
import job1 from '../Assets/Images/Job1.png';
import job2 from '../Assets/Images/Job2.png';
import job3 from '../Assets/Images/Job3.png';

function EmploymentPage() {
  const [posters, setPosters] = useState([]);
  const [arr, setArr] = useState([]);
  const [page, setPage] = useState(0);

  const jobs = [job1, job2, job3, job1, job2, job3];

  useEffect(() => {
    // await axios.get(`/{name}`)
    // .then((data) => setPosters(data.recordset));
    setPosters([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]);
  },[]);

  useEffect(() => {
    setArr([...posters.slice(0, 6)]);
  }, [posters])

  const handlePaging = (index) => {
    if(index + 1 === Math.ceil(posters.length/6)) {
      setArr([...posters.slice(index*6)]);
    } else {
      setArr([...posters.slice(index*6, index*6 + 6)]);
    }
    setPage(index);
  }

  const handlePrevious = () => {
    if(page > 0) handlePaging(page - 1);
  }

  const handleNext = () => {
    if(page < Math.floor(posters.length/6)) handlePaging(page + 1);
  }

  return (
    <div className="employmentPage__background-color1">
      <div className="employmentPage__background-color2">
        <div className="employmentPage">
          <h1>Tuyển dụng</h1>        
          <div className="employmentPage__jobs-wrapper">
            <div className="employmentPage__jobs">
              {arr.map((_, index) => (
                <div key={index} className="employmentPage__job">
                  <Job img={jobs[index]}/>
                </div>
              ))}
            </div>  
          </div>

          <div className="employmentPage__paging">
            <i className="fas fa-angle-left" onClick={handlePrevious}></i>
            <ul className="employmentPage__paging-list">
              {Array(Math.ceil(posters.length/6)).fill().map((_, index) => (
                <li 
                  key={index} 
                  onClick={() => handlePaging(index)}
                  className={page === index ? "onPage" : ""}
                >
                  {index+1}
                </li>
              ))}
              
            </ul>       
            <i className="fas fa-angle-right" onClick={handleNext}></i> 
          </div>
        </div>
      </div>
    </div>  
  )
}

export default EmploymentPage
