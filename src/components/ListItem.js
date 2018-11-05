import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Flag from "./Flag";

class ListItem extends Component {
    constructor(props) {
        super(props);
    }

    deleteItem(item) {
        this.props._handleDelete(item);
    }

    editItem(item) {
        console.log(item);
    }

    hasNumber(number) {
        if (typeof (number) === "undefined")
            return '';
        else
            return <b>{number} - </b>;
    }

    // render() {
    //     return (
    //         <div className='panel panel-default'>
    //             <div className='panel-heading clearfix'>
    //                 <h4 className='panel-title'>
    //                     <a href={this.props.URL}>
    //                         {this.props.Name} </a>
    //                     <div className="btn-group-sm pull-right">
    //                         <Link to={{
    //                             pathname: `/item/${this.props.ConstructorId}`,
    //                             state: {
    //                                 URL: this.props.URL,
    //                                 Name: this.props.Name,
    //                                 Nationality: this.props.Nationality,
    //                                 ConstructorId: this.props.ConstructorId
    //                             }
    //                         }}>
    //                             <button className='btn btn-sm btn-info glyphicon glyphicon-plus-sign'></button>
    //                         </Link>
    //                         <button className="btn btn-info glyphicon glyphicon-edit" onClick={this.editItem.bind(this, this.props)}></button>
    //                         <button className="btn btn-info glyphicon glyphicon-trash" onClick={this.deleteItem.bind(this, this.props)}></button>
    //                     </div>
    //                 </h4>
    //             </div >

    //             <div className='panel-body'>
    //                 <Flag Nationality={this.props.Nationality} />
    //             </div>
    //         </div >
    //     );
    // }

    render() {
        return (
            <tr>
                <th Style='vertical-align: middle;' Scope="row">{this.props.Position}</th>
                <td Style='vertical-align: middle;' > <a href={this.props.URL}>{this.props.Name}</a></td>
                <td Style='vertical-align: middle;' >{this.props.Nationality}</td>
                <td Style='vertical-align: middle;' >{this.props.Wins}</td>
                <td Style='vertical-align: middle;'  >{this.props.Points}</td>
                <td>
                    <div className="btn-group-sm pull-right">
                        <Link to={{
                            pathname: `/item/${this.props.ConstructorId}`,
                            state: {
                                URL: this.props.URL,
                                Name: this.props.Name,
                                Nationality: this.props.Nationality,
                                ConstructorId: this.props.ConstructorId
                            }
                        }}>
                            <button className='btn btn-sm btn-info glyphicon glyphicon-plus-sign'></button>
                        </Link>
                        <button className="btn btn-info glyphicon glyphicon-edit" onClick={this.editItem.bind(this, this.props)}></button>
                        <button className="btn btn-info glyphicon glyphicon-trash" onClick={this.deleteItem.bind(this, this.props)}></button>
                    </div>
                </td>
            </tr>
        );
    }

}

export default ListItem;
