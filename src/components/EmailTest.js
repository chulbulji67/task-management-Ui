import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const EmailTest = () => {
    const sendTestEmail = async () => {
        try {
            const response = await axios.get('/api/test-email');
            toast.success(response.data);
        } catch (error) {
            toast.error('Failed to send test email');
        }
    };

    return (
        <div>
            <h2>Email Test</h2>
            <button onClick={sendTestEmail}>Send Test Email</button>
        </div>
    );
};

export default EmailTest;
