import React, { useEffect, useState } from "react";
import { Datas, Update } from "../datas/data";

import { FeedTable, FeedGrid, Address1, Address2, AddressHeader1, AddressHeader2,
    FeedBlock, Title, Description,
    Option, Toilet, Parking, Button,
 } from "./FeedBlocks.Style";

 import Modal from "./Modal";

function FeedBlocks( ){

    const [datas, setDatas] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedFeed, setselectedFeed] = useState(null);

    const updateCallBack = () => {
        setDatas([Datas]);
    }

    const onClick = () => {
        Update(updateCallBack)
    }
    
    const openModal = () => {
        setModalVisible(true)
    }

    const closeModal = () => {
        setModalVisible(false)
    }

    const feedClick = (item) => {
        openModal();
        setselectedFeed(item);
    }


    let index = 1;
    var data = datas[0];

    return(
        <>
            <FeedTable>
                <FeedGrid>{data && data.map((item)=> Feed(item, index++, feedClick))}</FeedGrid>
                <Button onClick={onClick}>more</Button>
            </FeedTable>
            {
                modalVisible && <Modal 
                visible={modalVisible} closable={true} maskClosable={true} onClose={closeModal}>
                    {Map(selectedFeed)}
                </Modal>
            }
        </>
    );
}

function Feed ( item, index, onClick ){

    let name = item['시장명'];
    let hasToilet = item['공중화장실 보유여부'];
    let hasParkingArea = item['주차장 보유여부'];
    let address_new = item['소재지도로명주소'];
    let address_old = item['소재지지번주소'];

    let columnCount = 3;

    let row = parseInt((index - 1)/ columnCount) + 1;
    let column = ((index - 1) % columnCount) + 1;

    const OnClick = () =>{
        console.log(name + ' Click');
        onClick(item);
    }

    return (
        <FeedBlock row={row} column={column} onClick={OnClick}>
            <Description>
                <Title>{name}</Title>
                <AddressHeader1>도로명</AddressHeader1>
                <AddressHeader2>번지</AddressHeader2>
                <Address1>{address_new}</Address1>
                <Address2>{address_old}</Address2>
                <Option>
                    <Toilet hasToilet={hasToilet}/>
                    <Parking hasParkingArea={hasParkingArea}/>
                </Option>
            </Description>
        </FeedBlock>
    )
}

function Map(item){

    if(item == null)
        return 'none';

    // TODO

    return item['시장명'];
}

export default FeedBlocks;