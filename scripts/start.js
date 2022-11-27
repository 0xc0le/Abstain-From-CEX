const { spawn } = require('child_process')


const major = Number(process.version.replace('v', '').split('.')[0])

/**
 * Spawn start process
 * @param {string} command
 * @param {string[]} args
 * @param {import('child_process').SpawnOptions}
 */
const proc = (command, args, options = {}) => {
    options.stdio = 'inherit'
    spawn(command, args, options)
}

if (major <= 16) {
    proc('npx', ['react-scripts', 'start'])
} else {
    proc('npx', ['react-scripts', '--openssl-legacy-provider', 'start'])
}
