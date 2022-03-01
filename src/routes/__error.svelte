<script lang="ts" context="module">
	import type { ErrorLoad } from '@sveltejs/kit';

	export const load: ErrorLoad = ({ status, error }) => {
		if (status === 404) {
			return {
				status: 302,
				redirect: '/'
			};
		}
		return { status, error };
	};
</script>

<h3>مشکلی پیش آمده دوباره امتحان کنید :(</h3>
