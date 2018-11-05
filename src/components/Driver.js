import React, { Component } from 'react';
const API = 'http://ergast.com/api/f1/current';
const QUERY = 'driverStandings.json';

class Driver extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: []
        };
    }

    componentDidMount() {
        this._getData();
    }
    
    componentDidUpdate() {
        console.log("componentDidUpdate");
    };

    _getData = async () => {
        fetch(`${API}/${QUERY}`).then(response => response.json())
            .then(jsondata => {
                this.setState({
                    Data: jsondata.MRData.StandingsTable.StandingsLists[0].DriverStandings
                });
            });
    }

    render() {
        // console.log(API + QUERY);
        // console.log(this.state.Data);
        // console.log(this.props.driverID);
        // console.log(this.state.Data.filter(t => t.Driver.driverId === this.props.driverID));
        // console.log(this.state.Data.filter(t => t.Driver.driverId === this.props.driverID).map(x => x.points));
        // let x = this.state.Data.filter(t => t.Driver.driverId === this.props.driverID)[0];
        // console.log(x);

        return (
            <div className='panel panel-default'>
                <div className='panel-heading clearfix'>
                    <h4 className='panel-title'>
                        {this.props.permanentNumber} - {this.props.givenName} {this.props.familyName} - {this.props.nationality}
                    </h4>
                </div>
                <div className='panel-body'>
                    {this.state.Data.filter(t => t.Driver.driverId === this.props.driverID)
                        .map(item =>
                            <div>
                                <div><b>Position: </b>{item.position}</div>
                                <div><b>Points: </b>{item.points}</div>
                                <div><b>Wins: </b>{item.wins}</div>
                            </div>
                        )}
                </div>
                <div className='panel-footer'>
                    <a href={this.props.url}>Link</a>
                </div>
            </div>
        );
    }
}

export default Driver