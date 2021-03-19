import React, { Component } from "react";
import "./Blogs.css";
import blog2 from "../../assets/blog2.png";
import Invoice from '../../assets/Invoice.jpeg';
import Inventory from '../../assets/Inventory.jpeg';
import Finance from '../../assets/Finance.jpeg';
function FeatureBlog() {
  return (
    <div className="blogs">
      <img src={blog2}></img>
      <h2>Features of Big Business</h2>

      <div className="p_more">
        <p>
          Big Business App aims to support product-based retail & wholesale
          stores, Micro Businesses and franchise-based businesses in increasing
          the efficiency of their business operations and giving them an
          identity that leads to better opportunities. If you are a trustworthy
          MSME or manage franchise businesses, we have provided a host of
          features that will help you manage your complete business operations
          across the web and mobile in a single place. Here, we list out the
          major features provided by us along with initiatives like B-Score that
          provides benefits in terms of loans as a reward for ethical business
          behaviour.
          </p>
        <p>
          <strong>Invoicing:</strong> We provide you with a single place to generate
          invoices manually as well as an AI assistant to automate the process.
          There are pre-existing invoice templates available to save time. One
          can scan inward invoices and turn an invoice into a QR code for easy
          transactions. There is automatic data transmission to different fields
          and features. Every invoice can be easily shared via WhatsApp with a
          link. These links come with an experience-sheet where the customer can
          give his inputs/feedback. It would consist of numbers from 1 to 10 to
          rate your service so that you could track customer satisfaction.
          </p>
        <img id='images' src={Invoice} alt='' />
        <p>
          <strong>Accounting:</strong> Accounting is one of the most crucial activities in
          businesses, and ensuring everything is maintained makes life easy
          during auditing. With Big business App, you can easily track and
          manage all the expenses and incomes, including purchases and returns.
          These are integrated with reporting features that also manage
          reminders and payment dues so that you don’t miss out on any bills or
          revenues. It has manual and automatic data input via invoice itself.
          The best part is, our app provides you with financial forecasting to
          help you predict the finances for the next few months or quarters.
          With our app, you can have the health of your business in a single
          place.
          </p>
          <img id='images' src={Finance} alt='' />
          <p>
          <strong>Inventory:</strong> We have automated your business inventory wherein
          the data gets pre-populated. Here, you just need to add the quantity
          of your product and your invoices will be ready. One can also easily
          customize the same. You can also easily scan the products and track
          inventory. With easy tracking, you will know your orders, return
          sales, send quotes while ensuring seamless transactions throughout the
          process.
          </p>
        <img id='images' src={Inventory} alt='' />
        <p>
          <strong>Staff Management:</strong> Ensuring your relations with staff is key
          to your business success. You can do away with manual registers with a
          single click marking of attendance of your employees. This in turn can
          help you manage payrolls, assign tasks dynamically and manage
          incentives. Your employees and you can chat easily via text, call and
          video to ensure connectivity. You can even track staff by knowing
          their location.
          </p><p>
          <strong>Customer Relationship Management (CRM):</strong> Manage your
          customer contacts along with their history of engagement with your
          brand. You can stay in touch with them via offers along with reminding
          them of any dues. You can also manage customer complaints and
          requests, keeping them always in priority as Big Business App
          automates other manual operations for you. Business Environment
          Forecasting: We also help you in knowing what is trending in your
          area. Example - Let’s say in Ramzan season, a clothing store gets
          notified saying that churidar is trending or salwar is trending in
          their area, so they can manage and stock up their inventories
          accordingly. With this, you can always target your customers at right
          time to increase your overall revenues.
          </p><p>
          <strong>Growth Tracker to track your Business Health</strong><br />
          Having a birds-eye view of your business is difficult
          when one is engaged in daily operations. With Big Business App, you
          can easily automate business operations along with providing your
          forecasts and growth tracking to help you reach your business goals.
          Just let us know your goals, and we will help you reach them every day
          by providing a relevant roadmap. With your inventory data, we can
          predict your finances so that you never run dry and take necessary
          actions on time.
          </p><p>
          <strong>Business Score (B-Score)</strong><br />As you achieve your goals
          and based on how ethical your business practices are, we provide you
          with a score that can help you avail of easy loans from us. How does
          B-Score work? You can also increase your B-Score by transacting
          through invoices, having good behaviour by paying vendors on time,
          releasing salaries on time, refilling inventories, good rating via
          experience sheet by customers, paying taxes on time, etc. Once you
          reach minimum scores, you are eligible to apply for loans whose cap
          will depend on how your B-Score fluctuates, and repayment of the same.
          You also become eligible to join our exclusive community where you can
          network and sign deals to expand your business. Community Platform
          Having a par B-Score of 750 helps you gain access to our exclusive
          community wherein you can connect with other trustworthy businesses to
          make deals. You can easily search for relevant brands with whom you
          can collaborate and transact.
        </p>


        <p></p>

        <p></p>
      </div>
    </div>
  );
}

export default FeatureBlog;
