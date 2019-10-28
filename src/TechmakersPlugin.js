import React from 'react';
import { FlexPlugin } from 'flex-plugin';

import DemoComponent from './components/DemoComponent/DemoComponent';

const PLUGIN_NAME = 'TechmakersPlugin';

export default class TechmakersPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    const options = { sortOrder: -1 };
    flex.CRMContainer
      .Content
      .replace(<DemoComponent key="demo-component" />, options);
  }
}
