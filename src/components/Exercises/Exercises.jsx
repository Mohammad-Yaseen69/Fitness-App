import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ExerciseCard from './ExerciseCard';
import { emptyExercises, setExercises } from '../../store/ExerciseSlice';
import { fetchData } from '../../FetchData/fetchData';
import { Pagination } from '@mui/material';


const Exercises = () => {
    const { data: exercises } = useSelector(state => state.exercises)
    const { loading } = useSelector(state => state.exercises)
    const { data: bodyPartName } = useSelector(state => state.bodyPart)
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch()
    const indexOfLastElem = currentPage * 9
    const indexofFirstElem = indexOfLastElem - 9
    const currentExercises = exercises.slice(indexofFirstElem, indexOfLastElem)

    const pageChange = (e , value) => {
        setCurrentPage(value)
        window.scrollTo({top : 1800 , behavior : 'smooth'})
    }

    useEffect(() => {
        setCurrentPage(1)
        dispatch(emptyExercises())
        if (bodyPartName === "All") {
            const dataP = fetchData('exercises').then(data => {
                dispatch(setExercises(data))
            })
        }
        else {
            const dataP = fetchData(`exercises/bodyPart/${bodyPartName}`).then(data => {
                dispatch(setExercises(data))
            })
        }
    }, [bodyPartName])

    return (
        <div id='exercises' className='w-full h-fit flex flex-col md:my-28 my-12 p-9'>
            <h1 className='font-bold max-sm:text-[5.5vw] text-[4vw] self-start'>
                Showing Results :
            </h1>
            <div className='w-full mt-12 flex justify-center flex-row flex-wrap gap-[30px] md:gap-[50px] '>
                {loading ? <div className='loader'></div> :
                    currentExercises.map((exercises, index) => (
                        <ExerciseCard key={index} item={exercises} />
                    ))
                }
            </div>

            {!loading &&
                <div className="flex gap-3 mt-4 overflow-x-auto sm:justify-center">
                    <Pagination
                        count={Math.ceil(exercises.length / 9)}
                        page={currentPage}
                        onChange={pageChange}
                        variant="outlined"
                        shape="rounded" 
                        />
                </div>}
        </div>
    )
}

export default Exercises