import React, { Component } from 'react'

export default class PokemonCard extends Component {
    render() {
        return (
            <div className="col-md-4 col-sm-6 mb-5">
                <div className="card">
                    <div className="card-header">
                        <h1>Marcelo</h1>
                    </div>    
                    <div className="card-body">
                        <button className="btn btn-success">ADD IN YOUR CART</button>
                    </div>      
                </div>               
            </div>
        )
    }
}
