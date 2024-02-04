import React from 'react';
import gym from '../../assets/icons/gym.png';
import { useSelector } from 'react-redux';

const BodyPartCard = ({ item, onClick }) => {
    const { data } = useSelector(state => state.bodyPart)
    return (
        <div onClick={onClick} className={`flex border-t-4 py-9 w-[270px]${item === data && 'border-t-4 border-red-800'} bodyPart-card
         bg-white shadow-md items-center justify-center rounded-lg cursor-pointer m-4`}
            style={{ width: '270px' }}>
            <div className='px-6 py-4 w-[30vw] flex flex-col items-center justify-center gap-4'>
                <img src={gym} alt="" className='w-[30px]' />
                <div className='font-bold text-xl mb-2 whitespace-nowrap'>{item}</div>
            </div>
        </div>
    );
};

export default BodyPartCard;
