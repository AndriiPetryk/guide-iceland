import React, {Component} from 'react';
import '../styles/index.css';
import BurgerMenu from './Menu';

export default class Home extends Component{

    render(){
        return (
            <div id="home" className="photobuddy_fl_gallery_list_in">
                <BurgerMenu/>
                <div className="home">
                    <div className="home--text" style={{width: 100 + "%", marginBottom: 50}}>
                        <div class="title_holder">
                            <h2>
                                <span>Wonderful Mountains</span>
                            </h2>
                            <span class="category">
                                Nature / Mountain
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}