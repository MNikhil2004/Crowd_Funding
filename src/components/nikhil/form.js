import React, { useState } from 'react';
import './form.css'

function Form() {
    const [imageUploadCount, setImageUploadCount] = useState(1);
    const [videoUploadCount, setVideoUploadCount] = useState(1);

    const handleCampaignCreationClick = () => {
        setImageUploadCount(1);
        setVideoUploadCount(1);
    };

    const renderImageUploadItems = () => {
        const items = [];
        for (let i = 1; i <= imageUploadCount; i++) {
            items.push(
                <div key={`imageUpload${i}`}>
                    <label htmlFor={`imageUpload${i}`}>Image Upload {i}:</label>
                    <input type="file" id={`imageUpload${i}`} name={`imageUpload${i}`} accept="image/*" />
                </div>
            );
        }
        return items;
    };

    const renderVideoUploadItems = () => {
        const items = [];
        for (let i = 1; i <= videoUploadCount; i++) {
            items.push(
                <div key={`videoUpload${i}`}>
                    <label htmlFor={`videoUpload${i}`}>Video Upload {i}:</label>
                    <input type="file" id={`videoUpload${i}`} name={`videoUpload${i}`} accept="video/*" />
                </div>
            );
        }
        return items;
    };

    const handleCampaignCreation = () => {
        // Logic for campaign creation can be added here if needed
    };

    return (
        <div>
            <h2>Campaign Submission</h2>
            <form action="#" method="POST">
                <div>
                    <label htmlFor="purpose">Purpose:</label>
                    <select id="purpose" name="purpose">
                        <option value="medical">Medical Expenses</option>
                        <option value="disaster">Disaster Relief</option>
                        <option value="education">Education Funding</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="recepient">Recipient</label>
                    <select id="recepient" name="recepient">
                        <option value="self">Self</option>
                        <option value="family">Family Member</option>
                        <option value="friend">Friend</option>
                        <option value="community">Community</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="phone_number">Phone Number:</label>
                    <input type="tel" id="phone_number" name="phone_number" required />
                </div>
                <div>
                    <label htmlFor="amount_needed">Amount Needed:</label>
                    <input type="number" id="amount_needed" name="amount_needed" required />
                </div>

                <div id="campaign-creation">
                    <h3>Campaign Creation</h3>
                    <div id="commentItems">
                        <div>
                            <label htmlFor="comment1">Write your story:</label>
                            <textarea id="comment1" name="comment1" rows="4" cols="50"></textarea>
                        </div>
                    </div>

                    <div id="imageUploadItems">
                        {renderImageUploadItems()}
                    </div>
                    <div id="videoUploadItems">
                        {renderVideoUploadItems()}
                    </div>
                </div>
                
                <button id="submitbutton" type="submit" onClick={handleCampaignCreation}>Submit</button>
            </form>
        </div>
    );
}

export default Form;