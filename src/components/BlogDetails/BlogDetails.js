import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './BlogDetails.css';
import { BsChevronLeft } from "react-icons/bs";

const BlogDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();


    return (
        <>
            <div className='header-gradient'>
                <div>
                    <button className='back-button' onClick={() => navigate('/')}>
                        <BsChevronLeft />
                        <p>Back</p>
                    </button>
                </div>
            </div>
        </>
    );
};

export default BlogDetails;