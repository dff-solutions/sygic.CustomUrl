// import "core-js";

const testsContext: any = require.context("../src", true, /\.spec\.ts$/);
testsContext.keys().forEach(testsContext);
