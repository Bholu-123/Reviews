import React, { useState } from "react";
import People from './data';
import '../Styles/style.css';
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa';

const Reviews = () =>{
    const [index,setIndex]=useState(0);
    const {id,name,job,image,text}=People[index];

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index-1;
            if(newIndex<0)
            {
                newIndex=newIndex%People.length;
                newIndex=-(newIndex);
            }
            return newIndex;
        });
    }

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index+1;
            newIndex=newIndex%People.length;
            return newIndex;
        });
    }

    const randomPerson = () =>{
        let randomNumber=Math.floor(Math.random() * People.length);
        if (randomNumber === index) {
          randomNumber = index + 1;
        }
        randomNumber=randomNumber%People.length;
        return setIndex(randomNumber);
    }

    return(
        <div className="card" key={id}>
            <img src={image} alt={text}></img>
            <h4>{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className='buttonContainer'>
                <button className='prevBtn' onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className='nextBtn' onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
            <button className='randomBtn' onClick={randomPerson}>
                surprise me
            </button>
        </div>
    )
}

export default Reviews;