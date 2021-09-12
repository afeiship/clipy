#!/usr/bin/env node
const { Command } = require('commander');
const clipboardy = require('clipboardy');

// next packages:
require('@jswork/next');
require('@jswork/next-absolute-package');

const { version } = nx.absolutePackage();
const program = new Command();
const args = process.argv.slice(2);

program.version(version);

nx.declare({
  statics: {
    init() {
      const app = new this();
      app.start();
    }
  },
  methods: {
    init() {},
    start() {
      clipboardy.writeSync(args[0]);
    }
  }
});
