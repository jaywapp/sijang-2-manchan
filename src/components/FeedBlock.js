import React, { useCallback, useState } from "react";
import styled, { css } from 'styled-components';

const FeedBlockDiv = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;
    text-align: center;
    border-radius: 5mm;
    background-color: #d3d3d320;
    height: 100px;
    box-shadow: 2px 2px 2px 2px lightgray;
`


function FeedBlock( data ) {
    console.log(data["시장명"]);

    return (
        <FeedBlockDiv>
            <h1>{data["시장명"]}</h1>
        </FeedBlockDiv>
    )
}

export default FeedBlock;