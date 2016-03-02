/**
Language-level support for modules for component definition. 
Codifies patterns from popular JavaScript module loaders (AMD, CommonJS). 
Runtime behaviour defined by a host-defined default loader. 
Implicitly async model – no code executes until requested modules are available and processed.
*/

import * as math from 'modules/math';

alert(math.pi);