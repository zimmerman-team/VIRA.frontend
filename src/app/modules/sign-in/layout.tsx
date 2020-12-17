import React from 'react';
import { LayoutModel } from 'app/modules/sign-in/models';
import { InputForm } from 'app/modules/sign-in/common/InputForm';
import { BaseLayout } from 'app/modules/sign-in/common/BaseLayout';

export const SignInLayout = (props: LayoutModel) => {
  return (
    <BaseLayout>
      <InputForm {...props} />
    </BaseLayout>
  );
};
