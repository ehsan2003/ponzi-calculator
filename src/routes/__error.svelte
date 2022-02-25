<script lang="ts" context="module">
	import type { ErrorLoad } from '@sveltejs/kit';

	export const load: ErrorLoad = ({ status }) => {
		if (status === 404) {
			return {
                status:302,
				redirect: '/'
			};
		}
	};
</script>
