import React from 'react';
import Spinner from 'react-spinkit';
import '../../../styles/custom.css';

export const Loader = (props) => {
    const { loading, ...rest } = props;
    return (
        <div className="loader-wrapper" style={{ display: !!loading ? 'block' : 'none' }}>
            <Spinner name="line-scale-pulse-out-rapid" color="steelblue" />
            {/* <Spinner name="three-bounce" color="steelblue" /> */}
        </div>
    );
}