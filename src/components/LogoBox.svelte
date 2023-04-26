<script>
    export let name
    export let image
    export let href
</script>

<div class="group/button">
    <a {href} target='_blank' title="javascript" class="group-hover/button:scale-105 transition-transform group-active/button:scale-95 w-20 lg:w-[6vw] rounded-xl shadow-lg aspect-square bg-white-opacity p-3 flex justify-center items-center cursor-pointer">
        <img src={image} alt="{name} logo" class="max-h-full max-w-full">
    </a>
</div>
