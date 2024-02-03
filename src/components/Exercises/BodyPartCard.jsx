import React from 'react';
import gym from '../../assets/icons/gym.png';

const BodyPartCard = ({ item }) => {
    return (
        <div className='flex border-t-4 h-[20vw] w-[270px] border-t-red-700 bodyPart-card bg-white shadow-md 
                       items-center justify-center rounded-lg m-4' 
                       style={{ width: '270px' }}>
            <div className='px-6 py-4 w-[30vw] flex flex-col items-center justify-center gap-4'>
                <img src={gym} alt="" className='w-[30px]' />
                <div className='font-bold text-xl mb-2 whitespace-nowrap'>{item}</div>
            </div>
        </div>
    );
};

export default BodyPartCard;
