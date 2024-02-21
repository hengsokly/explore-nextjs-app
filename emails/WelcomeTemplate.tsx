import React, { CSSProperties } from 'react'
import {Html, Body, Container, Text, Link, Preview, Tailwind} from "@react-email/components"

const WelcomeTemplate = ({name}: {name: string}) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body className='bg-white'>
          <Container>
            <Text style={heading}>Hello {name}</Text>
            <Link href='https://kawsang.com'>Kawsang.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

const body: CSSProperties = {
  background: '#fff'
}

const heading: CSSProperties = {
  fontSize: '30px'
}

export default WelcomeTemplate

