import {addons} from '@storybook/addons'

addons.setConfig({
  showPanel: false,
  sidebar: {
    collapsedRoots: ['subcomponents', 'utils', 'specify'],
  },
  toolbar: {
    title: {hidden: false},
    zoom: {hidden: false},
    eject: {hidden: false},
    copy: {hidden: false},
    fullscreen: {hidden: false},
  },
})
