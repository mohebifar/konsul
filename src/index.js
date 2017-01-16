import Konsul from './Konsul';
export Text from './widgets/Text';
import registerDefaultWidgets from './registerDefaultWidgets';

export default function create(options) {
  const konsul = new Konsul();
  registerDefaultWidgets(konsul);
  return konsul;
}