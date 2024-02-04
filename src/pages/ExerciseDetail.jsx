import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../FetchData/fetchData'
import { Detail } from '../components'

const ExerciseDetail = () => {
  const { id } = useParams()
  const [ExerciseDetail, setExerciseDetail] = useState({
    
  })

  useEffect(() => {
    fetchData(`exercises/exercise/${id}`).then(data => {
      setExerciseDetail(data)
    })
  }, [id])



  return (
    <div>
      <Detail exerciseDetail={ExerciseDetail}/>
    </div>
  )
}

export default ExerciseDetail