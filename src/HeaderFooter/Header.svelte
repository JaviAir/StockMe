<script lang="ts">
	
</script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.1.1/css/all.min.css">
<!-- <div class="navbar">
	
		<img src="/images/houseIcon.png" alt="Home" class="NavBarImg active">
		<div class="navbar-centered">
		<span class="fas fa-chart-line"></span>
		<span class="fas fa-wallet"></span>
		<span class="fas fa-search"></span>
		<span class="fas fa-comments"></span>
		
		<span class="fas fa-user-ninja"></span>
	</div>
</div> -->

<div class="bg-green-500 mt-7 py-12">
</div>

<div class=" bg-gray-500 mt-7 py-2 fixed bottom-0 justify-center w-full">
	
	<!-- <img src="/images/houseIcon.png" alt="Home" class="NavBarImg active"> -->
	<div class="flex justify-evenly items-center p-2">
		<span class="fas fa-chart-line"></span>
		<span class="fas fa-wallet"></span>
		<span class="customAnim hover:bg-green-600 border-2 rounded-full p-4 fas fa-search"></span>
		<span class="fas fa-comments"></span>
		
		<span class="fas fa-user-ninja"></span>
	</div>
</div>


<style>

	.customAnim:hover{
		animation: pulse 1s infinite;
	}

	/* .navbar {
	overflow: hidden;
	background-color: #333;
	position: fixed;
	bottom: 0;
	width: 100%;
	}
	.navbar .navbar-centered {
		float: none;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.navbar span {
		padding: 14px 30px;
	}

	.navbar img, span{
	float: left;
	display: block;
	color: #f2f2f2;
	text-align: center;
	padding: 14px 16px;
	text-decoration: none;
	font-size: 17px;
	}
	.NavBarImg {
		height: 25px;
	}
	/* Change the color of links on hover */
	/* .navbar span:hover {
	background-color: #ddd;
	color: black;
	}

	/* Add a color to the active/current link */
	/* .navbar .active {
	background-color: #4CAF50;
	color: white;
	} */
</style>