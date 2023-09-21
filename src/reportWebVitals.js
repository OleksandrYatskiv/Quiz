const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    return import('web-vitals').then(({
      getCLS, getFID, getFCP, getLCP, getTTFB,
    }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      return getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
