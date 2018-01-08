import React from 'react';
import { Grid, Card, Image, Icon } from 'semantic-ui-react';

const SpacesList = (props) => {

	return (
	<Grid column={2}>
		<Grid.Row>
			<Grid.Column>
				<Card>
				    <Image src='https://convene.com/wp-content/uploads/2017/10/101-Greenwhich-exterior-e1512492773741.jpg' />
				    <Card.Content>
				      <Card.Header>
				        Greenwich
				      </Card.Header>
				      <Card.Meta>
				        <span className='date'>
				          Available
				        </span>
				      </Card.Meta>
				      <Card.Description>
				        Located in Greenwich village of NYC.
				      </Card.Description>
				    </Card.Content>
				    <Card.Content extra>
				      <a>
				        <Icon name='user' />
				        Details
				      </a>
				    </Card.Content>
			  	</Card>
		  	</Grid.Column>
	  	</Grid.Row>

	  	<Grid.Row>
			<Grid.Column>
				<Card>
				    <Image src='https://convene.com/wp-content/uploads/2017/10/101-Greenwhich-exterior-e1512492773741.jpg' />
				    <Card.Content>
				      <Card.Header>
				        Greenwich
				      </Card.Header>
				      <Card.Meta>
				        <span className='date'>
				          Available
				        </span>
				      </Card.Meta>
				      <Card.Description>
				        Located in Greenwich village of NYC.
				      </Card.Description>
				    </Card.Content>
				    <Card.Content extra>
				      <a>
				        <Icon name='user' />
				        Details
				      </a>
				    </Card.Content>
			  	</Card>
		  	</Grid.Column>
	  	</Grid.Row>

	  	<Grid.Row>
			<Grid.Column>
				<Card>
				    <Image src='https://convene.com/wp-content/uploads/2017/10/101-Greenwhich-exterior-e1512492773741.jpg' />
				    <Card.Content>
				      <Card.Header>
				        Greenwich
				      </Card.Header>
				      <Card.Meta>
				        <span className='date'>
				          Available
				        </span>
				      </Card.Meta>
				      <Card.Description>
				        Located in Greenwich village of NYC.
				      </Card.Description>
				    </Card.Content>
				    <Card.Content extra>
				      <a>
				        <Icon name='user' />
				        Details
				      </a>
				    </Card.Content>
			  	</Card>
		  	</Grid.Column>
	  	</Grid.Row>
	</Grid>
	)
}

export default SpacesList