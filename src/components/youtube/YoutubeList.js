import React from 'react';
import {YoutubeData} from "../../data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
    console.log(props);
    return (
        <div className="youtube-list">
            {props.children}
            {YoutubeData.map((item, index) => {
                // let newClass ='';
                // if (index === 1) newClass = 'aaaaa';
                const newClass = index === 1 ? 'bbbbb' : '';
                return (
                    <YoutubeItem
                        key={item.id}
                        image={item.image}
                        avatar={item.avatar || item.image}
                        title={item.title}
                        author={item.author}
                        className={newClass}
                    >
                    </YoutubeItem>
                )})}
        </div>
    );
};

export default YoutubeList;
