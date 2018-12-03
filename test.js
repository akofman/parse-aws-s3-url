import test from 'ava';
import parseS3Url from '.';

test('main', t => {
	t.deepEqual(
		parseS3Url('s3://my-bucket/path/to/my/file.png'),
		{Bucket: 'my-bucket', Key: 'path/to/my/file.png'}
	);
});

test('throws when S3 URL is not specified', t => {
	t.throws(() => {
		parseS3Url();
	}, 'Expected S3 URL argument');
});

test('throws when S3 URL is not valid', t => {
	t.throws(() => {
		parseS3Url('http://www.test.com');
	}, 'Not a valid S3 URL: http://www.test.com');
});