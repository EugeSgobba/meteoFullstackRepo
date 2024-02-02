import React from 'react';
import FormMeteo from './FormMeteo';
import Titolo from './Titolo';
import {
  Button,
  withAuthenticator,
} from "@aws-amplify/ui-react";

const App = ({signOut}) => {
  return (
    <div>
      <Titolo/>
      <FormMeteo />
      <Button onClick={signOut}>Sign Out</Button>
    </div>
  );
};

export default withAuthenticator(App);