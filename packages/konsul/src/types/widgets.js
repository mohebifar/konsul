import typeof Node from '../widgets/Node';

type Option = (data: any, node: Node) => any;

export type WidgetRegisterContract = {
  widget: Node | Function,
  name: string,
  options?: {
    [key: string]: Option
  }
};
