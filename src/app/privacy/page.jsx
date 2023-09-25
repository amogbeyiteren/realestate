'use client'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion';

const page = () => {
  return (
    <div>
        <Header />
        <section className="hero" id="home">
                <div className="container">
                  <div className="hero-content">
                    
                    <h2 className="h1 hero-title">Privacy</h2>
                    <p className="hero-text">
                    We take your privacy as ours. It is our policy to maintain your privacy regarding the information we collect from you.
                    Our website name is committed to secure your privacy. We are fully compliant with the General Data Protection Regulation (GDPR). 
                    Our privacy notice describes the use, disclosure, protection, and retention of the information that you provide us on our website.
                    </p>
                    
                  </div>
                  <figure className="hero-banner">
                  <motion.div
                      variants={{
                        hidden: { opacity: 0,  scale: 0}, visible: { opacity: 1, scale: 1.0 },
                      }}

                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.5, }}>
                    <img
                      src="/images/Privacy.png"
                      alt="Privacy"
                      className="w-100"
                    />
                    </motion.div>
                  </figure>
                </div>
              </section>
              <section className='px-8 py-7'>
        <h2 className="text-5xl text-bold text-gray-900 mb-3">What sort of personal information we collect?</h2>
                    <p className="border-[#590D22] border-l-4 pl-3 pr-8 py-4 text-[#590D22]  bg-[#FFF0F3] ">
                    We collect the following personal information of our customers including (but not limited to);

                    Contact information including (but not limited to) name, mailing address, gender, phone number, and email address.
                    Log-in credentials, including user name and password.
                    Technical details, including cookies, location, browser type, authentication information.
                    Please note that we don’t share any personal information or our customers in any case unless required by law.
                            </p>
        </section>
        <section className='px-8 py-7'>
        <h2 className="text-5xl text-bold text-gray-900 mb-3">Why We Use Your Information?</h2>
                    <p className="border-[#590D22] border-l-4 pl-3 pr-8 py-4 text-[#590D22]  bg-[#FFF0F3] ">
                    Our site uses your information to provide you the best services as per your interests. Moreover, your information is also required so we can amend or enhance our existing services and make the necessary changes if any. We also use your information to help you connect to potential buyers or sellers to each other or with the agents (or you connect directly), so you can get whatever desire. 
                    We hold the legitimate interest to communicate with you using your personal information such as phone number and tell you about our services, offers, promotions, and other updates, which we think might be of your interest. In case you want us to connect you with an agent, we do so by using your information.
                            </p>
        </section>
        <section className='px-8 py-7'>
        <h2 className="text-5xl text-bold text-gray-900 mb-3">Home Search</h2>
                    <p className="border-[#590D22] border-l-4 pl-3 pr-8 py-4 text-[#590D22]  bg-[#FFF0F3] ">
                    When you use our website to search for properties, you are provided with a lot of tools so you can find your next home. When you tell us what you are looking at, such as the location, type of home, number of bedrooms, or any other features, we save this information and tailor your search results according to your needs and interests. We will always ask for your permission before sending you our messages relevant to marketing. You always have the option to opt-out of marketing or other communications by contacting us.
        </p>
        </section>

<section className='px-8 py-7'>
        <h2 className="text-5xl text-bold text-gray-900 mb-3">Properties that are advertised on our site</h2>
                    <p className="border-[#590D22] border-l-4 pl-3 pr-8 py-4 text-[#590D22]  bg-[#FFF0F3] ">
We are liable to collect the relevant data of the properties listed on our site, including-but not otherwise limited-such as images, prices, sold prices, sales history property description, location of the property, and property addresses. The data of property is provided to us by our customers. We collect the information for reasons including;
To allow potential tenants or purchasers see the details or descriptions of properties in which they find legitimate interest
To allow members to list their properties for maximum exposure
To enable users so they can view the current trends in residential or commercial properties such as prices or valuation tools        </p>
        </section>

<section className='px-8 py-7'>
        <h2 className="text-5xl text-bold text-gray-900 mb-3">Lawful Basis of Processing the Personal data</h2>
                    <p className="border-[#590D22] border-l-4 pl-3 pr-8 py-4 text-[#590D22]  bg-[#FFF0F3] ">
      We have a legitimate interest in processing the information. Our legitimate interests are;

Providing services to buyers or sellers, so they find the properties of their interest or list their properties.
Providing services to our customers and helping them list their properties
 </p>
        </section>

<section className='px-8 py-7'>
        <h2 className="text-5xl text-bold text-gray-900 mb-3">For how long will we keep this data?</h2>
                    <p className="border-[#590D22] border-l-4 pl-3 pr-8 py-4 text-[#590D22]  bg-[#FFF0F3] ">
Our website will stop advertising your property if you instruct us to do so. However, we will continue to show your property information on your site to provide other users with the historical property information so they can benefit from the services. These services will include the identification of previous sales or sold prices</p>
        </section>

<section className='px-8 py-7'>
        <h2 className="text-5xl text-bold text-gray-900 mb-3">The information which we collect automatically</h2>
                    <p className="border-[#590D22] border-l-4 pl-3 pr-8 py-4 text-[#590D22]  bg-[#FFF0F3] ">
Information provided by you while participating in surveys, competitions, or availing promotions which are available on our site, or when you use our chats, report a problem or provide feedback
</p>
        </section>

<section className='px-8 py-7'>
        <h2 className="text-5xl text-bold text-gray-900 mb-3">The information which we collect automatically</h2>
                    <p className="border-[#590D22] border-l-4 pl-3 pr-8 py-4 text-[#590D22]  bg-[#FFF0F3] ">
Information provided by you while participating in surveys, competitions, or availing promotions which are available on our site, or when you use our chats, report a problem or provide feedback
</p>
        </section>
<section className='px-8 py-7'>
        <h2 className="text-5xl text-bold text-gray-900 mb-3">Links to third-party websites</h2>
                    <p className="border-[#590D22] border-l-4 pl-3 pr-8 py-4 text-[#590D22]  bg-[#FFF0F3] ">
You may see certain links of third parties on our website. Please bear in mind that we are responsible for maintaining the privacy on our website, and our privacy policy doesn’t apply to third party links. We will, in any case, not accept the liability for the content being used or updated on other websites/links. To know about the privacy policy of other websites, you can check out their policy and their use of processing information.
</p>
        </section>









        <Footer/>
    </div>
  )
}

export default page