import React from 'react';
import Link from "next/link";
import Row from "../../components/mui/Grid/Row";
import Col from "../../components/mui/Grid/Col";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Layout from "@/components/Layout";

const LoginPage = () => {
    return (
        <Row rowSpacing={4} style={{ width:"100%", display:"flex", alignItems: "center", justifyContent: "center" }}>
            <Col xs={12}/>
            <Col xs={12} sm={6} sx={{display: "flex", justifyContent: "center"}}>
                <Link href="/login/sign-up" style={{textDecoration:"none", }}>
                    <Button variant="contained" color="secondary" sx={{padding: "20px 50px"}}>
                        <Typography fontSize="30px">ثبت نام</Typography>
                    </Button>
                </Link>
            </Col>
            <Col xs={12} sm={6} sx={{display: "flex", justifyContent: "center"}}>
                <Link href="/login/sign-in" style={{textDecoration:"none", }}>
                    <Button variant="contained" color="secondary" sx={{padding: "20px 50px"}}>
                        <Typography fontSize="30px">ورود</Typography>
                    </Button>
                </Link>
            </Col>
            <Col xs={12}/>
        </Row>
    );
};

LoginPage.getLayout = (page) => {
    return(
        <Layout>
            {page}
        </Layout>
    )
}

export default LoginPage;