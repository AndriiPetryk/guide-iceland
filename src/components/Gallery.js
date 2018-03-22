import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import { Button, ButtonGroup } from 'reactstrap';
import PicItem from './PicItem';
import PreviewModal from './PreviewModal';

class Gallery extends Component {
    constructor(props){
        super(props);
        this.state = {
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
        const {btnPop, btnVer, btnLat, btnNew, modalIsOpen, selectedPic} = this.state;
        return (
            <div style={{paddingTop: 50 + "px"}}>
                <div className="text-center" style={{width: 100 + "%"}}>
                    <ButtonGroup size="sm">
                        <Button
                            onClick={() => this._executeSearch(btnPop)}>
                            Popular tips
                        </Button>
                        <Button
                            onClick={() => this._executeSearch(btnVer)}>
                            Verified locals
                        </Button>
                        <Button
                            onClick={() => this._executeSearch(btnLat)}>
                            Latest tips
                        </Button>
                        <Button
                            onClick={() => this._executeSearch(btnNew)}>
                            Newest locals
                        </Button>
                    </ButtonGroup>

                </div>
                <div className="container">
                    {this.state.pictures.map((item, index) => {
                        return <PicItem key={index} {...item} openModal={this.openPreview.bind(this)}/>
                    })}
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
        this.setState({ pictures })
    }

}
const FEED_SEARCH_QUERY = gql`
    query FeedSearchQuery($filter: String!) {
        feed(filter: $filter) {
            id
            link
            uniq
            pic
        }
    }
`

export default withApollo(Gallery)