import React from 'react'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import './style/card.css'

const CardSkeleton = (props) => {
    return (
        <div className='row justify-content-center overflow-hidden'>
            <div className='col-lg-3 card-container'>
                <div className='person-container' >
                    <div className='m-1'><Skeleton circle highlightColor='#71d385' baseColor='#71d385b4' height={150} width={150} /></div>
                    <div className='m-1'><Skeleton highlightColor='#71d385' baseColor='#71d385b4' height={30} width={200} count={2} /></div>
                </div>
            </div>
            <div className='col-lg-3 card-container'>
                <div className='person-container' >
                    <div className='m-1'><Skeleton circle highlightColor='#71d385' baseColor='#71d385b4' height={150} width={150} /></div>
                    <div className='m-1'><Skeleton highlightColor='#71d385' baseColor='#71d385b4' height={30} width={200} count={2} /></div>
                </div>
            </div>
            <div className='col-lg-3 card-container'>
                <div className='person-container' >
                    <div className='m-1'><Skeleton circle highlightColor='#71d385' baseColor='#71d385b4' height={150} width={150} /></div>
                    <div className='m-1'><Skeleton highlightColor='#71d385' baseColor='#71d385b4' height={30} width={200} count={2} /></div>
                </div>
            </div>

        </div>
    )
}

export default CardSkeleton