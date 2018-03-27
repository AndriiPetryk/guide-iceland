import React, { Component } from 'react'


export default class PreviewModal extends Component {
    render() {
        const { isOpen, closeModal, selectedPic } = this.props

        const previewLink = `${selectedPic.pic}?fit=crop&w=1900&h=1080`;
        const downloadLink = 'https://unsplash.com' + selectedPic.link.replace('?photo=', 'photos/') + '/download?force=true'
        const modalClass = `preview-modal ${isOpen ? '-show' : ''}`

        return <div className={modalClass}>
            <span onClick={closeModal} className="close-icon">&times;</span>
            <div className="preview-modal-inner" style={{ backgroundImage: `url(${previewLink})` }}>
                <a href={downloadLink} className="btn download-btn">download</a>
            </div>
        </div>
    }
}