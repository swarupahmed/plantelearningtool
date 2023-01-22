<slot></slot>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@500&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Oleo+Script&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&display=swap');
   
	:global(body) {
		padding: 0;
		margin: 0;
		font-size: 18px;
		font-family: 'Inter', 'sans-serif';
	}

	@media (max-width: 480px) {
		:global(body) {
			font-size: 16px;
			transition: font-size .3s;
		}
	}
</style>