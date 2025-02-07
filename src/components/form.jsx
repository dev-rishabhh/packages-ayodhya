import React, { useState } from 'react'
import './Form.css'
import { putFormData } from '../hooks/putFormData';
export default function form() {
    const [userdata, setuserdata] = useState({
        name: '',
        country: '',
        email: '',
        desc: '',
        date: '',
        duration: '',
        person: '',
        whatsapp: '',
    })
    const [error, seterrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setuserdata((prev) => ({ ...prev, [name]: value }))
        seterrors((prev) => ({ ...prev, [name]: '' }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const newerrors = {}
        Object.keys(userdata).forEach((key) => {
            if (!userdata[key].trim()) {
                newerrors[key] = `${key} is required`
            }
        })
        if(Object.keys(newerrors).length>0){
            seterrors(newerrors)
        }
        else{
            putFormData("Enquiries",userdata)
            setuserdata({
                name: '',
                country: '',
                email: '',
                desc: '',
                date: '',
                duration: '',
                person: '',
                whatsapp: '',
            }) 
            
        }

    }
    const hanldeCut = () => {
        history.back()
    }
    return (
        <form onSubmit={handleSubmit}>
            <section className='form-section'>
                <h2 className='form-heading'>Request a QUOTE</h2>
                <div className="border"></div>
                <div className='cut-icon' onClick={hanldeCut}>
                  &#10006;
                </div>
                <div className='input-cont'>
                    <div>
                    {error.name && <p className='required'>{error.name}</p>}
                        <label htmlFor="name">Full Name*</label>
                        <input
                            type="text"
                            placeholder='Your Name..'
                            name='name'
                            value={userdata.name}
                            onChange={handleChange} />
                    </div>
                    <div>
                    {error.country && <p className='required'>{error.country}</p>}
                        <label htmlFor="country">Country*</label>
                        <input
                            type="text"
                            placeholder='Your Country..'
                            name='country'
                            value={userdata.country}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                {error.email && <p className='required'>{error.email}</p>}
                <label htmlFor="email">Email Id*</label>
                <input
                    type="email"
                    placeholder='Email'
                    name='email'
                    value={userdata.email}
                    onChange={handleChange}
                />

                <div className='textarea-cont'>
                {error.desc && <p className='required'>{error.desc}</p>}
                    <label htmlFor="desc">Tour Description</label>
                    <textarea
                        name="desc"
                        placeholder='Enter Your Tour Description'
                        value={userdata.desc}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className='input-cont'>
                    <div>
                    {error.date && <p className='required'>{error.date}</p>}
                        <label htmlFor="date">Travel Dates*</label>
                        <input
                            type="date"
                            name='date'
                            className='dates'
                            value={userdata.date}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                    {error.duration && <p className='required'>{error.duration}</p>}
                        <label htmlFor="duration">Duration of Stay*</label>
                        <input
                            type="text"
                            placeholder='Duration of Stay'
                            name='duration'
                            value={userdata.duration}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='input-cont'>
                    <div>
                    {error.person && <p className='required'>{error.person}</p>}
                        <label htmlFor="person">No of Person*</label>
                        <input
                            type="number"
                            placeholder='No of Person'
                            name='person'
                            value={userdata.person}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                    {error.whatsapp && <p className='required'>{error.whatsapp}</p>}
                        <label htmlFor="whatsapp">WhatsApp No*</label>
                        <input
                            type="tel"
                            placeholder='WhatsApp No'
                            name='whatsapp'
                            value={userdata.whatsapp}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='btn-cont'>
                    <button className='submit'>Submit</button>
                </div>
            </section>
        </form>
    )
}

