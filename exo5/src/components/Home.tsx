import { ReactElement } from 'react';

import { Users } from '.';

function Home(): ReactElement {
  return (
    <div className='Home'>
        <h1>Welcome!</h1>
        <p>Here you can browse the list of users</p>
        <p>Enjoy :)</p>
        <Users />
    </div>
  );
}

export default Home;
