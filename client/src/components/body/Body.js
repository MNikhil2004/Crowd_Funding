// Body.js
import { Link } from 'react-router-dom';
import React from 'react';
import './Body.css';

const Body = () => {
  return (
    <div className="body">
      <div className="content">
        <div className="left">
          {/* Matter goes here */}
          <h1>Welcome to ImpactCrowd </h1> 
          <p>Step into a world of boundless compassion and unwavering support, where every act of kindness ignites a beacon of hope for those in need.</p>
          <p> At ImpactCrowd, we're more than just a crowdfunding platform - we're a lifeline for individuals and communities facing adversity. Whether it's medical expenses, disaster relief, education funding, or other urgent needs, we stand by your side, offering a compassionate and efficient way to turn dreams into reality. Here, you'll find a community united by a shared purpose: to uplift, empower, and inspire. Together, we harness the power of generosity to create miracles, one donation at a time. Join us in our mission to spread hope, healing, and happiness to every corner of the globe. Together, we can transform lives, ignite dreams, and make the world a brighter place for all.</p>
          {/* <Link to="/form"><button>Start Fundraiser</button></Link> */}
        </div>
      </div>
      <div className="steps-container">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>Step 1</h3>
            <p>Sign up for an account on ImpactCrowd to get started.</p>
          </div>
          <div className="step">
            <h3>Step 2</h3>
            <p>Create your fundraising campaign by providing details about your cause and setting a funding goal.</p>
          </div>
          <div className="step">
            <h3>Step 3</h3>
            <p>Share your campaign with friends, family, and supporters to spread the word.</p>
          </div>
          <div className="step">
            <h3>Step 4</h3>
            <p>Track the progress of your campaign and receive donations from supporters worldwide.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;