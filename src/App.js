import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import './App.css';
import { Row, Col, Media, Button, Container, ButtonToolbar} from 'react-bootstrap';

const Home = () => <span>Home</span>;

const About = () => <span>About</span>;

const Users = () => <span>Users</span>;

const App = () => (
	<HashRouter basename="/">
		<Container className="p-3">
			<Row>
				<Col >
					<Media className="d-flex-column">
						<img width={196} alt="My face once ate a river" src="images/photo.jpg" className="align-self-start mr-3 d-none d-sm-block" />
						<img width={96} alt="My face once ate a river" src="images/photo_banner.jpg" className="align-self-start mr-3 d-sm-none" />
						<Media.Body>
							<h2>Kristian Koivisto-Kokko</h2>
							<p className="lead">Hi there. I'm a Finnish web developer based in Cork, Ireland.</p>
							<p>I work in Javascript/Typescript with Angular and React for the frontend and Node with Express/Koa and more for the backend.</p>
							<p>I'm currently looking for work, so you can find me over at <a href="https://linkedin.com/in/kristiankoivistokokko"><i className="fab fa-linkedin"></i> LinkedIn.</a></p>
							{/* <p>I've made some small browser games over at <a href="https://poisonvial.com">poisonvial.com</a> or <a href="https://poisonvial.itch.io/">poisonvial.itch.io</a> with some new games in the works.</p>
							*/}
						</Media.Body>
					</Media>
				</Col>
			</Row>

			<Row>
				<Col>

				</Col>
			</Row>

			<Row>
				<Col>
					<Switch>
						<Route path="/about" component={About} />
						<Route path="/users" component={Users} />
						<Route exact path="/" component={Home} />
					</Switch>
				</Col>
			</Row>

			<p><i className="fab fa-github"></i> github</p>
			<h2>
				Current Page is{' '}

			</h2>
			<h2>
				Navigate to{' '}
				<ButtonToolbar className="custom-btn-toolbar">
					<LinkContainer to="/">
						<Button>Home</Button>
					</LinkContainer>
					<LinkContainer to="/about">
						<Button>About</Button>
					</LinkContainer>
					<LinkContainer to="/users">
						<Button>Users</Button>
					</LinkContainer>
				</ButtonToolbar>
			</h2>

		</Container>
	</HashRouter>
);

export default App;
