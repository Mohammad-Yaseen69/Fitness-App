import { Card } from 'flowbite-react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ExerciseCard = ({ item }) => {
    const {
        bodyPart,
        equipment,
        gifUrl,
        id,
        instructions,
        name,
        secondaryMuscles,
        target
    } = item
    const { data } = useSelector(state => state.bodyPart)

    return (
        <div>
            <Link to={`exercise/${id}`}>
                <Card
                    className="max-w-sm min-w-sm border-t-4 border-t-red-900 min-h-[400px] rounded-lg justify-center items-start flex-1"
                    renderImage={() => (
                        <div className='max-h-[50%] self-center w-[70%]'>
                            <img className='w-full h-full object-cover rounded-lg' src={gifUrl} alt="" />
                        </div>
                    )}
                >

                    <div className='flex gap-4'>
                        <button className='p-2 rounded-[990px]'>{bodyPart}</button>
                        <button className='p-2 rounded-[990px]'>{target}</button>
                    </div>
                    <p className="font-bold  text-2xl">
                        {name.length < 40 ? name : name.slice(0, 41)}
                    </p>
                </Card>
            </Link>
        </div>
    )
}

export default ExerciseCard