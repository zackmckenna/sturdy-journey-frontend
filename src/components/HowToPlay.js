import React from 'react'
import { Row, Col } from 'reactstrap'

const HowToPlay = (props) => {
  return (
    <>
      <Row>
        <Col className='mt-2 text-light text-center'>
          <h2>
            How to Play SeaWitched
          </h2>
          <h4>
          The Story So Far
          </h4>
          <p>
            You and your crew have just packed up and set sail after a long and incredible treasure hunt.
            One of the crew-members slipped a magical spyglass they found amongst the treasure into their pocket.
            They are the Lookout, the rest are First Mates. Upon leaving, a mysterious force starts acting upon members of the crew.
            A Seawitch has Seawitched your ship, and she is after the mysterious spyglass!
            Amongst yourselves, there is a traitor who has been possessed by the SeaWitch, and the Seawitch
            herself has disguised herself to look just like your captain! More to come . . .
          </p>
        </Col>
      </Row>
      <Row>
        <Col className='text-light text-center'>
          <h4>
            So What is Seawitched?
          </h4>
          <p>
            Seawitched is a bluffing-RPG game. Each round, you are given a character, and then the game is played via unstructured conversations between the players.
            There are no turns. The game ends after the following:
          </p>
          <ul>
            <li>The First Mates or The Captian call STOP and point out the Mutineer</li>
            <li>The Lookout calls STOP and points out The Captian</li>
            <li>The Seawitch calls STOP and points out the Lookout</li>
            <p>NOTE: The mutineer may never call STOP</p>
          </ul>
        </Col>
      </Row>
    </>
  )
}

export default HowToPlay
