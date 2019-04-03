import React from "react";
import "./style.css";
const groupPage = () => (
    <div className="head">
        <div className="wrap">
            <div className="title_wrap">
                <div className="new-group">New Group</div>
                <div className="close">Close</div>
            </div>
            <div className="search_wrap">
                <div className="img_search"><img src="./search_image.png" /></div>
                <div className="input_search"><input type="search" placeholder="Search..." /></div>
            </div>
            <div className="contact_wrap">
                {/* contacts */}
            </div>
            <div className="foot_wrap">
                <div className="cancel">Cancel</div>
                <div className="next">Next</div>
            </div>
        </div>
    </div>
)

export default groupPage;