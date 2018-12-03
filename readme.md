# parse-aws-s3-url [![Build Status](https://travis-ci.org/akofman/parse-aws-s3-url.svg?branch=master)](https://travis-ci.org/akofman/parse-aws-s3-url)

> Parse an S3 URL and returns a suitable object for using with AWS SDK methods.


## Install

```
$ npm install parse-aws-s3-url
```

## Usage

```js
const parseS3Url = require('parse-aws-s3-url');

const parts = parseS3Url('s3://my-bucket/path/to/my/file.png');

//=> parts = {bucket: 'my-bucket', key: 'path/to/my/file.png'}
```

## License

MIT Licensed. Copyright (c) Alexis Kofman 2018.