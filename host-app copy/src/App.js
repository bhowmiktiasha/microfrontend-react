
import React, { Suspense } from 'react';

const Component1 = React.lazy(() => import('../microFrontend1/Component1'));
const Component2 = React.lazy(() => import('../microFrontend2/Component2'));

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Host App</h1>
      <Suspense fallback="Loading Micro Frontend 1...">
        <Component1 />
      </Suspense>
      <Suspense fallback="Loading Micro Frontend 2...">
        <Component2 />
      </Suspense>
    </div>
  );
}

export default App;
