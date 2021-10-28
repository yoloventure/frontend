import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import "./termOfService.css";
import Navbar from "../components/navbar";
import FooterPage from "../components/footer";
import Bottom from "../components/bottom";

class TOS extends Component {
  render() {
    return (
      <div className="container-fluid app p-0 m-0">

        <Helmet>
            <title>Term Of Service | YoloShadow</title>
        </Helmet>

        <div className="nav">
          <Navbar textColor={"black"} auth={this.props.auth} />
        </div>

        <div className="tos-fig-1 row align-items-center">
          <div className="col">
            <h2>Yolo Shadow Term of Service</h2>
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
              <h2 className="tos">Term of Service</h2>
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
                The Yolo Shadow Platform offers an online venue that enables users (“Members”) to publish, offer, search for, and book job shadow services. Members who publish and offer job shadow experiences are “Hosts” and Members who search for, book, or use job shadow services are “Guests.” Hosts offer job shadow experiences that allow Guests to experience a short period of time working in a certain industry. You must register an account to access and use many features of the Yolo Shadow Platform, and must keep your account information accurate. As the provider of the Yolo Shadow Platform, Yolo Shadow does not own, control, offer or manage any job shadow host Services. Yolo Shadow is not a party to the contracts concluded directly between Hosts and Guests, nor is Yolo Shadow an insurer. 
                <br/><br/>
                Our mission is to enable travellers and young professionals to try any jobs in the world. Yolo Shadow is a job shadow marketplace that provides transformative job shadow experiences with small business owners. We build a community that is based on trust and integrity.
              </p>
              <h5 className="bulletPoint">1. Searching and booking on Yolo Shadow</h5>
              <p className="content">
                You can search for Host Services by using criteria like the type of Host Service, job shadow location, shadow dates, and number of guests. You can also use filters to refine your search results. Search results are based on their relevance to your search and other criteria. Relevance considers factors like price, availability, Reviews, customer service and cancellation history, popularity, previous trips and saved Listings, Host requirements (e.g. minimum or maximum nights), and more. Learn more about search results in our Help Center.
              </p>
              <h5 className="bulletPoint">2. Booking</h5>
              <p className="content">
                When you book a job shadow service, you are agreeing to pay all charges for your booking during checkout. When you receive the booking confirmation, a contract for Host Services (sometimes called a reservation in these Terms) is formed directly between you and the Host. The cancellation policy and any other rules, standards, policies, or requirements identified in the Listing or during checkout form part of your contract with the Host. Be aware that some Hosts work with a co-host or as part of a team to provide their Host Services.
              </p>
              <h5 className="bulletPoint">3. Cancellation and Refund</h5>
              <p className="content">
                Cancellations and Refunds. In general, if as a Guest you cancel a reservation, the amount refunded to you is determined by the cancellation policy that applies to that reservation. But, in certain situations, other policies take precedence and determine what amount is refunded to you. If something outside your control forces you to cancel a reservation, you may be eligible for a partial or full refund under our Extenuating Circumstances Policy. If the Host cancels, or you experience a Travel Issue (as defined in our Guest Refund Policy), you may be eligible for rebooking assistance or a partial or full refund under the Guest Refund Policy. Different policies apply to certain categories of Listings.
              </p>
              <br/>
              <h5 className="bulletPoint">Hosting on Yolo Shadow</h5>
              <p className="content">
                As a host, Yolo Shadow offers you the opportunity to share your job experience with our vibrant community of Guests - and earn money doing it. It’s easy to create a Listing and you are in control of how you host - set your price, availability, and rules for each Listing.
                <br/><br/>
                Contracting with Guests. When you accept a job shadow booking request, or receive a booking confirmation through the Yolo Shadow Platform, you are entering into a contract directly with the Guest, and are responsible for delivering your Host Service under the terms and at the price specified in your Listing. You are also agreeing to pay applicable fees like Yolo Shadow’s service fee (and applicable taxes) for each booking. Yolo Shadow Payments will deduct amounts you owe from your payout unless we and you agree to a different method. Any terms, policies or conditions that you include in any supplemental contract with Guests must: (i) be consistent with these Terms, our Policies, and the information provided in your Listing, and (ii) be prominently disclosed in your Listing description.
                <br/><br/>
                Independence of Hosts. Your relationship with Yolo Shadow is that of an independent individual or entity and not an employee, agent, joint venturer, or partner of Yolo Shadow, except that Yolo Shadow Payments acts as a payment collection agent as described in the Payments Terms. Yolo Shadow does not direct or control your Host Service, and you agree that you have complete discretion whether and when to provide Host Services, and at what price and on what terms to offer them.
              </p>
              <br/><br/>
              <h5 className="bulletPoint">Yolo Shadow Platform Rules</h5>
              <p className="content">
                Act with integrity and treat others with respect.<br/>
                Do not lie, misrepresent something or someone, or pretend to be someone else.<br/>
                Be polite and respectful when you communicate or interact with others.<br/>
                Follow our Nondiscrimination Policy and do not discriminate against or harass others.<br/>
                <br/>
                <br/>
                Do not scrape, hack, reverse engineer, compromise or impair the Yolo Shadow Platform.<br/>
                Do not use bots, crawlers, scrapers, or other automated means to access or collect data or other content from or otherwise interact with the Yolo Shadow Platform.<br/>
                Do not hack, avoid, remove, impair, or otherwise attempt to circumvent any security or technological measure used to protect the Yolo Shadow Platform or Content.<br/>
                Do not decipher, decompile, disassemble, or reverse engineer any of the software or hardware used to provide the Yolo Shadow Platform.<br/>
                Do not take any action that could damage or adversely affect the performance or proper functioning of the Yolo Shadow Platform.<br/>
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

export default TOS;