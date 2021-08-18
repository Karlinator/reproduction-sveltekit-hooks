import { sequence } from '@sveltejs/kit/hooks';

async function first({ request, resolve }) {
	console.log('first');
	return await resolve(request);
}
async function second({ request, resolve }) {
	console.log('second');
	return await resolve(request);
}

export const handle = sequence(first, second);
