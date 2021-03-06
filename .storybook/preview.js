import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { DocsPage } from 'storybook-addon-deps/blocks';

import { GlobalStyle } from '../src/components/shared/styles/global';
import ThemeProvider from './../src/components/shared/styles/ThemeProvider';

addParameters({
  options: {
    showRoots: true,
  },
  docs: { page: DocsPage },
  dependencies: {
    //display only dependencies/dependents that have a story in storybook
    //by default this is false
    withStoriesOnly: true,

    //completely hide a dependency/dependents block if it has no elements
    //by default this is false
    hideEmpty: true,
  }
});

addDecorator(withA11y);
addDecorator(story => (
  <ThemeProvider theme={'light'}>
    <GlobalStyle />
    {story()}
  </ThemeProvider>
));

