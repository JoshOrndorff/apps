// Copyright 2017-2020 @polkadot/app-explorer authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BlockNumber, EventRecord } from '@polkadot/types/interfaces';
import { formatNumber } from '@polkadot/util';

import React from 'react';
import { Event as EventDisplay, Expander } from '@polkadot/react-components';

interface Props {
  blockNumber?: BlockNumber;
  className?: string;
  value: EventRecord;
}

function Event ({ blockNumber, className, value: { event } }: Props): React.ReactElement<Props> {
  return (
    <Expander
      className={className}
      summary={`${event.section}.${event.method}${blockNumber ? ` [${formatNumber(blockNumber)}]` : ''}`}
      summaryMeta={event.meta}
    >
      <EventDisplay
        className='details'
        value={event}
      />
    </Expander>
  );
}

export default React.memo(Event);
