import { useState } from "react";
import axios from '../../axiosInstance'

export default function ContactSection() {
  const [obj,setObj]=useState({
    from:"",
    subject:"",
    msg:""
  })

  let updateVal=(e)=>{
      let val=e.target.value;
      let nam=e.target.name;

      setObj({...obj,[nam]:val})
  }
  let submit=async(e)=>{
       
    await e.preventDefault();
    try{
     let res= await axios.post('/user/sendMail',obj);
     if(res.data.status){
      alert(res.data.msg);
     }else alert(res.data.error);
    }finally{
      setObj({
        from:"",
        subject:"",
        msg:""
      });
    }
  }
  return (
    <section id="Contact" className="bg-gradient-to-br from-green-100 to-blue-100 py-16 px-4 sm:px-6 lg:px-8 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-4">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Have questions or want to get in touch? Reach out and we’ll get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Contact Form */}
          <form    onSubmit={submit} className="bg-white rounded-2xl shadow-md p-8 space-y-4">
            
            <input
              type="email"
              placeholder="Your Email"
              name="from"
              value={obj.from}
              required
              onChange={updateVal}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="text"
               required
              placeholder="subject"
              name='subject'
              value={obj.subject}
               onChange={updateVal}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              required
              name="msg"
              value={obj.msg}
               onChange={updateVal}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Embedded Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-md">
            <iframe
              title="Donation Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5463668656883!2d75.7872702753187!3d26.850364362414956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5d7ae1ad0d7%3A0x87a71c3aaddbcb39!2sRajasthan%20Technical%20University!5e0!3m2!1sen!2sin!4v1620848703100!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
