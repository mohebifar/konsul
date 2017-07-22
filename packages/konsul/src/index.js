import Konsul from './Konsul';
import registerDefaultWidgets from './registerDefaultWidgets';

export default function create (options) {
  const konsul = new Konsul(options);
  registerDefaultWidgets(konsul);
  return konsul;
}
