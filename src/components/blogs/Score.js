import React, { Component } from "react";
import "./Blogs.css";
import Bscore1 from "../../assets/BScore1.jpeg";
import Bscore2 from "../../assets/BScore2.jpeg";
import Header from "../Header/Header";

function Score() {
  return (
    <div>
      <Header />

      <div className="blogs">
        <h2>What is B-Score?</h2>
        <div className="p_more">
          <p>
            I still remember in August we were working on my startup idea which
            is to build a business management app, as a team we were figuring
            out our UVP (Unique Value Proposition).
          </p>
          <img className="images" src={Bscore1} alt="" />
          <p>
            On the other end, my brother wanted to start a trading business of
            masks and medical equipment that was an actual need of the hour for
            people at that time. My brother found a buyer and he started looking
            out for a seller; he started looking in the local directories, and
            finally, he got a seller ( let’s name him Raju ) from Punjab after
            having a conversation for few days or a week. My brother felt that
            he was a trustworthy guy because he shared GST number, address,
            pictures.
          </p>
          <p>
            Now my brother requests my dad and asks him for an investment of
            15,000. My dad gives him because he wanted him to progress in the
            business. Indeed that’s not a huge amount, my brother wanted to
            start on a small note.
          </p>
          <p>
            Raju sends his bank account number that had the company name and a
            tax invoice. My brother transfers the amount, from there on that
            seller has never responded. As I got to know about this issue I did
            some background research. research says that everything he shared is
            not of his. Even the WhatsApp display picture he has is not of his.
          </p>
          <p>
            As a startup team, we started researching this problem, these kinds
            of problems are known as the collusion of buyer and seller. This
            happens every day, in every country and every platform. The kind of
            impact it had on my dad and brother was huge, they didn’t even want
            to trust any online e-commerce store, local directory website, at
            sometimes my dad used to say even if this a well-known website,
            place an order if there is COD. Recently as we were transferring a
            huge sum of amount to an unknown vendor whom we met on google. The
            amount of tension and panic my dad went through and the number of
            negative thoughts I had were immense until he delivered the goods.
            Now imagine what kind of impact this places on our ecosystem. we
            already have the problem of trust in our country, these incidents
            just complicate them, and imagine the kind of problems businesses
            will face to prove themselves trustworthy who want to go digital or
            do borderless transactions.
          </p>
          <p>
            So my team started knowing more about the problem, we understood
            there is nothing that gives an identity for trustworthy businesses,
            for every good activity from a business they have to be rewarded
            with something.
          </p>
          <img className="images" src={Bscore2} alt="" />
          <p>
            {" "}
            Then we started learning who credit score / cibil score works to
            measure the good financial behavior of an individual. After a lot of
            thoughts and measuring the possible outcomes, we created the concept
            of the business score which we call B SCORE.
          </p>
          <p>
            B SCORE derives the health, trustworthiness of a business. The par B
            score is 750. It takes an average business 30 to 45 days of
            continuous good behavior to get to a par score There are multiple
            parameters for a ‘healthy B score’. Every time a business owner does
            a good activity on Big business applications like sending Invoices,
            paying salary to staff on time, customers having a good experience,
            paying GST, the standard rate of revenue, meeting their Goals which
            are set by themselves and etc. For every good activity, there are
            certain points allocated. B score can be used by any business
            irrespective of their sector, place, size. B score is about to
            launch in few weeks ! you can pre-register at bigbusinessapp.com
            HAPPY B SCORING!!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Score;
