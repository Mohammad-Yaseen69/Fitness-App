import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ExerciseCard from './ExerciseCard';
import { emptyExercises, setExercises } from '../../store/ExerciseSlice';

const Exercises = () => {
    const { data: exercises } = useSelector(state => state.exercises)
    const { loading } = useSelector(state => state.exercises)
    const { data: bodyPartName } = useSelector(state => state.bodyPart)

    // useEffect(() => {
    //    setLoading(true)

       
    // }, [bodyPartName])

    return (
        <div id='exercises' className='w-full h-fit flex flex-col md:my-28 my-12 p-9'>
            <h1 className='font-bold max-sm:text-[5.5vw] text-[4vw] self-start'>
                Showing Results :
            </h1>
            <div className='w-full mt-12 flex justify-center flex-row flex-wrap gap-[30px] md:gap-[50px] '>
                {loading ? <div className='loader'></div> :
                    exercises.map((exercises, index) => (
                        <ExerciseCard key={index} item={exercises} />
                    ))
                }
            </div>
        </div>
    )
}

export default Exercises