import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Example extends Component {
    constructor(){
        super();
        console.log(super());
        this.state = {
            news: [],
            msg: 'mymsg'
        }
    }

    componentDidMount() {
        axios.get('api/news').then(response=>{
            this.setState({news:response.data});
        }).catch(errors=>{
            console.log(errors);
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body">
                                {
                                    this.state.news.map(
                                        data =>
                                        <div class="mb-4">
                                            {data.content}
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
