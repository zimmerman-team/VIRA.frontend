import 'styled-components/macro';
import React from 'react';

import { BaseCard } from 'app/modules/common/components/cards/common/BaseCard';
import { BaseCardParams } from 'app/modules/common/components/cards/common/BaseCard';

export interface TextCardParams extends BaseCardParams {
  description: string;
}
export const TextCard = (props: TextCardParams) => (
  <BaseCard title={props.title}>{props.description}</BaseCard>
);
