import * as React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

export default function CircularIndeterminate({loading}) {
  return (<ClipLoader
    color={'#46B5FF'}
    loading={loading}
    size={150}
    aria-label="Loading Spinner"
    data-testid="loader"
  />);
}