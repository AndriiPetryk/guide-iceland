import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import FEED_SEARCH_QUERY from './graphQlQuery';
import PicItem from './PicItem';
import PreviewModal from './PreviewModal';
import BurgerMenu from './Menu';


class Gallery extends Component {
    constructor(props){
        super(props);
        this.state = {
            paginator: 1,
            itemsPerPage: 6,
            pictures: [],
            modalIsOpen: false,
            selectedPic: { pic: '', link: '' },
            btnPop: "pop",
            btnVer: "ver",
            btnLat: "lat",
            btnNew: "new"
        };
    }

    componentDidMount(){
        const {btnPop} = this.state;
        setTimeout(()=>this._executeSearch(btnPop), 2000);
    }

    loadMore(e) {
        e.preventDefault();
        const { paginator } = this.state;
        this.setState({ paginator: paginator + 1 })
    }

    openPreview(e, pic, link) {
        e.preventDefault();

        this.setState({
            modalIsOpen: true,
            selectedPic: { pic, link }
        })
    }

    closePreviewModal() {
        this.setState({
            modalIsOpen: false,
            selectedPic: { pic: '', link: '' }
        })
    }

    render() {
        const {paginator, pictures, itemsPerPage, btnPop, btnVer, btnLat, btnNew, modalIsOpen, selectedPic} = this.state;
        return (
            <div className="photobuddy_fl_blog">
                <div className="photobuddy_fl_blog_bg">
                    <div className="title_holder">
                        <h2>Photography And Travel</h2>
                        <span>We will Publish photography related posts here</span>
                    </div>
                </div>
                <BurgerMenu/>
                <div className="container photobuddy_fl_gallery_list_in">
                    <div style={{width: 100 + "%", marginBottom: 50}}>
                        <div class="title_holder">
                            <h2>
                                <span>Photography Emotion</span>
                            </h2>
                            <span class="category">
                                <span href="#" onClick={() => this._executeSearch(btnPop)}>Popular tips</span> / <span onClick={() => this._executeSearch(btnVer)} href="#">Verified locals</span> / <span onClick={() => this._executeSearch(btnLat)} href="#">Latest tips</span> / <span onClick={() => this._executeSearch(btnNew)} href="#"> Newest local</span>
                            </span>
                        </div>
                    </div>
                        {pictures.slice(0, paginator * itemsPerPage).map((item, index) => {
                            return <PicItem key={index} {...item} openModal={this.openPreview.bind(this)}/>
                        })}
                        {paginator * itemsPerPage < pictures.length
                            ?<span onClick={this.loadMore.bind(this)} className="see_more"><a href="#">See More</a></span>
                            : null

                        }
                </div>

                <PreviewModal isOpen={modalIsOpen} selectedPic={selectedPic}
                              closeModal={this.closePreviewModal.bind(this)}/>
            </div>
        )
    }

    _executeSearch = async (uniq) => {
        const filter = uniq;
        const result = await this.props.client.query({
            query: FEED_SEARCH_QUERY,
            variables: { filter },
        });
        const pictures = result.data.feed;
        const paginator = 1;
        this.setState({ pictures, paginator })
    }

}


export default withApollo(Gallery)