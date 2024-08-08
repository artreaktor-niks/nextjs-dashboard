'use client';

import React, { useEffect } from 'react';

const ConsoleLog = ({ data }: any) => {
  useEffect(() => {
    console.log(data);
  }, [data]);

  return <div></div>;
};

export default ConsoleLog;
