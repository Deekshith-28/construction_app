import React, { useState } from 'react';
import './Works.css';

function Works() {
  let [Num, SetNum] = useState(1)

  const onNext = () => {
    if (Num == 6) {
      SetNum(1)
    } else {
      SetNum(Num + 1)
    }

  }
  const onPrev = () => {
    if (Num == 1) {
      SetNum(6)
    } else {
      SetNum(Num - 1)
    }
  }


  return (
    <div className="how-it-works">
      <div className="container text-center">
        <h2>How It <span className="text-warning">Works?</span></h2>
        <div className="steps d-flex justify-content-center my-4">
          <div className="step">
            <div className={`circle ${Num == 1 ? 'active' : ''}`} onClick={()=>SetNum(1)}>1</div>
            <p>Consultation</p>
          </div>
          <div className="step">
            <div className={`circle ${Num == 2 ? 'active' : ''}`}onClick={()=>SetNum(2)}>2</div>
            <p>Review our work</p>
          </div>
          <div className="step">
            <div className={`circle ${Num == 3 ? 'active' : ''}`}onClick={()=>SetNum(3)}>3</div>
            <p>Place the order</p>
          </div>
          <div className="step">
            <div className={`circle ${Num == 4 ? 'active' : ''}`}onClick={()=>SetNum(4)}>4</div>
            <p>Design</p>
          </div>
          <div className="step">
            <div className={`circle ${Num == 5 ? 'active' : ''}`} onClick={()=>SetNum(5)}>5</div>
            <p>Execution & Tracking</p>
          </div>
          <div className="step">
            <div className={`circle ${Num == 6 ? 'active' : ''}`}onClick={()=>SetNum(6)}>6</div>
            <p>Move in</p>
          </div>
        </div>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className={`carousel-item ${Num == 1 ? 'active' : ''}  `}>
              <div className='w-6'>
              <img src="https://www.buildhood.com/img/construction/CONSULTATION.png" className="d-block w-100" alt="..." />
              </div>
              
              <div >
                <h5>Consultation</h5>
                <p>Discuss your needs and ideas with our experts.</p>
              </div>
            </div>
            <div className={`carousel-item ${Num == 2 ? 'active' : ''}  `}>
              <img src="https://www.buildhood.com/img/construction/REVIEW-OUR-WORK.png" className="d-block w-100" alt="..." />
              <div >
                <h5>Review our work</h5>
                <p>
                  Visit our Projects and get to know about our work and quality,
                  come to office, discuss, and close the deal.
                </p>
              </div>
            </div>
            <div className={`carousel-item ${Num == 3 ? 'active' : ''}  `}>
              <img src="https://www.buildhood.com/img/construction/Construction-place-the-order.png" className="d-block w-100" alt="..." />
              <div >
                <h5>Place the order</h5>
                <p>Place your order with us and we will take care of the rest.</p>
              </div>
            </div>
            <div className={`carousel-item ${Num == 4 ? 'active' : ''}  `}>
              <img src="https://www.buildhood.com/img/construction/DESIGN-PHANE.png" className="d-block w-100" alt="..." />
              <div >
                <h5>Design</h5>
                <p>Work with our designers to create your ideal space.</p>
              </div>
            </div>
            <div className={`carousel-item ${Num == 5 ? 'active' : ''}  `}>
              <img src="https://www.buildhood.com/img/construction/CONSTRUCTION.png" className="d-block w-100" alt="..." />
              <div >
                <h5>Execution & Tracking</h5>
                <p>Follow the progress of your project with our tracking tools.</p>
              </div>
            </div>
            <div className={`carousel-item ${Num == 6 ? 'active' : ''}  `}>
              <img src="https://www.buildhood.com/img/construction/MOVE-IN.png" className="d-block w-100" alt="..." />
              <div >
                <h5>Move in</h5>
                <p>Enjoy your new space and start living your dream.</p>
              </div>
            </div>

            {/* Add more carousel items here */}
          </div>
          <a className="carousel-control-prev" onClick={onPrev} role="button" data-slide="prev">
            <span className="carousel-control-prev-icon bg-warning" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" onClick={onNext} role="button" data-slide="next">
            <span className="carousel-control-next-icon bg-warning" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Works;
