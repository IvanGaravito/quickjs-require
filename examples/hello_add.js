import * as std from 'std'
import * as os from 'os'

import { require } from '../require.js'

const add = require('./add.js')
console.log(add(1, 2))

require('add.js')

