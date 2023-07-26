/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { Animator, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut, batch } from "react-scroll-motion"
import Infos from "./Infos"
import Photo from "./Photo"
import Argument from "./Argument"
import CTA from "./CTA"
import Title from "./Title"
import Tarifs from "./Tarifs"
import Slider from "./Slider"



const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn())
const ZoomInScrollOut2 = batch(FadeIn(), ZoomIn())
const FadeUp = batch(Fade(), MoveOut(0, -400), StickyIn())

const Scroll = () => {
  return (
    <div>
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))} >
            <Photo />
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={ZoomInScrollOut} >
            <Title />
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={FadeUp} >
            <Infos />
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={ZoomInScrollOut2} >
            <Tarifs />
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={Fade()} >
            <Slider />
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Argument />
        </ScrollPage>

        <ScrollPage>
          <Animator animation={batch(Fade(), StickyOut(), MoveIn(0, 300))}>
            <CTA />
          </Animator>
        </ScrollPage>

      </ScrollContainer>
    </div>
  )
}

export default Scroll
