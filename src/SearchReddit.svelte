<script lang="ts">
let varRes = [];//[{name: "abc"},{name: "def"}];
const response = fetch('https://www.reddit.com/r/wallstreetbets/.json?&limit=3')
            .then(res => res.json())
            .then(data => data.data.children.map(data => data.data));

response.then(result => {
    console.log(result);
    varRes = result;
});

function goToPost(abc: string) {
    window.location.href = abc;
}

let NotifyAudio = new Audio('audio/singleButtonKeyboardshort1.mp3');

</script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.1.1/css/all.min.css">
<br/>
<div class="container mx-auto max-w-xl flex flex-col space-y-4 justify-center items-center">
  {#each varRes as post}
  <div class="bg-white w-full flex items-center p-2 rounded-xl shadow border cursor-pointer card" on:click={()=>goToPost(post.url)}>
    <div class="flex items-center space-x-4">
      {#if post.thumbnail != "self"}
      <img src={post.thumbnail} alt="My profile" class="w-16 h-16 rounded-full">
      {/if}
    </div>
    <div class="flex-1 p-3">
      <div class="font-semibold text-gray-700">
        {post.title}
      </div>
      <div class="text-sm text-gray-500">
        <p class="fas fa-thumbs-up">_ {post.ups}</p> 
      </div>
    </div>
    <span class="fas fa-comments"></span>
    <div class="flex-col p-1">
      <span class="fas fa-comments font-semibold text-gray-700"></span>
      <img src="images/pokeBall16x16icon.png" alt="arrow_r" class="w-4 h-4 rounded-full order-1">
    </div>
  </div>
  {/each}
</div>


<style>
    .card {
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.3s;
      width: 80%;
      border-radius: 5px;
      transition: transform .1s;
    }
    
    .card:hover {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
      cursor: pointer;
      transform: scale(1.1);
    }
    
    img {
      border-radius: 5px 5px 0 0;
      width: 90%;
      transition: transform .2s;
    }

    img:hover {
        cursor: row-resize;
    }
    </style>