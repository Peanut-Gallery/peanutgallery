import React from 'react';
import { Image, Card, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a public preview of a textbook entry card. See pages/SearchComp.jsx. */
class TextbookEntryPublic extends React.Component {
  render() {
    return (
        <Card>
          <Image src={this.props.book.image}
                 floated='left' size='large'/>
          <Card.Content>
            <Card.Header>
              {this.props.book.title}
            </Card.Header>
            <br/>
            <Card.Meta>
              Author(s): {this.props.book.author}
            </Card.Meta>
            <br/>
            <Card.Meta>
              Company: {this.props.book.cost}
            </Card.Meta>
            <br/>
          </Card.Content>
          <Card.Content extra>
            <Button basic color='green'>
              <Link to={`/addComment/${this.props.book._id}`}>Take Survey</Link>
            </Button>
          </Card.Content>
        </Card>
    );
  }
}

TextbookEntryPublic.propTypes = {
  book: PropTypes.object.isRequired,
};

export default withRouter(TextbookEntryPublic);
