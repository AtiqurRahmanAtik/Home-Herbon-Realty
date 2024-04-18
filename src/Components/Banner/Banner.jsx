import { Swiper, SwiperSlide } from 'swiper/react';

import photo from '../../assets/Images/single.jpg';
import photo_1 from '../../assets/Images/warter.jpg';
import photo_2 from '../../assets/Images/costlyhome.jpg';
import photo_3 from '../../assets/Images/campusss.jpg';
import photo_4 from '../../assets/Images/sinenor.jpg';
import photo_5 from '../../assets/Images/vecation.jpg';

import 'swiper/css';

const Banner = () => {
    return (
     <div className="space-y-9 bg-gray-300 py-7">

        <div >
        <h1 className="text-3xl font-bold text-center">Our Service</h1> 
        </div>

        <div className='mx-auto'>
        <Swiper
        spaceBetween={50}
        slidesPerView={2}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
       
      >
        <SwiperSlide > <img className=' lg:w-96 h-80' src={photo} alt="" /> <span className='text-2xl font-bold text-center'>Single-family homes</span></SwiperSlide>

        <SwiperSlide > <img className='lg:w-96 h-80' src={photo_1 } alt="" /><span className='text-2xl font-bold text-center'>townhouses</span></SwiperSlide>

        <SwiperSlide> <img className='lg:w-96 h-80' src={photo_2 } alt="" /><span className='text-2xl font-bold text-center'>apartments</span> </SwiperSlide>

        <SwiperSlide> <img className='lg:w-96 h-80' src={photo_3 } alt="" /> <span className='text-2xl font-bold text-center'>student
 housing</span></SwiperSlide>
        

        <SwiperSlide> <img className='lg:w-96 h-80' src={photo_4 } alt="" /> <span className='text-2xl font-bold text-center'>senior living communities</span></SwiperSlide>

        <SwiperSlide> <img className='lg:w-96 h-80' src={photo_5 } alt="" /> <span className='text-2xl font-bold text-center'>vacation rentals</span></SwiperSlide>
        
      </Swiper>
        </div>
     </div>
    );
};

export default Banner;