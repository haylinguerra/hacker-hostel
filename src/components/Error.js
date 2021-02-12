import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

const Error = (({client}) => {
        console.log('props: ',client)
    return (<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 error">
            <div id="list">
            <div className="error-msg">
                    <i className="fa fa-times-circle"></i>
            <p>Error! No menu generated for {client}</p>
                    </div>
            </div>
        </div>);
});

export default Error;
