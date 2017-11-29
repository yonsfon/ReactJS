import React, { Component } from 'react';
import Driver from "./Driver"
const API = 'http://ergast.com/api/f1/current';
const QUERY = 'drivers.json';

class Standings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Season: -1,
            Drivers: []
        };
    }

    componentDidMount() {
        this._getData();
    }

    _getData = async () => {
        fetch(`${API}/${QUERY}`).then(response => response.json())
            .then(jsondata => {
                this.setState({
                    Season: jsondata.MRData.DriverTable.season,
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
        console.log(this.state);
        this.state.Drivers.sort(this.compare)
        return (
           <div className='panel panel-default'>
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
        )
    }
}

export default Standings