// first constructor -->state initialization,
// render first worked,
// onClick event worked,
// setState --> triggered render method,
// render method shows current JSX on page.

import React from 'react';

class Collapse extends React.Component {

    constructor() {
        super();

        this.state = {
            showContent: false
        }

        /* this.showMore = () => {
            console.log(this)
        } */

        //this.showMore = this.showMore.bind(this)

    }

    /* showMore() {
        this.setState({ showContent: true })
        console.log(this)
    } */

    showMore = () => {
        this.setState({ showContent: !this.state.showContent })

        /* this.state = {
            showContent: true
        } */
    }


    render() {
        return (
            <div>
                <button className="btn btn-primary w-100" onClick={this.showMore}>
                    Link with href
                </button>

                {
                    this.state.showContent ? (
                        <div className="collapse show" >
                            {this.props.children}
                        </div>
                    ) : null
                }

            </div >
        );
    }

};

export default Collapse;


