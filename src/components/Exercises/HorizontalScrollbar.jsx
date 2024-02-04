import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BodyPartCard from './BodyPartCard';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { fetchData } from '../../FetchData/fetchData';
import { setBodyPart } from '../../store/BodyPartSlice';

const HorizontalScrollbar = ({ data, loader }) => {
    const dispatch = useDispatch();
    return (
        loader ? <div className='w-full flex justify-center items-center'>
                     <div className='loader'></div>
                 </div>
            : (

                <ScrollMenu data={data} scrollContainerClassName='w-full max-lg:w-full'>
                    {data.map((item, index) => (
                        <BodyPartCard onClick={() => {
                            dispatch(setBodyPart(item))
                            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
                        }} key={index} item={item} />
                    ))}
                </ScrollMenu>
            )
    );
};

export default HorizontalScrollbar;
