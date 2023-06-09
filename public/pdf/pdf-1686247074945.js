const { Readable } = require('stream')

class myReadable extends Readable {
	constructor(opt) {
		super(opt)
	}

	_read(size) {}
}

//создаем стрим Readable в node.js

const { Writable } = require('stream')

class myWritable extends Writable {
	constructor(opt) {
		super(opt)
	}

	_write(chunk, encoding, callback) {}
}
// создаем стрим Writable в node.js

const { Duplex } = require('stream')

class myDuplex extends Duplex {
	constructor(opt) {
		super(opt)
	}

	_read(size) {}

	_write(chunk, encoding, callback) {}
}

//создаем стрим Duplex в node.js


const { Transform } = require('stream');

class myTransform extends Transform {
  _ transform(chunk, encoding, callback) {}
}
// сoздаем стрим Transform в node.js

//chunk (часть данных), encoding (кодировка, если chunk это строка), callback (функция, которая вызывается после успешной или неудачной записи).

