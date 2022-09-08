import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import SlideImg from './SlideImg'

import ArrowLefth from '../../assets/iconmonstr-angel-left-thin.svg'
import ArrowRighth from '../../assets/iconmonstr-angel-right-thin.svg'
import SlideDescription from './SlideDescription'

const SlideShow = ({ objectInfo, products, description }) => {
    const slideShow = useRef(null)
    const interval = useRef(null)

    const nextSlide = () => {
        if (slideShow.current.children.length > 0) {
            const firstElement = slideShow.current.children[0]
            slideShow.current.style.transition = `1000ms ease-out all`

            const sizeSlide = slideShow.current.children[0].offsetWidth
            slideShow.current.style.transform = `translateX(-${sizeSlide}px)`

            const transition = () => {
                slideShow.current.style.transition = `none`
                slideShow.current.style.transform = `translateX(0)`

                slideShow.current.appendChild(firstElement)
                slideShow.current.removeEventListener('transitionend', transition)
            }
            slideShow.current.addEventListener('transitionend', transition)
        }
    }

    const previusSlide = () => {
        if (slideShow.current.children.length > 0) {
            const lastIndex = slideShow.current.children.length - 1
            const lastElement = slideShow.current.children[lastIndex]

            slideShow.current.insertBefore(lastElement, slideShow.current.firstChild)
            SlideShow.current.style.transition = `none`

            const sizeSlide = slideShow.current.children[0].offsetWidth
            slideShow.current.style.transform = `translateX(-${sizeSlide}px)`

            setTimeout(() => {
                slideShow.current.style.transition = `1000ms ease-out all`
                slideShow.current.style.transform = `translateX(0)`
            }, 30)
        }
    }

    useEffect(() => {
        interval.current = setInterval(() => {
            nextSlide()
        }, 5000)

        slideShow.current.addEventListener('mouseenter', () => {
            clearInterval(interval.current)
        })

        slideShow.current.addEventListener('mouseenter', () => {
            interval.current = setInterval(() => {
                nextSlide()
            }, 5000)
        })

    }, [])

    if (description) {
        return (
            <MainContainer>
                <SlidesContainer ref={slideShow}>
                    {
                        products.map(product=>(
                            <SlideDescription key={product.id} product={product}/>
                        ))
                    }
                </SlidesContainer>
                <ControlsContainer>
                    <BtnStyleL onClick={previusSlide}><img src={ArrowLefth} alt="" /></BtnStyleL>
                    <BtnStyleR onClick={nextSlide}><img src={ArrowRighth} alt="" /></BtnStyleR>
                </ControlsContainer>
            </MainContainer>
        )
    } else {
        return (
            <MainContainer>
                <SlidesContainer ref={slideShow}>
                    {
                        objectInfo.productImgs.map(image => (
                            <SlideImg key={image} image={image} />
                        ))
                    }
                </SlidesContainer>
                <ControlsContainer>
                    <BtnStyleL onClick={previusSlide}><img src={ArrowLefth} alt="" /></BtnStyleL>
                    <BtnStyleR onClick={nextSlide}><img src={ArrowRighth} alt="" /></BtnStyleR>
                </ControlsContainer>
            </MainContainer>
        )
    }

}

const MainContainer = styled.section`
    position: relative;
`
const SlidesContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
`

const ControlsContainer = styled.div`
    position: absolute;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    pointer-events: none;
`
const BtnStyleL = styled.button`
    pointer-events: all;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 50px;
    height: 100%;
    text-align: center;
    position: absolute;
    transition: all .3s ease;
    &:hover{
        background: rgba(0, 0, 0, .2);
    }
`

const BtnStyleR = styled(BtnStyleL)`
    right: 0;
`

export default SlideShow