import * as React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

export default function CircularIndeterminate({ loading }) {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ClipLoader
          color={'#46B5FF'}
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </>
  );
}
