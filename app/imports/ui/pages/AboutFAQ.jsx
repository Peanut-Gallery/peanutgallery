import React from 'react';
import { Grid } from 'semantic-ui-react';

/** Renders the pages that displays the About/FAQ for the site. */
class AboutFAQ extends React.Component {
  render() {
    return (
        <Grid verticalAlign='middle' textAlign='center' className='manoa-green'>

          <Grid.Column centered width={9}>
            <h1>About</h1>
            <p>Peanut Gallery is a web-based application that allows users to create and submit surveys. New users
              will be encouraged to go through an account creation process in which they submit their full name and
              email address and create a username and password. User information and login credentials need to be stored
              and properly secured in a database system to uphold their privacy.</p>
            <h1> Frequently Asked Questions </h1>
            <h2>Q: Where do I begin?</h2>
            <p>A: Registered users can sign-in in here. If you are not a registered user, you can register here.
            </p>
            <p><b>Racial, sexual, or any inappropriate slurs will not be tolerated, and users will be banned for
              illegal/inappropriate behavior.</b></p>
          </Grid.Column>
        </Grid>
    );
  }
}

export default AboutFAQ;
