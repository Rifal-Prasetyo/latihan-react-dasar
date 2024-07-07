import React from "react";
import './YouTubeComp.css';

const YouTubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="">
                <img src="https://rifalkom.my.id/storage/images/tmb/project/171964839618.66601537841ed.png" className="img-normal" alt="" srcset="" />
            </div>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
    )
}

// membuat default value props
YouTubeComp.defaultProps = {
    title: 'tidak berjudul',
    desc: 'tidak berdeskripsi'

}

export default YouTubeComp;