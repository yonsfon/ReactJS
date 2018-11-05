import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListItem from "./ListItem";

const API = 'http://ergast.com/api/f1/current/';
const DEFAULT_QUERY = 'constructorStandings.json';

class List extends Component {

    constructor(props) {
        super(props);

        // chamada a uma API, o state tem de ser inicializado
        this.state = {
            Season: 0,
            Teams: [] 
        }
    }

    componentDidMount() {
        this.getDataApi(API, DEFAULT_QUERY);
    }

    getDataApi(apiUrl, query, items) {
        fetch(API + DEFAULT_QUERY)
            .then(response => response.json())
            .then(jsondata => {
                // console.log(jsondata.MRData.StandingsTable.StandingsLists);
                // console.log(jsondata.MRData.StandingsTable.StandingsLists[0]);
                jsondata.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.map(item => {
                    this.newItem(jsondata.MRData.StandingsTable.StandingsLists[0].season, item)
                })
            });
    }

    newItem(season, item) {
        const data = this.state.Teams;
        data.push(item);
        this.setState({
            Season: season,
            Teams: data
        });
    };

    newItemOLD = () => {
        const data = this.state.Teams;
        let cnt = data.length + 1;
        const item = {
            title: 'titulo ' + cnt,
            description: `descrição ${cnt}`,
            objectID: `newObjectID ${cnt}`
        };

        data.push(item);
        this.setState({ items: data });
    };

    delLastItem = () => {
        const data = this.state.Teams;
        data.pop();
        console.log(data);
        this.setState({ Teams: data });
    }

    _handleDelete(item) {
        console.log("delete");
        console.log(item.ConstructorId);
        console.log(this.state.Teams);
        this.setState(prevState => ({
            Teams: prevState.Teams.filter(t => t.Constructor.constructorId !== item.ConstructorId)
        }));
    }
    render() {
        // console.log("OLA2");
        // console.log(this.state);
        // this.state.Teams.sort(this.compare);
        return (
            <div className='col-md-12'>
                <Link to={{
                    pathname: `/standings`,
                }}>
                    <button className='btn btn-link'>Pilots Championship</button>
                </Link>
                <h3>Constructors Championship - {this.state.Season}</h3>
                <table className="table table-striped table-responsive">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Nationality</th>
                            <th scope="col">Wins</th>
                            <th scope="col">Points</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.Teams.map((item, index) => {
                                return <ListItem
                                    Position={item.position}
                                    Points={item.points}
                                    Wins={item.wins}
                                    Name={item.Constructor.name}
                                    URL={item.Constructor.url}
                                    Nationality={item.Constructor.nationality}
                                    key={index}
                                    ConstructorId={item.Constructor.constructorId}

                                    _handleDelete={this._handleDelete.bind(this)}
                                />
                            })
                        }
                    </tbody>
                </table>
                <button onClick={this.newItemOLD}>Novo</button>
                <button onClick={this.delLastItem}>Remover</button>
            </div>
        );
    }
}

export default List;
