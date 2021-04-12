import React from 'react';
import { Icon, Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms

/** Renders reviews about buying experiences from all users. See pages/RecentComments.jsx. */
class Reviews extends React.Component {
  render() {
    return (
        <Card>
          <Card.Content>
            <Card.Header>User: {this.props.reviews.userEmail}</Card.Header>
            <Card.Header>
              Completed a new survey for: !
            </Card.Header>
            <Card.Meta>
              <div>{this.props.reviews.postedAt.toLocaleDateString('en-US')}</div>
              <div>
                Rating: {this.props.reviews.rating} <Icon name='star'/> out of 5
              </div>
            </Card.Meta>
            <Card.Description>
              {this.props.reviews.comment}
            </Card.Description>
          </Card.Content>
        </Card>
    );
  }
}

Reviews.propTypes = {
  reviews: PropTypes.object.isRequired,
};

export default withRouter(Reviews);
