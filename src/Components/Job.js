import React from 'react';
import './Job.css';
import job from '../Assets/Images/employment.png';

function Job() {
  return (
    <div className="job">
      <img src={job} alt="Job image" />
      <div className="job__info-background-color">
        <div className="job__info">
          <h4>TUYỂN DỤNG NHÂN VIÊN KĨ THUẬT</h4>
          <p>Aku cocok menggunakan produk night cream white secret dari 
          wardah ini. Buat kulit wajahku terasa lembab. Dan membantu juga 
          mencerahkan sih menurutku.</p>
          <div className="job__more-info">
            <span><i className="far fa-eye"></i>2k</span>
            <span>01/11/2021</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Job
