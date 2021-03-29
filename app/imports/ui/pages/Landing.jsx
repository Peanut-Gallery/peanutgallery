import React from 'react';
import { Grid, Image, Header, Divider } from 'semantic-ui-react';

/** Renders the Landing page. Snazzy. */
class Landing extends React.Component {
  render() {
    return (
        <Grid centered stackable={true} textAlign='center'>
          <Grid.Column textAlign='center' width={8}>
            <Image size='medium' centered src='/images/logo.png'/>
          </Grid.Column>
          <Grid.Column textAlign='center' width={8}>
            <div className='centered-column'>
              <Header as='h1' color='green'> Peanut Gallery </Header>
              <Divider/>
              <Header as='h2'>Make and take surveys for free.</Header>
            </div>
          </Grid.Column>
        </Grid>
    );
  }
}

export default Landing;
