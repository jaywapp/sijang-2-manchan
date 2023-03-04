import { useState, useEffect } from "react";
import { Datas, Update } from "../datas/data";

function FeedBlocks( ){

    const [datas, setDatas] = useState([]);

    const onClick = () => {

        var target = Datas();

        Update()
        setDatas([target]);
    }

    var feeds = datas[0];

    if(feeds != null && feeds.length != 0){
        console.log(feeds[0]);
    }


    return(
        <div>
            <button onClick={onClick}>읽어오기</button>
        </div>
    );
}

export default FeedBlocks;