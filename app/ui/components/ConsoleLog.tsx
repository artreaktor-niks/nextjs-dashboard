'use client';

import React, { useEffect } from 'react';

const ConsoleLog = ({ data }) => {
  useEffect(() => {
    console.log(data);
  }, []);

  return <div></div>;
};

export default ConsoleLog;
