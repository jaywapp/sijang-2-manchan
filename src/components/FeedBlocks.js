import React, { useEffect, useState } from "react";
import { Datas, Update } from "../datas/data";
import styled, { css } from 'styled-components';

const FeedBlockDiv = styled.div`
    display: grid;
    grid-template-columns: 200px 2fr 2fr 1fr 1fr;
    grid-template-rows: 3fr 2fr 2fr;
    
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;

    text-align: center;
    border-radius: 5mm;
    background-color: #d3d3d320;
    box-shadow: 2px 2px 2px 2px lightgray;
`

const flexable = styled.div`
    display: flex;
`

const FeedBlockImg = styled.div`
    grid-row-start: 1;
    grid-row-end: 4;
    grid-column: 1;
    background-color: black;
`

const FeedBlockTitle = styled.h2(flexable)`
    grid-row: 1;
    grid-column-start: 2;
    grid-column-end: 4;
    margin-left: 10px;
`

const FeedBlockAddressHeader1 = styled.div(flexable)`
    grid-row: 2;
    grid-column: 2;
    margin-left: 10px;
`

const FeedBlockAddressHeader2 = styled.div(flexable)`
    grid-row: 3;
    grid-column: 2;
    margin-left: 10px;
`

const FeedBlockAddress1 = styled.div(flexable)`
    grid-row: 2;
    grid-column-start: 3;
    grid-column-end: 6;
`

const FeedBlockAddress2 = styled.div(flexable)`
    grid-row: 3;
    grid-column-start: 3;
    grid-column-end: 6;
`

const FeedBlockToilet = styled.div(flexable)`
    grid-row: 1;
    grid-column: 4;
`;

const FeedBlockParking = styled.div(flexable)`
    grid-row: 1;
    grid-column: 5;
`;


function FeedBlocks( ){

    const [datas, setDatas] = useState([]);

    const onClick = () => {

        var target = Datas();

        Update()
        setDatas([target]);
    }

    var data = datas[0];

    return(
        <div>
            {
                data && data.map((item)=> Feed(item))
            }
            <button onClick={onClick}>읽어오기</button>
        </div>
    );
}

function Feed ( item ){

    let name = item['시장명'];
    let hasToilet = item['공중화장실 보유여부'];
    let hasParkingArea = item['주차장 보유여부'];
    let address_new = item['소재지도로명주소'];
    let address_old = item['소재지지번주소'];


    return (
        <FeedBlockDiv>
            <FeedBlockImg/>
            <FeedBlockTitle>{name}</FeedBlockTitle>
            <FeedBlockAddressHeader1>도로명주소</FeedBlockAddressHeader1>
            <FeedBlockAddressHeader2>번지주소</FeedBlockAddressHeader2>
            <FeedBlockAddress1>{address_new}</FeedBlockAddress1>
            <FeedBlockAddress2>{address_old}</FeedBlockAddress2>
            <FeedBlockToilet>{hasToilet}</FeedBlockToilet>
            <FeedBlockParking>{hasParkingArea}</FeedBlockParking>
        </FeedBlockDiv>
    )
}

export default FeedBlocks;