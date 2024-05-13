import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import {Autocomplete, TextField} from "@mui/material";
import RMenuButton from "./RMenuButton";
import ProductsCategories from "../ProductsCategories";
import Row from "../../../mui/Grid/Row";
import Col from "../../../mui/Grid/Col";
import {useCallback} from "react";
import menuData from "../../../../data/menuData";

const ResponsiveMenu = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = useCallback((event, index) => {
        setSelectedIndex(index);
    }, []);

    const processElements = useCallback((data) => (
        data.map((item, index) => (
            <>
                <RMenuButton
                    fontSize="1.2rem"
                    selected={selectedIndex === item.title}
                    onClick={(event) => {
                        handleListItemClick(event, item.title)
                    }}
                    {...item}
                >
                    {
                        item.children && item.children.length > 0 && (
                            item.type === "button" ?
                                <Row rowSpacing={2} marginTop="-15px" marginBottom width="15rem">
                                    {
                                        item.children.map((discountDataItem, index) => {
                                            return (
                                                <Col xs={12} key={index}>
                                                    <ProductsCategories
                                                        titleColor="white"
                                                        discount="۲۰٪ تخفیف"
                                                        {...discountDataItem}
                                                    />
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                                :
                                <Row>
                                    <List sx={{width: '80%', padding: "0 0 20px 0"}}>
                                        {
                                            item.children && item.children.length > 0 ?
                                                processElements(item.children) : null
                                        }
                                    </List>
                                </Row>
                        )
                    }
                </RMenuButton>
                {(index + 1) !== data.length && (<Divider color="white"/>)}
            </>
        ))
    ), [selectedIndex, handleListItemClick])

    return (
        <Box padding="0 16px">
            <List component="nav" aria-label="main mailbox folders">
                <Autocomplete
                    sx={{marginTop: '15px', marginBottom: '10px',
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "white.main"
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "white.main !important"
                        },
                        "& .MuiInputLabel-formControl": {
                            color: "white.main"
                        },
                    }}
                    id="free-solo-demo"
                    freeSolo
                    options={top100Films.map((option) => option.title)}
                    renderInput={(params) =>
                        <TextField style={{color: 'white'}} color="secondary" {...params} label="جستجو"/>
                    }
                    slotProps={{paper: {style: {color: '#122d40', backgroundColor: '#01e281'}}}}
                />
                {processElements(menuData)}
            </List>
        </Box>
    );
}

export default ResponsiveMenu;

const top100Films = [
    {title: 'The Shawshank Redemption', year: 1994},
    {title: 'The Godfather', year: 1972},
    {title: 'The Godfather: Part II', year: 1974},
    {title: 'The Dark Knight', year: 2008},
    {title: '12 Angry Men', year: 1957},
    {title: "Schindler's List", year: 1993},
    {title: 'Pulp Fiction', year: 1994},
]