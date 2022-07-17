import styled from 'styled-components'

const Container = styled.div`
    height:30px;
    background-color: teal;
    color:white;
    display:flex;
    align-items:center;
    justify-content: center;
    font-size:14px;
    font-weight: 500;
`

/**
 * It returns a Container component with the text "Free next-day shipping over !"
 * @returns A Container component with the text "Free next-day shipping over !"
 */
const Anouncement = () => {
  return (
    <Container>
        Get Free 2-Day shipping over $50!
    </Container>
  )
}

export default Anouncement;