import React, { Component } from 'react';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import '../Asset/Design.css'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(){
        super();
        this.state={
            Isfirst: false,
            Issecond: false,
            Isthird: false
        }
    }
    render() {
        return (
            <div >
                <section className="">
                    <div className="container my-3">
                        <Card className="homefirstSection">
                            <Card.Body>
                                <Card.Title className="navHover  texts">Welcome to Our Page</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Link to="/about">
                                    <Button variant="outline-dark">Learn More
                                        <span>
                                            <i className="fas fa-arrow-right ml-2"></i>
                                        </span>
                                    </Button>
                                </Link>

                            </Card.Body>
                        </Card>
                    </div>
                </section>

                <section>
                    <div className='container my-5'>
                        <CardGroup>
                            <Card className="text-center border-0">
                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1578185708140-55c94bb9426f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" className="rounded-circle imageDesign mx-auto"
                                />
                                <Card.Body>
                                    <Card.Title className="text-primary">Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                    {this.state.Isfirst ? (
                                        <div>
                                            <p>Because React-Bootstrap doesn't depend on a very precise version of Bootstrap, we don't ship with any included CSS. However, some stylesheet is required to use these components.</p>
                                            <Button variant="secondary" onClick={()=> this.setState({Isfirst : false})}>Show Less</Button>
                                        </div>
                                        ) : (
                                            <Button variant="secondary" onClick={()=> this.setState({Isfirst : true})}>Show More</Button>
                                        )
                                    }
                                    
                                </Card.Body>
                            </Card>
                            <Card className="text-center border-0">
                                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6CdycTbBf6bxp2QqZ_KKCT4uVxTkdEfx-Wf_unMqZm8Yh8VQ4&usqp=CAU" className="rounded-circle imageDesign mx-auto"
                                />
                                <Card.Body>
                                    <Card.Title className="text-primary">Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                    {this.state.Issecond ? (
                                        <div>
                                            <p>You should import individual components like: react-bootstrap/Button rather than the entire library. Doing so pulls in only the specific components that you use, which can significantly reduce the amount of code you end up sending to the client.</p>
                                            <Button variant="secondary" onClick={()=> this.setState({Issecond : false})}>Show Less</Button>
                                        </div>
                                        ) : (
                                            <Button variant="secondary" onClick={()=> this.setState({Issecond : true})}>Show More</Button>
                                        )
                                    }
                                </Card.Body>
                            </Card>
                            <Card className="text-center border-0">
                                <Card.Img variant="top" src="https://images.pexels.com/photos/556666/pexels-photo-556666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="rounded-circle imageDesign mx-auto"
                                />
                                <Card.Body>
                                    <Card.Title className="text-primary">Card title</Card.Title>
                                    <Card.Text>
                                    
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                    {this.state.Isthird ? (
                                        <div>
                                            <p>React-Bootstrap is a complete re-implementation of the Bootstrap components using React. It has no dependency on either bootstrap.js or jQuery. If you have React setup and React-Bootstrap installed, you have everything you need.</p>
                                            <Button variant="secondary" onClick={()=> this.setState({Isthird : false})}>Show Less</Button>
                                        </div>
                                        ) : (
                                            <Button variant="secondary" onClick={()=> this.setState({Isthird : true})}>Show More</Button>
                                        )
                                    }
                                </Card.Body>
                            </Card>
                            
                        </CardGroup>
                    </div>
                </section>
                
            </div>
        );
    }
}

export default Home;