import Konsul from './Konsul';
import type { WidgetRegisterContract } from './types/widgets';
import * as Widgets from './widgets';

const widgetsRegistration: WidgetRegisterContract[] = [
  {
    widget: Widgets.Text,
    name: 'text',
    options: {
      style: (style: Object, node: Widgets.Text) => node.setStyle(style)
    }
  },
  {
    widget: Widgets.Image,
    name: 'image',
    options: {
      style: (style: Object, node: Widgets.Image) => node.setStyle(style),
      source: (url: string, node: Widgets.Image) => node.setSource(url)
    }
  },
  {
    widget: Widgets.Container,
    name: 'container'
  },
  {
    widget: Widgets.Group,
    name: 'group',
    options: {
      name: (name: string, node: Widgets.Group) => node.setName(name)
    }
  },
  {
    widget: Widgets.Button,
    name: 'button',
    options: {
      label: (label: string, node: Widgets.Group) => node.setLabel(label)
    }
  }
];

export default function registerDefaultWidgets (konsul: Konsul) {
  widgetsRegistration.forEach(registration => {
    konsul.registerWidget(registration);
  });
}
