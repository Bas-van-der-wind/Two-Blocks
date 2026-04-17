import './App.scss'
import hero from './assets/hero.png'
import { Container, Row, Col } from 'react-bootstrap'

function App() {

    const cards = [
        {
            title: 'Title',
            text: 'Supporting text about the call-to-action goes here.',
            image: hero,
        },
        {
            title: 'Title',
            text: 'Supporting text about the call-to-action goes here.',
            image: hero,
        },
    ]

    return (
        <>
            <Container className='mt-4'>
                <Row className='mb-5'>
                    <Col>
                        <label>label</label>
                        <h2>Mandatory title about the</h2>
                        <h2><span className='cta-title-part'>call-to-action</span> here</h2><br />
                        <p>Optional body copy goes here.</p>
                        <a href="#" className='text-danger'>Optional buttons <span >&rarr;</span></a>
                    </Col>
                </Row>

                <Row className='g-3'>
                    {cards.map((card, index) => (
                        <Col key={index} xs={12} md={6}>
                            <article className='cta-card'>
                                <img className='cta-card_image' src={card.image} alt="" />
                                <div className='cta-card_overlay' />

                                <div className='cta-card_content'>
                                    <div className='cta-card_copy'>
                                        <h4 className='cta-card_title'>{card.title}</h4>
                                        <p className='cta-card_text'>{card.text}</p>
                                    </div>

                                    <a href="#" className='img-button border rounded-1' aria-label={`${card.title} link`}><span>&rarr;</span></a>
                                </div>
                            </article>
                        </Col>
                    ))}
                </Row>
            </Container>

        </>
    )
}

export default App
