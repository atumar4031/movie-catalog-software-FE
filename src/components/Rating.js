import React, { startTransition } from 'react'
import movieImg from '../assets/netflex_bg_1.jpeg'
import Nav from './Nav'
import { FaStar } from 'react-icons/fa'
const colors = {
        orange: '#FFBA5A',
        gray: '#a9a9a9'
    }
function Rating() {
    const [currentValue, setCurrentValue] = React.useState(0);
    const [hoverValue, setHoverValue] = React.useState(undefined);
    const stars = Array(5).fill(0)


    const handleClick = value => {
        setCurrentValue(value)
    }
    const handleMouseOver = value => {
        setHoverValue(value)
    }

    const handleMouseLeave = () =>{
         setHoverValue(undefined)
    }


  return (
    <section className='wrapper'>
        <div style={{backgroundColor:'black'}}>
            <Nav/>
        </div>
        <main className='container page-width'>
            <div className='rating'>
                <div className='rating-form'>
                    <input type={'text'} placeholder='find movie' />
                    <button>find</button>
                </div>
                <div className='rating-container'>
                     {
                            stars.map(index => {
                                return(
                                    <div className='movie-card'>
                        <div className='movie-image'>
                            <img src={movieImg} alt='movie' style={{width:'250px', height:'170px'}}/>
                        </div>
                        <div className='movie-description'>
                            <h4>Movie name</h4>
                            <div className='stars'>
                                {
                                    stars.map((_,index)=>{
                                        return(
                                            <FaStar 
                                            key={index}
                                            size='20'
                                            style={{
                                                cursor: 'pointer',
                                                marginRight: '5'
                                            }}
                                            color={(hoverValue || currentValue) > index ? colors.orange : colors.gray}
                                            onClick={() => handleClick(index + 1)}
                                            onMouseOver={() => handleMouseOver(index + 1)}
                                            onMouseLeave={handleMouseLeave}
                                            />
                                        )
                                    })
                                }
                            </div>
                            <div className='movie-footer'><button>add</button></div>
                        </div>
                    </div>
                                )
                            })
                        }
                </div>
            </div>
        </main>
    </section>
  )
}

export default Rating