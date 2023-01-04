import React from 'react'
import { Col, Nav, Row, Tab } from 'react-bootstrap'

const CardTab = () => {
  return (
    <div className='tabs_card_main my-5'>
    <div className='container'>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                        <Nav.Link eventKey="first" className="d-flex justify-content-between">
                            <span>Lorem ipsum 1</span>
                            <span><i class="fa fa-angle-right" aria-hidden="true"></i></span>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second" className="d-flex justify-content-between">
                            <span>Lorem ipsum 2</span>
                            <span><i class="fa fa-angle-right" aria-hidden="true"></i></span>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third" className="d-flex justify-content-between">
                            <span>Lorem ipsum 2</span>
                            <span><i class="fa fa-angle-right" aria-hidden="true"></i></span>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col sm={9}>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <strong>Descrição:</strong><br />
                        Disponível em diferentes aromas, cada fragrância Lenor Unstoppables proporciona uma explosão de fragrâncias entre lavagens que injeta frescura em cada lavagem. Um intensificador de frescura entre lavagens, Lenor Unstoppables mantém uma explosão de frescura até 12 semanas (quando guardadas), para que as suas roupas estejam sempre prontas a utilizar, infundidas com o seu aroma preferido. Os nossos especialistas em aromas recomendam Unstoppables Fresh se procura aromas de citrinos vibrantes e de frutas frescas envolvidas em notas florais transparentes. Para uma utilização ideal, Lenor Unstoppables deve ser adicionado no tambor vazio antes de cada lavagem; de seguida, adicione a roupa, detergente, amaciador, tal como faz habitualmente.
                        <br />
                        <strong>Ingredientes:</strong><br />
                        Perfumes, Benzyl Salicylate, Citronellol, Eugenol, Hexyl Cinnamal
                        <strong>Tipo de produto:</strong><br />
                        Intensificador de Perfume
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <strong>Descrição:</strong><br />
                        Disponível em diferentes aromas, cada fragrância Lenor Unstoppables proporciona uma explosão de fragrâncias entre lavagens que injeta frescura em cada lavagem. Um intensificador de frescura entre lavagens, Lenor Unstoppables mantém uma explosão de frescura até 12 semanas (quando guardadas), para que as suas roupas estejam sempre prontas a utilizar, infundidas com o seu aroma preferido. Os nossos especialistas em aromas recomendam Unstoppables Fresh se procura aromas de citrinos vibrantes e de frutas frescas envolvidas em notas florais transparentes. Para uma utilização ideal, Lenor Unstoppables deve ser adicionado no tambor vazio antes de cada lavagem; de seguida, adicione a roupa, detergente, amaciador, tal como faz habitualmente.
                        <br />
                        <strong>Ingredientes:</strong><br />
                        Perfumes, Benzyl Salicylate, Citronellol, Eugenol, Hexyl Cinnamal
                        <strong>Tipo de produto:</strong><br />
                        Intensificador de Perfume
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <strong>Descrição:</strong><br />
                        Disponível em diferentes aromas, cada fragrância Lenor Unstoppables proporciona uma explosão de fragrâncias entre lavagens que injeta frescura em cada lavagem. Um intensificador de frescura entre lavagens, Lenor Unstoppables mantém uma explosão de frescura até 12 semanas (quando guardadas), para que as suas roupas estejam sempre prontas a utilizar, infundidas com o seu aroma preferido. Os nossos especialistas em aromas recomendam Unstoppables Fresh se procura aromas de citrinos vibrantes e de frutas frescas envolvidas em notas florais transparentes. Para uma utilização ideal, Lenor Unstoppables deve ser adicionado no tambor vazio antes de cada lavagem; de seguida, adicione a roupa, detergente, amaciador, tal como faz habitualmente.
                        <br />
                        <strong>Ingredientes:</strong><br />
                        Perfumes, Benzyl Salicylate, Citronellol, Eugenol, Hexyl Cinnamal
                        <strong>Tipo de produto:</strong><br />
                        Intensificador de Perfume
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>
    </div>
    </div>
  )
}

export default CardTab