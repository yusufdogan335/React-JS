import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div>
                <div className="card w-100">
                    <img src={this.props.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.cardTitle}</h5>
                        <p className="card-text">{this.props.cardText}</p>
                        <p className="card-text"><small className="text-muted">{this.props.updatedTime}</small></p>
                    </div>
                </div>
            </div>
        );
    }
}


export default Card;


