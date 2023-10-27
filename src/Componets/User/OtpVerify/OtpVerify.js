import axios from 'axios';
import React, { useState } from 'react';
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
//----------------------------------------------------------

const OtpVerify = () => {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();

    const toastMessage = (param) => {
        return {
            position: "top-center",
            autoClose: param,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await axios.post(process.env.REACT_APP_server_url + "/otp-verify", { otp });
        if (data.data.verified) {
            toast.info("Verified", toastMessage(1000));
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } else {
            toast.error("Invalid Otp", toastMessage(1000));
        }
    }

    return (
        <Container className="p-5 login-container mt-5" style={{ maxWidth: '400px' }}>
            <h2 className="text-start">OTP Verify</h2>
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mt-4">
                    <Form.Control type="number" name="otp" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" require />
                </Form.Group>

                <div className="mt-5 text-center">
                    <Button id="sbt-Button" type="submit">
                        Verify
                    </Button>
                </div>

            </Form>
            <ToastContainer />
        </Container>
    );
}

export default OtpVerify;
