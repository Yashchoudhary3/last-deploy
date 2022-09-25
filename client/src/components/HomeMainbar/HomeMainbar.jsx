import React from 'react'
import {useLocation ,useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import './HomeMainbar.css'
import QuestionsList from './QuestionsList'
// import Questions from './Questions'

const HomeMainbar = () => {
  const location = useLocation()
  const user = 1;
  const navigate = useNavigate()

  const questionsList = useSelector(state => state.questionsReducer )
  // console.log(questionsList)

  // var questionsList = [{
  //   _id: 1,
  //   upVotes: 3,
  //   downVotes: 2,
  //   noOfAnswers: 2,
  //   questionsTitle: "What is a function?",
  //   questionsBody: "It meant to be",
  //   questionsTags: ["java","node js", " react js" , " mongodb" , "express js"],
  //   userPosted: "mano",
  //   userId: 1,
  //   askedOn: "jan 1",
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswer: 'kumar',
  //     answeredOn: "jan 2",
  //     userId: 2,
  //   }

  //   ]
  // },
  // {
  //   _id: 2,
  //   upVotes: 0,
  //   downVotes: 2,
  //   noOfAnswers: 0,
  //   questionsTitle: "What is a function?",
  //   questionsBody: "It meant to be",
  //   questionsTags: ["javascript" ,"R" , "python"],
  //   userPosted: "mano",
  //   userId: 1,
  //   askedOn: "jan 1",
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswer: 'kumar',
  //     answeredOn: "jan 2",
  //     userId: 2,
  //   }

  //   ]
  // },
  // {
  //   _id: 3,
  //   upotes: 1,
  //   downVotes: 2,
  //   noOfAnswers: 0,
  //   questionsTitle: "What is a function?",
  //   questionsBody: "It meant to be",
  //   questionsTags: ["javascript" ,"R" , "python"],
  //   userPosted: "mano",
  //   userId: 1,
  //   askedOn: "jan 1",
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswer: 'kumar',
  //     answeredOn: "jan 2",
  //     userId: 2,
  //   }

  //   ],
  // }

  // ]
  
  
  const checkAuth = () => {
    if(user === null)
    {
      alert("login or signup to ask  aquestion")
      navigate('./Auth')
    }
    else{
      navigate('/AskQuestion')
    }
  }
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>

        }
        <button  onClick={checkAuth} className='ask-btn'>Ask Question</button>

      </div>
      <div>
        {
          questionsList.data === null ?
          <h1>Loading...</h1> :
          <>
          <p>{ questionsList.data.length} questions</p>
            <QuestionsList questionsList ={questionsList.data}/>
            </>

        }
      </div>
      
    </div>
  )
}

export default HomeMainbar
