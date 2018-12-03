import test from 'ava';
import parseS3Url from '.';

test('main', t => {
	t.deepEqual(
		parseS3Url('s3://my-bucket/path/to/my/file.png'),
		{bucket: 'my-bucket', key: 'path/to/my/file.png'}
	);
});

