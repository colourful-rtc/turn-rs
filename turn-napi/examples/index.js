'use strict'

const { TurnService } = require('../')

class TurnObserver {
    async get_password(addr, name) {
        return 'test'
    }
}

const service = new TurnService('test', ['127.0.0.1:7890'], new TurnObserver())
const processer = service.get_processer('127.0.0.1:7890', '127.0.0.1:7890')

processer.process(Buffer.from('test'), '192.168.0.1:7890')
    .then(console.log)
    .catch(console.error)