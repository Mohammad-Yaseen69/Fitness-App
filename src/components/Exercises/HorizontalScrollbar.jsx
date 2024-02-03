import React from 'react';
import { useSelector } from 'react-redux';
import BodyPartCard from './BodyPartCard';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

const HorizontalScrollbar = () => {
    const { data } = useSelector(state => state.bodyPart);

    return (
        <ScrollMenu data={data} >
            {data.map((item, index) => (
                <BodyPartCard key={index} item={item} />
            ))}
        </ScrollMenu>
    );
};

export default HorizontalScrollbar;
