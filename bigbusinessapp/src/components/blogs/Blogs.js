import React, { Component } from "react";
import {Card} from 'react-bootstrap';
import blogs from './BlogFormat';
import './Blogs.css';
const Blogs = (props) => {
    return (
        blogs.map(blog => {
            return <Card >
                        <Card.Img variant="top" src={blog.image} alt="None" />
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Body>
                            <Card.Text>{blog.content}</Card.Text>
                        </Card.Body>
                    </Card>
        })

    );
}

export default Blogs;