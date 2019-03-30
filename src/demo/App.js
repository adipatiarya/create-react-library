import React from 'react';
import { Button } from '../lib';

const App = () => (
  <div>
    <Button
      color="danger"
      size="xs"
      onClick={e => {
        console.log(e);
      }}
    >
      DANGER
    </Button>
  </div>
);

export default App;
