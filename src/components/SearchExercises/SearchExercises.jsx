import React, { useEffect, useState } from 'react'
import InputBox from './InputBox'
import { fetchData } from '../../FetchData/fetchData'
import { useDispatch } from 'react-redux'
import { setBodyPart } from '../../store/BodyPartSlice'
import {HorizontalScrollbar} from '../'

const SearchExercises = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const data = fetchData('exercises/bodyPartList').then((data) => {
            dispatch(setBodyPart(data))
        })
    }, [])


    return (
        <div className='w-full  flex flex-col items-center justify-center'>
            <h1 className='font-bold max-ss:text-[5.5vw] max-ss:w-[70%] text-[4.5vw] w-[60%] text-center'>
                Awesome Exercises You
                Should Know
            </h1>
            <div>
                <InputBox />
            </div>

            <div className='w-full mt-14'>
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                    <HorizontalScrollbar />
                </div>
            </div>
        </div>
    )
}

export default SearchExercises