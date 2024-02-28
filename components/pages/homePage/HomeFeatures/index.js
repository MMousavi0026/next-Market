import React from 'react';
import HomeFeature from "./HomeFeature";
import Row from "../../../mui/Grid/Row";
import Col from "../../../mui/Grid/Col";
import style from "./HomeFeatures.module.css"
import {shopFeatures} from "@/data/shopFeatures";

const HomeFeatures = () => {
    return (
        <Row container rowSpacing={{ xs: 3, lg:0}} className={style.HomeFeatures}>
            {
                shopFeatures.map((item, index) => {
                    return (
                        <Col item xs={12} sm={6} lg={3} className={style.columns} key={index}>
                            <HomeFeature {...item}/>
                        </Col>
                    )
                })
            }
        </Row>
    );
};

export default HomeFeatures;