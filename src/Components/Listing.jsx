import React from 'react';
import './Listing.css';
import Select from 'react-select';

const status_options = [
    {value: 'applied', label: 'Applied, awaiting feedback'},
    {value: 'interviewing', label: 'Interviews in progress'},
    {value: 'offered', label: 'Received Offer'},
    {value: 'rejected', label: 'Rejected'}
];

class Listing extends React.Component {

    render() {
        return (
            <span>
                <input placeholder="Company"/>
                <input placeholder="Position"/>
                <Select className='status-select' placeholder="Status" options={status_options}/>
            </span>
        )
    }
};

export default Listing;