import React, {useState} from 'react';
import {IconButton, Paper, Table, TableBody, TableContainer, TableHead, TableRow} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Button from "@mui/material/Button";
import {StyledTableCell, StyledTableRow} from "@/pages/cart-list";
import axios from "axios";
import dynamic from "next/dynamic";

const CloseIcon = dynamic(() => import('@mui/icons-material/Close'), {ssr: false})

const Test = ({cartProducts}) => {
    const [cartProduct] = useState(typeof cartProducts === "object" && cartProducts.length > 0 ? cartProducts : [])
    const [cartNumber, setCartNumber] = useState(1)

    const decrementCartNumber = () => {
        if (cartNumber > 1) {
            setCartNumber(cartNumber - 1);
        }
    }

    const incrementCartNumber = () => {
        setCartNumber(cartNumber + 1)
    }

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell> </StyledTableCell>
                            <StyledTableCell align="left"> </StyledTableCell>
                            <StyledTableCell align="left">محصول</StyledTableCell>
                            <StyledTableCell align="left">قیمت</StyledTableCell>
                            <StyledTableCell align="left">تعداد</StyledTableCell>
                            <StyledTableCell align="left">جمع جزء</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            cartProduct.map((item, index) => {
                                return (
                                    <StyledTableRow key={index}>
                                        <StyledTableCell component="th" scope="row">
                                            <IconButton color="error">
                                                <CloseIcon color="error"/>
                                            </IconButton>
                                        </StyledTableCell>
                                        <StyledTableCell component={Link} href={`/shop/${item.id}`}>
                                            <Image width={100} height={100} src={item.image} alt={item.name}/>
                                        </StyledTableCell>
                                        <StyledTableCell component={Link} href={`/shop/${item.id}`}>{item.name}</StyledTableCell>
                                        <StyledTableCell>{item.price}</StyledTableCell>
                                        <StyledTableCell>
                                            <div style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                marginBottom: "10px"
                                            }}>
                                                <Button onClick={decrementCartNumber} color="secondary">-</Button>
                                                <div style={{
                                                    border: "rgba(128, 128, 128, 0.4) solid 1px",
                                                    padding: "5px 15px",
                                                    borderRadius: "10px",
                                                    margin: "0 5px"
                                                }}>{cartNumber}</div>
                                                <Button onClick={incrementCartNumber} color="secondary">+</Button>
                                            </div>
                                        </StyledTableCell>
                                        <StyledTableCell>{cartNumber * item.price} تومان</StyledTableCell>
                                    </StyledTableRow>
                                )})
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <p>ohfowhgoiwgvoiwsogivwrvorsnvonrwogvongoun</p>
        </div>
    );
};

export const getServerSideProps = async () => {
    const dataList = await axios.get('https://json.xstack.ir/api/v1/products')
        .then(res => {
            return {
                cartProducts: (res.data.data.slice(0,5)),
                relatedProducts: (res.data.data.slice(10,12))
            }
        })
        .catch(() => {
            return "خطایی رخ داد!"
        })

    return {
        props: {
            cartProducts: dataList.cartProducts,
            relatedProducts: dataList.relatedProducts
        }
    }
}

export default Test;