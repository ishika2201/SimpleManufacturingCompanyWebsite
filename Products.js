import React from 'react'
import video from './stvid.mp4'
import './Products.css'
import Carousel from "react-elastic-carousel";
import { useRef } from 'react'
import pic1 from './pic1.jpeg'
import pic2 from './pic2.jpeg'
import pic3 from './pic3.jpeg'
import pic4 from './pic4.jpeg'
import pic5 from './pic5.jpeg'
import pic6 from './pic6.jpeg'
import pic7 from './pic7.jpeg'
import pic8 from './pic8.jpeg'
import pic9 from './pic10.jpeg'
import pic10 from './pic9.jpeg'
import pickup from './Pickup1.jpeg'
import lamp1 from './lamp1.jpeg'
import epic1 from './epic1.jpeg'
import epic2 from './exciter images/epic2.jpeg'
import epic3 from './exciter images/epic3.jpeg'
import epic4 from './exciter images/epic4.jpeg'
import epic5 from './exciter images/epic5.jpeg'
import epic6 from './exciter images/epic6.jpeg'
import ppic from './pickup/ppic.jpeg'
import lpic2 from './lamp images/lpic2.jpeg'
import lpic3 from './lamp images/lpic3.jpeg'
import lpic4 from './lamp images/lpic4.jpeg'
import lpic5 from './lamp images/lpic5.jpeg'
import lpic6 from './lamp images/lpic6.jpeg'

const Products = () => {
  const stator = useRef(null)
  const exciter = useRef(null)
  const pickupp = useRef(null)
  const lamp = useRef(null)

  const breakPoints = [
     {width: 1, itemsToShow: 1},
     {width: 768, itemsToShow: 2}
    ]

  const scrolltocoil = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }
  return (
    <div className='products'>
      <div className="line">
        <div className="block" onClick={() => scrolltocoil(stator)}>
            <img className='imagesofproductsname' src={pic6} />
            <h3 className='name'>Stator Coils</h3>
        </div>
        <div className="block" onClick={() => scrolltocoil(exciter)}>
            <img className='imagesofproductsname' src={epic1} />
            <h3 className='name'>Exciter Coils</h3>
        </div>
      </div>
      <div className="line">
        <div className="block" onClick={() => scrolltocoil(pickupp)}>
            <img className='imagesofproductsname' src={pickup} />
            <h3 className='name'>Pickup Coils</h3>
        </div>
        <div className="block" onClick={() => scrolltocoil(lamp)}>
            <img className='imagesofproductsname' src={lamp1} />
            <h3 className='name'>Lamp Coils</h3>
        </div>
      </div>
      <div ref={stator} className="content">
        <div className="stcontent">
          <h3 className='sectioname'>Stator Coils</h3>
          <Carousel breakPoints={breakPoints}>
            <video src={video} autoPlay="autoplay" loop="loop" controls muted width="50%" />
            <img className='pictures' src={pic1}/>
            <img className='pictures' src={pic2}/>
            <img className='pictures' src={pic3}/>
            <img className='pictures' src={pic4}/>
            <img className='pictures' src={pic5}/>
            <img className='pictures' src={pic7}/>
            <img className='pictures' src={pic8}/>
            <img className='pictures' src={pic9}/>
            <img className='pictures' src={pic10}/>
            
          </Carousel>
        </div>
        <div ref={exciter} className="stcontent">
        <h3 className='sectioname' >Exciter Coils</h3>
        <Carousel breakPoints={breakPoints}>
            <img className='pictures' src={epic6}/>
            <img className='pictures' src={epic2}/>
            <img className='pictures' src={epic3}/>
            <img className='pictures' src={epic4}/>
            <img className='pictures' src={epic5}/>
                        
          </Carousel>
        </div>
        <div ref={pickupp} className="stcontent">
        <h3 className='sectioname' >Pickup Coils</h3>
            <img className='pictures' src={ppic}/> 
        </div>
        <div ref={lamp} className="stcontent">
        <h3 className='sectioname' >Lamp Coils</h3>
        <Carousel breakPoints={breakPoints}>

            <img className='pictures' src={lpic2}/>
            <img className='pictures' src={lpic3}/>
            <img className='pictures' src={lpic4}/>
            <img className='pictures' src={lpic5}/>
            <img className='pictures' src={lpic6}/>

          </Carousel>  
        </div>
      </div>
    </div>
  )
}

export default Products