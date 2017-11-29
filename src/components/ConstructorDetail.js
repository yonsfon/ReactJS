import React, { Component } from 'react';
import Driver from "./Driver";
const API = "http://ergast.com/api/f1/current/constructors";
const DEFAULT_QUERY = 'drivers.json';

class ConstructorDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Data: {},
            Drivers: []
        }
    }

    componentDidMount() {
        this._getData();   
    }

    _getData = async () => {
        fetch(`${API}/${this.props.match.params.member}/${DEFAULT_QUERY}`).then(response => response.json())
            // fetch(`${API}${DEFAULT_QUERY}/${this.props.ConstructorID}`).then(response => response.json())
            .then(jsondata => {
                // console.log(jsondata[0]);
                this.setState({
                    Data: jsondata.MRData.DriverTable,
                    Drivers: jsondata.MRData.DriverTable.Drivers
                });
            });
    }

    compare(a, b) {
        if (a.permanentNumber < b.permanentNumber)
            return -1;
        if (a.permanentNumber > b.permanentNumber)
            return 1;
        return 0;
    }

    render() {
        this.state.Drivers.sort(this.compare); 
        
        return (
            <div className='panel panel-default'>
                <div className='panel-heading clearfix'>
                    <h4 className='panel-title'>
                        {this.state.Data.season}
                    </h4>
                </div >
                {
                    this.state.Drivers.map((item, index) => {
                        return <Driver
                            driverID={item.driverId}
                            permanentNumber={item.permanentNumber}
                            code={item.code}
                            familyName={item.familyName}
                            givenName={item.givenName}
                            nationality={item.nationality}
                            url={item.url}
                            key={index}
                        />
                    })
                }
            </div>
        );
    }
}

export default ConstructorDetail;