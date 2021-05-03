import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, SubmitField, TextField, LongTextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import { Book } from '../../api/book/Book';

const formSchema = new SimpleSchema({
  title: String,
  image: String,
  author: String,
  description: String,
});

/** Renders the Page for adding a textbook. */
class SellATextbook extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { title, image, author, description } = data;
    const owner = Meteor.user().username;
    Book.insert({ title, image, author, description, owner },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Item added successfully', 'success');
            formRef.reset();
          }
        });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    const addStyle = { marginBottom: '10px' };
    return (
        <Grid style={addStyle} container centered>
          <Grid.Column>
            <Header as="h2" inverted textAlign="center">Sell A Textbook</Header>
            <AutoForm ref={ref => {
              fRef = ref;
            }} schema={formSchema} onSubmit={data => this.submit(data, fRef)}>
              <Segment>
                <TextField name='title'/>
                <TextField name='author'/>
                <TextField name='image'/>
                <LongTextField name='description'/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default SellATextbook;
