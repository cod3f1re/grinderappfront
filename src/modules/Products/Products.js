import React, {useEffect, useState} from "react";
import {getRequest} from '../../main/Routes/AxiosIntance';
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import {isMobile} from "react-device-detect";


export default function Products() {
    const [post, setPost] = useState([]);

    async function fetchUser() {
        try {
            const user = await getRequest('https://jsonplaceholder.typicode.com/users');
            console.log(user.data)
            setPost(user?.data);
        } catch (error) {
            //Log errors
        }
    }

    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    useEffect(() => {
        fetchUser()
    }, []);


    let type = 0;
    if (isMobile) {
        type = 6;
    } else {
        type = 4;
    }

    return (
        <>
            Products
            <Grid container rowSpacing={0} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                {post.map((item, i) => {
                    return (
                        <Grid xs={type}>
                            <Item>
                                <Card sx={{maxWidth: 345}}>
                                    <CardHeader
                                        title={item?.name}
                                        subheader="September 14, 2016"
                                    />
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image="https://doto.vtexassets.com/arquivos/ids/204985/pc-gamer-grizzly-24-kit-gamer-5600g-1tb-dotomexico-vista-frontal-2.jpg?v=637897224870370000"
                                        alt="Paella dish"
                                    />
                                </Card>
                            </Item>
                        </Grid>
                    );
                })}
            </Grid>
        </>
    )
}