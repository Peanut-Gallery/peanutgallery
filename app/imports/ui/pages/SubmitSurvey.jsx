import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, NumField, SelectField, SubmitField, TextField, LongTextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import { Survey } from '../../api/Survey/Survey';

/** Schema for survey submission */
const surveySchema = new SimpleSchema({
  name: String,
  question1: String,
  question2: String,
  question3: String,
  question4: String,
});


/** Renders the Page for adding a textbook. */
class SubmitSurvey extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { name, question1, question2, question3, question4 } = data;
    const owner = Meteor.user().username;
    Survey.insert({ name, question1, question2, question3, question4, owner },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Survey recorded successfully', 'success');
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
            }} schema={surveySchema} onSubmit={data => this.submit(data, fRef)}>
              <Segment>
                <TextField name='title'/>
                <NumField name='ISBN' decimal={false}/>
                <NumField name='cost' decimal={true}/>
                <TextField name='author'/>
                <TextField name='image'/>
                <TextField name='yearPublished'/>
                <LongTextField name='description'/>
                <SelectField name='condition'/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default SubmitSurvey;
