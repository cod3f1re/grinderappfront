import React, {useEffect, useState} from "react";
import {getRequest} from '../../main/Routes/AxiosIntance';


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

    useEffect(() => {
        fetchUser()
    }, []);

    return (
        <>
            Users
            {post.map((item, i) => {
                return (
                    <div key={i}>
                        <p>{item?.name}</p>
                    </div>
                );
            })}
        </>
    )
}
