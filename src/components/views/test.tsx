import {useQuery} from '@apollo/client';
import React, {FC} from 'react';

import {BRANDS_QUERY} from '@/src/graphql/operations/query/brands';

interface TestProps {
  // eslint-disable-next-line react/no-unused-prop-types
  t?: any;
}

const Test: FC<TestProps> = props => {
  const {data} = useQuery(BRANDS_QUERY);
  return <div>text</div>;
};

export default Test;
