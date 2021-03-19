import React, { Component } from "react";
import "./Blogs.css";
import blog1 from "../../assets/blog1.png";
import blogAbout1 from "../../assets/blogAbout1.jpg";
import blogAbout2 from "../../assets/blogAbout2.jpeg";

function BigAbout() {
  return (
    <div className="blogs">
      <h2>What is big business app</h2>
      <img src={blog1}></img>

      <div className="p_more">
        <p>
          With big business application you can manage your business ecosystem
          seamlessly at a single place As we work towards growing our business,
          managing everyday tasks can become a hassle.There are 100s of software
          catering to all major business verticals like HR, Sales, Accounts,
          etc, with features that you may or may not require. On the other hand,
          one needs to manage and track all these software that can lead to
          confusion and thus reducing the overall efficiency of the business.
          Most importantly, such software caters to large business
          organizations, leaving the MSME and micro-businesses behind who cannot
          afford and end up over-complicating their operations. Big Business App
          aims to support product-based retail & wholesale stores, Micro
          Businesses, and franchise-based businesses in increasing the
          efficiency of their business operations.
        </p>
        <img src={blogAbout1}></img>

        <p>
          {" "}
          With Big Business App, one can seamlessly manage their businesses in
          one single place through the web and mobile application or simply
          integrate our app into their existing systems. We also provide
          benefits in terms of loans as a reward for ethical business behavior
          through our concept of B-Score. How can Big Business App help manage a
          business. MSMEs like a wholesaler of garments, chemical industry, or a
          franchise can easily use the Big Business app to manage their:
          Business Score: it depicts the health and trustworthiness of a
          business.Get points every time your business does a good activity on
          Big Business Apps like sending Invoices, paying salary to staff on
          time, good customer experience, paying GST, meet quarterly goals, etc.
          You can avail of loans and be part of our trustworthy business
          community for achieving the par B score. Accounting: Generation of
          inward and outward invoices in simple clicks, track income-expense
          transactions, financial reports, and forecasting on a single
          dashboard. Inventory: Manage your purchase orders, return sales,
          quotes, and products in your inventory to ensure seamless
          transactions. Staff: Track your employee's leaves, attendance,
          payrolls and assign tasks to get the most out of the people in your
          organization. Customer Relationships: Handle happy and angry customers
          with your services on a priority basis through one single app.
        </p>
        <img src={blogAbout2}></img>
        <p>
          For companies to grow from small business to MSME to a full-fledged
          enterprise market leader, one needs to achieve business efficiency and
          customer satisfaction. Big Business App envisions to reduce the
          business failure rate in India by making them more efficient in terms
          of financial and operations management using technology.We aim to
          enable small businesses to leverage the efficiency technology provides
          in an easy and seamless manner, keeping in mind your employees who
          will be using the same. Move from your inefficient notebooks and
          sheets, contact us to get a tour of our Bigbusinessapp today at
          cc.bigbusiness@gmail.com / +91 7386197412{" "}
        </p>
      </div>
    </div>
  );
}

export default BigAbout;
