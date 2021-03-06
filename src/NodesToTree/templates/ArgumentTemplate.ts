import { Options, ParserField } from '../../Models';
import { TemplateUtils } from './TemplateUtils';

export class ArgumentTemplate {
  static resolve(f: ParserField) {
    let argsString = '';
    if (f.args && f.args.length) {
      if (f.type.options && f.type.options!.includes(Options.array)) {
        argsString = `[${f.args.map(TemplateUtils.resolverForConnection).join(',\n')}]`;
      } else {
        argsString = `${f.args.map(TemplateUtils.resolverForConnection).join('\n')}`;
      }
    }
    return `${f.type.name} : ${argsString}`;
  }
}
