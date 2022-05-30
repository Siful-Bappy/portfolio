import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as Arrow } from "../../../assets/icons/arrow-right.svg"
import { ReactComponent as Send } from "../../../assets/icons/send.svg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"
import "./styles.css";

// import Swiper core and required modules
import SwiperCore, {
    Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

const Portfolio = () => {
    return (
        <div className='portfolio section' id="portfolio">
            <h2 className='section-title'>Portfolio</h2>
            <span className='section-subtitle'>Most recent work</span>
            <Swiper cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} className=' portfolio__container container mySwiper'>
                {/* <<<<<<<<<<<<<<<<<<PORTFOLIO CONTENT 1>>>>>>>>>>>>>>> */}
                

                <SwiperSlide className='portfolio__content grid'>
                    <img src='./doctors.JPG' alt='imgae' className='portfolio__img' />
                    <div className='portfolio__data'>
                        <h3 className='portfolio__title'>Doctors Portal</h3>
                        <p className='portfolio__description'>Doctors Portal is kind of organize web application for take appiontment with doctors availablity according to date. Here its porssible to check the appionment detail in dashborad with high security like JWT & payment method</p>
                        <a href='https://github.com/Siful-Bappy/Doctors-Protal-client-side' className='button button--flex button--small portfolio__button'>
                            Git Hub
                            <Arrow className=" button__icon"></Arrow>
                        </a>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='portfolio__content grid'>
                    <img src='./emaJohn.JPG' alt='imgae' className='portfolio__img' />
                    <div className='portfolio__data'>
                        <h3 className='portfolio__title'>Ema John</h3>
                        <p className='portfolio__description'>eCommerce website where consumer can order their porducts, see in the dashbord what they order with increase & decrease option</p>
                        <a href='https://ema-johon-project-7e9e0.web.app/' className='button button--flex button--small portfolio__button'>
                            Demo
                            <Arrow className=" button__icon"></Arrow>
                        </a>
                    </div>
                </SwiperSlide>

                {/* <<<<<<<<<<<<<<<<<<PORTFOLIO CONTENT 2>>>>>>>>>>>>>>> */}

                <SwiperSlide className='portfolio__content grid'>
                    <img src='./carservice.JPG' alt='imgae' className='portfolio__img' />
                    <div className='portfolio__data'>
                        <h3 className='portfolio__title'>Genius Car Service</h3>
                        <p className='portfolio__description'>In the website people can search car service and according to their choose they can hire mechanic</p>
                        <a href='https://genius-car-services-proj-1d320.web.app/' className='button button--flex button--small portfolio__button'>
                            Demo
                            <Arrow className=" button__icon"></Arrow>
                        </a>
                    </div>
                </SwiperSlide>

                {/* <<<<<<<<<<<<<<<<<<PORTFOLIO CONTENT 3>>>>>>>>>>>>>>> */}

                <SwiperSlide className='portfolio__content grid'>
                    <img src='./eliteplus.jpg' alt='imgae' className='portfolio__img' />
                    <div className='portfolio__data'>
                        <h3 className='portfolio__title'>Elite Plus Export Import</h3>
                        <p className='portfolio__description'>Export Import website by using wordPress with custom html and css. </p>
                        <a href='http://eliteplusexportimport.com/' className='button button--flex button--small portfolio__button'>

                            Demo
                            <Arrow className=" button__icon"></Arrow>

                        </a>
                    </div>
                </SwiperSlide>

                {/* <<<<<<<<<<<<<<<<<<PORTFOLIO CONTENT 4>>>>>>>>>>>>>>> */}

                <SwiperSlide className='portfolio__content grid'>
                    <img src='./design.png' alt='imgae' className='portfolio__img' />
                    <div className='portfolio__data'>
                        <h3 className='portfolio__title'>Branding Design</h3>
                        <p className='portfolio__description'>Personal Website for implementing ideas in mind.</p>
                        <a href='#portfolio' className='button button--flex button--small portfolio__button'>
                            Design
                            <Arrow className=" button__icon"></Arrow>
                        </a>
                    </div>
                </SwiperSlide>


            </Swiper>
            <div className='project section'>
                <div className='project__bg'>
                    <div className='project__container container grid'>
                        <div className='project__data'>
                            <h2 className='project__title'>You need a Frontend Developer ?</h2>
                            <p className='project__description'>I am ready to assist you in turning your projects<br /> into real business.</p>
                            <a href='#contact' className='button button--flex button--white'>
                                Contact me
                                <Send className=" button__icon" style={{ transform: "rotate(45deg)" }}></Send>
                            </a>
                        </div>
                        <div className='project__img_end'>
                            <img src='./photo1.png' alt='alt' className='project__img' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
