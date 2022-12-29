import React from 'react'
import certificate from './certificate.jpeg'
import './Home.css'

const Home = () => {
  return (
    <div>
        <div className="about">
            <div className="left">
            <h3>Welcome to Core Computer Products Pvt. Ltd</h3>

            <h4>We are a private limited auto ancillary company established in the year 1981. We are commited to deliver quality, quantity and in time delivery of our products. Our commitment towards customer satisfaction has led us to grow over the years.</h4>

            <h4>We are engaged in the manufacturing of auto electrical components for two and three wheelers. Our specialization lies in the field of Magneto coils such as Stator Coils, Exciter Coils, Lamp Coils, Pickup Coils and Solenoid Coils. We are currently OEM supplier for Piaggio models to Ducati Energia India Pvt. Ltd. and also provide spare parts for Bajaj, Honda, TVS, Royal Enfield and Mahindra two wheelers.</h4>
            </div>
            <div className="right">
              <img className='cer' height="400" src={certificate} alt="" />
            </div>
        </div>

    </div>
  )
}

export default Home