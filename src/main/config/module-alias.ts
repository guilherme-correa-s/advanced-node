import { addAlias } from 'module-alias'
import { resolve } from 'node:path'

addAlias('@', resolve('dist'))
