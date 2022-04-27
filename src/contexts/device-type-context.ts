import React from 'react';

import {DeviceTypes} from '@/constants/device-types';
import {ValueOf} from '@/types/main';

type DeviceTypeContextProps = {
  deviceType?: ValueOf<typeof DeviceTypes>;
};

const DeviceTypeContext = React.createContext<DeviceTypeContextProps>({});

export default DeviceTypeContext;
