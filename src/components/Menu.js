import React, {Component} from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'


var styles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '36px',
        background: '#000',
    },
    bmBurgerBars: {
        background: '#373a47'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#bdc3c7'
    },
    bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
};
let overlayStyle = {
    mozTransform: 'translate3d(100%, 0, 0)',
    MsTransform: "translate3d(100%, 0, 0)",
    OTransform: "translate3d(100%, 0, 0)",
    WebkitTransform: "translate3d(100%, 0, 0)",
    background: "rgba(0, 0, 0, 0.3)",
    height: "100%",
    opacity: 0,
    position: "fixed",
    transform: "translate3d(100%, 0, 0)",
    transition: "opacity 0.3s, transform 0s 0.3s",
    width: "100%",
    zIndex: 1000
};
class BurgerMenu extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }

    // showSettings (event) {
    //     event.preventDefault();
    // }

    closeMenu () {
        this.setState({menuOpen: false})
    }


    render () {
        return (
            <Menu isOpen={this.state.menuOpen}>
                <div className="photobuddy_fl_vertical_menu">
                    <div className="photobuddy_fl_vertical_menu_in scrollable">
            	<span className="vertical_menu_closer">
                	<a href="#" onClick={this.closeMenu.bind(this)}></a>
                    <span></span>
                    <span></span>
                </span>
                        <div style={{textAlign: 'right'}}>
                            <div className="photobuddy_fl_logo" style={{display: 'inline-block', textAlign: "center", fontSize: 1.5 + "em", textTransform: "uppercase", padding: 5 + "px"}}>
                                Emotion of photography
                            </div>
                        </div>
                        <div className="photobuddy_fl_vertical_menu_nav_list">
                            <ul>
                                <li>
                                    <Link to="/"><span className="line">home</span></Link>
                                </li>
                                <li>
                                    <Link to="/gallery"><span className="line">galleries</span></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="photobuddy_fl_copyright">
                            <span className="cright">&copy; Copyright 2018.</span>
                        </div>
                    </div>
                </div>
            </Menu>
        );
    }
}

export default withRouter(BurgerMenu);