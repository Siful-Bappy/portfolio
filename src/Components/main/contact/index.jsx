import React from 'react'
import { ReactComponent as Send } from "../../../assets/icons/send.svg"
import { ReactComponent as Tel } from "../../../assets/icons/tel.svg"
import { ReactComponent as Email } from "../../../assets/icons/envelope.svg"
import { ReactComponent as Geo } from "../../../assets/icons/geo-alt.svg"

const Contact = () => {
    return (
        <div className='contact section' id="contact">
            <h2 className='contact__title ' style={{ textAlign: "center", fontSize: "25px", fontWeight: "800" }}>Contact me</h2>
            <p className='' style={{ textAlign: "center", marginBottom: "2rem", fontSize: "13px" }}>Get in touch</p>
            <div className='contact__container container grid'>
                <div>
                    <div className='contact__info'>
                        <Tel className=" contact__icon"></Tel>

                        <div>
                            <h3 className='contact__title'>Call </h3>
                            <p className='contact__subtitle'>+82 10 9151 9002</p>
                        </div>
                    </div>

                    <div className='contact__info'>
                        <Email className=" contact__icon"></Email>

                        <div>
                            <h3 className='contact__title'>Email </h3>
                            <p className='contact__subtitle'>abdulkhamidovakbarjon@gmail.com</p>
                        </div>
                    </div>

                    <div className='contact__info'>
                        <Geo className="contact__icon" />


                        <div>
                            <h3 className='contact__title'>Location </h3>
                            <p className='contact__subtitle'>성남시 수정구 시민로 145번길 11-2</p>
                        </div>
                    </div>
                </div>
                <form action='' className='contact__form grid'>
                    <div className='contact__inputs grid'>
                        <div className='contact__content '>
                            <label htmlFor="" className='contact__label'>Name </label>
                            <input type='text' className='contact__input' />
                        </div>
                        <div className='contact__content '>
                            <label htmlFor="" className='contact__label'>Email </label>
                            <input type='email' className='contact__input' />
                        </div>
                    </div>
                    <div className='contact__content '>
                        <label htmlFor="" className='contact__label'>Project </label>
                        <input type='text' className='contact__input' />
                    </div>
                    <div className='contact__content '>
                        <label htmlFor="" className='contact__label'>Message </label>
                        <textarea className='contact__input' rows='7' cols="0" />
                    </div>
                    <div>
                        <a href='abdulkhamidovakbarjon@gmail.com' className='button button--flex '>
                            Send Message
                            <Send className=" button__icon" style={{ transform: "rotate(45deg)" }}></Send>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
