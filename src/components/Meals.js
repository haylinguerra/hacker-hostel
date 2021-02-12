import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

const Meals = (({dates, hackerList}) => {
    console.log(dates)
    return (<div className="col-xs-12  col-sm-12 col-md-12 col-lg-12">
            <ol id="list">
                {hackerList.map((hacker, index) => {
                    for (let dateIndex = 0; dateIndex < dates[index].length; dateIndex++) {
                        const date = dates[index][dateIndex];
                        return (
                        <div key={index}>
                            <li className="morning">Breakfast for {hacker} on {date}</li>
                            <li className="afternoon">Lunch for {hacker} on {date}</li>
                            <li className="night">Dinner for {hacker} on {date}</li>
                        </div>
                        )
                    }
                })}
            </ol>
        </div>);
});
export default Meals;
