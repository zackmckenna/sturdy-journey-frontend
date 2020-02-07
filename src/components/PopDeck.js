import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Container, Collapse, Button, CardBody, Card } from 'reactstrap'
import ReactSwipe from 'react-swipe'
import RoleCard from './cards/RoleCard'
import TopDeckCard from './cards/TopDeckCard'
import UserCard from './cards/UserCard'

const PopDeck = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  let reactSwipeEl
  console.log(props.deck)

  if (props.session.currentPlayerRoles)  {

    // gets temporary local data for testing games
    const deckLength = props.deck.cards.length
    return (
      <Container>
        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
        <Collapse isOpen={isOpen}>
          <ReactSwipe
            className="carousel"
            disableScroll={true}
            stopPropagation={true}
            swipeOptions={{ continuous: false }}
            ref={el => (reactSwipeEl = el)}
            childCount={props.deck.cards.length}
          >
            <div>
              <TopDeckCard onClickNext={() => reactSwipeEl.next()}/>
            </div>
            <div>
              <UserCard key={props.deck.userRoleCard.id} card={props.deck.userRoleCard} onClickPrev = {() => reactSwipeEl.prev()} onClickNext={() => reactSwipeEl.next()}/>
            </div>
            {props.deck.cards.map((card, index) => {
              if (card.userRoleCard) {
                return (
                  <div>
                    <UserCard key={card.id} card={card} onClickNext={() => reactSwipeEl.next()} onClickPrev={() => reactSwipeEl.prev()}/>
                  </div>
                )
              } else if (deckLength === index + 1){
                return (
                  <div key={card.id}>
                    <RoleCard card={card} onClickPrev={() => reactSwipeEl.prev()}/>
                  </div>
                )
              }
              else {
                return (
                  <div key={card.id}>
                    <RoleCard card={card} onClickNext={() => reactSwipeEl.next()} onClickPrev={() => reactSwipeEl.prev()}/>
                  </div>
                )
              }
            })}
          </ReactSwipe>
        </Collapse>
      </Container>
    )
  } else {
    return (
      <Container >
        {/* <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button> */}
        <Collapse  isOpen={isOpen}>
          <Card>
            <ReactSwipe
              className="carousel"
              disableScroll={true}
              stopPropagation={true}
              swipeOptions={{ continuous: false }}
              ref={el => (reactSwipeEl = el)}
              childCount={props.airtable.roleCards.length}
            >
              <div>
                <TopDeckCard onClickNext={() => reactSwipeEl.next()}/>
              </div>
              {props.airtable.roleCards.map(role => {
                return (
                  <div key={role.id}>
                    <RoleCard card={role} onClickPrev={() => reactSwipeEl.prev()} onClickNext={() => reactSwipeEl.next()}/>
                  </div>
                )
              })}
            </ReactSwipe>
          </Card>
        </Collapse>
        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem', bottom: 0, position: 'absolute' }}>Toggle</Button>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    session: state.session,
    roles: state.roles,
    deck: state.deck,
    airtable: state.airtable
  }
}

export default connect(mapStateToProps)(PopDeck)
