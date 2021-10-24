import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import "./privacyAgreement.css";
import Navbar from "../components/navbar";
import FooterPage from "../components/footer";
import Bottom from "../components/bottom";

class privacyAgreement extends Component {
  render() {
    return (
      <div className="container-fluid app p-0 m-0">

        <Helmet>
            <title>Privacy Agreement | YoloShadow</title>
        </Helmet>

        <div className="nav">
          <Navbar textColor={"black"} auth={this.props.auth} />
        </div>

        <div className="tos-fig-1 row align-items-center">
          <div className="col">
            <h2>Yolo Shadow Privacy Agreement</h2>
          </div>
        </div>
        <br />
        <br />
        <br />
         
        <div className="container">
          <div className="row">
            <div className="col">
              <h5 className="getStarted">GET STARTED NOW</h5>
              <br />
              <h2 className="tos">Privacy Agreement</h2>
              <br />
              <button className="exploreNowButton">
                <a href="/explore" style={{color:"#fcfcfc", textAlign:"center", margin:"auto"}}>EXPLORE NOW</a>
              </button>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <br />
              <p className="content">
                Yolo Shadow is a job shadow marketplace that provides transformative job shadow experiences with small business owners. We build a community that is based on trust. This document informs you of our policies regarding the collection, use, and disclosure of Personal Information we receive from you. This document informs you about how we may use that Personal Information, with whom we may share it and how you may exercise your rights regarding our processing of that information. This Privacy Policy also describes the measures we take to safeguard the personal information we obtain and how you can contact us about our privacy practices.
                <br/>
                We use your personal data only for providing and improving our website, our program’s online platform and for being able to provide you with future job shadow opportunities. By accepting this, you agree to the collection and use of information in accordance with this Privacy Policy.
              </p>
              <br/>
              <h5 className="bulletPoint">Our Privacy Policy explains</h5>
              <p className="content">
                What information we collect and why we collect it. <br/>
                How we use that information. <br/>
                The choices we offer, including how to access and update information.<br/>
              </p>
              <br/>
              <h5 className="bulletPoint">Information that we collect</h5>
              <p className="content">
                Contact Information, Account, Profile Information. Such as your first name, last name, phone number, postal address, email address, date of birth, and profile photo, some of which will depend on the features you use.
                <br/>
                Identity Verification and Payment Information. Such as images of your government issued ID (as permitted by applicable laws), your ID number or other verification information, bank account or payment account information.
                <br/>
                We collect information to provide better job shadow opportunities to all the people in the Yolo Shadow network.
              </p>
              <br/>
              <h5 className="bulletPoint">We collect information in the following ways</h5>
              <p className="content">
                Information you give us. For example, when you apply to a job shadow experience on Yolo Shadow. When you do, we’ll ask for personal information, like your name, email address, telephone number, skills or opinions to store with your profile. If you want to take full advantage of the opportunities we offer, we might also ask you to create a publicly visible job shadow Profile, which may include your name and skills. Another example is when you provide us with your email address to receive our newsletter, we collect your email address to deliver our newsletter to your email address.
                <br/>
                We may share your personal data with third parties and our affiliates for the above-mentioned purposes. In sharing your personal data with them, we endeavor to ensure that the third parties and our affiliates keep your personal data secure from unauthorized access, collection, use, disclosure, or similar risks and retain your personal data only for as long as they need your personal data to achieve the above-mentioned purposes.
                <br/>
                We do not engage in the business of selling any personal data to third parties.
                <br/>
                We may provide links to other third-party websites and features and we mainly collect information through third-party sources that are GDPR compliant and this Privacy Policy does not apply to third-party sources and how they manage the data. 
                <br/>
                The information we collect through our customers’ and partners’ use of our websites or services (such as names, addresses, billing information, and employee contact information) and through our offline interactions with customers and partners is subject to the terms of this Privacy Policy.
              </p>
              <br/>
              <h5 className="bulletPoint">How we use information that we collect</h5>
              <p className="content">
                We use the information we collect from all of our Application Processes and interactions to provide and improve the program and to develop new opportunities for people in our network. We also use this information to offer you tailored information – like giving you relevant opportunities or network connections. 
                <br/>
                When you contact Yolo Shadow, we keep a record of your communication to help solve any issues you might be facing. 
                <br/>
                We may use your email address to inform you about our activities, such as letting you know about upcoming opportunities like for example E-cases or opportunities to apply for a job shadow program in subsequent years.  
                <br/>   
                We may share non-personally identifiable information publicly and with our partners – like publishers, advertisers or connected sites. For example, we may share information publicly to show trends about the general opinion of people in our network.
                <br/>
                We will ask for your consent before using the information for a purpose other than those set out in this Privacy Policy. Yolo Shadow processes Personal Information on servers in countries around the world. We may process your personal information on a server located outside the country where you live.
              </p>
              <br/>
              <h5 className="bulletPoint">How long is your information stored in our database</h5>
              <p className="content">
                All information provided by you is stored in our database for 36 months. You can at any time ask us to share the information we have about you with you, and also at any time, ask us to delete all the information we have. Before the end of the 36 month period, you will receive an email regarding further storage of your information. 
              </p>
              <br/>
              <h5 className="bulletPoint">Withdrawl of Consent</h5>
              <p className="content">
                You may communicate your objection to our continual use and/or disclosure of your personal data for any of the purposes and in the manner as stated above at any time by contacting us at our e-mail address below.
                <br/>
                Please note that if you communicate your objection to our use and/or disclosure of your personal data for the purposes and in the manner as stated above, depending on the nature of your objection, we may not be in a position to continue providing our products or services to you or perform on any contract we have with you. Our legal rights and remedies are expressly reserved in such event.
              </p>
              <br/>
              <h5 className="bulletPoint">Updating Your personal data</h5>
              <p className="content">
                When you register for our newsletter or apply to one of the Yolo Shadow programs, we will create a Yolo Shadow profile for you. You can access, update or change your personal data in this profile at any time by contacting us at this e-mail address: yoloshadower@gmail.com 
                <br/>
                We take steps to share the updates to your personal data with third parties and our affiliates with whom we have shared your personal data if your personal data is still necessary for the above-stated purposes.
              </p>
              <br/>
              <h5 className="bulletPoint">Accessing Your personal data</h5>
              <p className="content">
                If you would like to view the personal data we have on you or inquire about the ways in which your Personal Information has been or may have been used or disclosed by us within the past year, please contact us at yoloshadower@gmail.com. 
              </p>
              <br/>
              <h5 className="bulletPoint">Security</h5>
              <p className="content">
                The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.  We will, however, restrict access to personal data within the Yolo Shadow core team in order to minimize potential breaches.
              </p>
              <br/>
              <h5 className="bulletPoint">Changes To This Privacy Policy</h5>
              <p className="content">
                We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.
                <br/>
                If we make any material changes to this Privacy Policy, we will do our best to notify you either through the email address you have provided us or by placing a prominent notice on our website.
              </p>
              <br/>
              <h5 className="bulletPoint">Collection of Computer Data</h5>
              <p className="content">
                Yolo Shadow or our authorized service providers may use cookies, web beacons, and other similar technologies for storing information to help provide you with a better, faster, safer and personalized experience when you use our website or the Platform.
                <br/>
                When you visit our website or the Platform, servers will automatically record information that your browser sends whenever you visit a website. This data may include:
                <br/>Your computer's IP address
                <br/>Browser type
                
                <br/>This information is collected for analysis and evaluation in order to help us improve our website and the services and products we provide.
                
                <br/>Cookies are small text files (typically made up of letters and numbers) placed in the memory of your browser or device when you visit a website or view a message. They allow us to recognize a particular device or browser and help us to personalize the content to match your preferred interests more quickly and to make our services more convenient and useful to you.
                
                <br/>You may be able to manage and delete cookies through your browser or device settings. For more information on how to do so, visit the help material of your browser or device.
                <br/>Web beacons are small graphic images that may be included on our website or the Platform. They allow us to count users who have viewed these pages so that we can better understand your preference and interests.
              </p>
              <br/>
              <h5 className="bulletPoint">No Spam, Spyware, or Virus</h5>
              <p className="content">
                Spam, spyware or virus is not allowed on our website or the Platform. Please set and maintain your communication preferences so that we send communications to you as you prefer. You are not licensed or otherwise allowed to add other users (even a user who has purchased an item from you) to your mailing list (email or physical mail) without their express consent. You should not send any messages which contain spam, spyware or virus via the Platform. If you would like to report any suspicious messages, please contact us at our email address below.
              </p>
              <br/>
              <h5 className="bulletPoint">Our Rights</h5>
              <p className="content">
                You acknowledge and agree that we have the right to disclose your personal information to any legal, regulatory, governmental, tax, law enforcement or other authorities or the relevant right owners. If we have reasonable grounds to believe that disclosure of your Personal Information is necessary for the purpose of meeting any obligations, requirements or arrangements, whether voluntary or mandatory, as a result of cooperating with an order, an investigation and/or a request of any nature by such parties. To the extent permissible by applicable law, you agree not to take any action and/or waive your rights to take any action against us for the disclosure of your personal information in these circumstances.
              </p>
              <br/>
              <h5 className="bulletPoint">Changes To This Privacy Policy</h5>
              <p className="content">
                This Privacy Policy is effective as of July 25th, 2021 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
                <br/>We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.
                <br/>If we make any material changes to this Privacy Policy, we will do our best to notify you either through the email address you have provided us or by placing a prominent notice on our website.
              </p>
              <br/>
              <h5 className="bulletPoint">Removal of information</h5>
              <p className="content">
                If you want to stop receiving information from us or want your information to be removed from our database, please contact us on yoloshadower@gmail.com 
              </p>
              <br/>
              <h5 className="bulletPoint">Contact Us</h5>
              <p className="content">
                If you have any questions about this Privacy Policy, please contact us on yoloshadower@gmail.com.
              </p>
            </div>
          </div>
        </div>

        <div>
          <Bottom />
          <br />
          <br />
        </div>

        <div className="col offset-.5 footerpage p-0 m-0">
          <FooterPage />
        </div>

      </div>
    )
  }
}

export default privacyAgreement;