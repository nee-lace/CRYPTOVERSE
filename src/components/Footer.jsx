import React from 'react';
import {
    Typography
} from "antd";

const Footer = () => {
    return (
        <div>
            <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
                Cryptoverse <br/>
                All rights reserved
            </Typography.Title>
        </div>
    );
};

export default Footer;