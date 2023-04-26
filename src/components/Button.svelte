<script>
    export let button = false;
    export let href;
    export let onclick = false;
    export let square = false;
    export let nobutton = false;
</script>

<div class="group/button w-fit">
    <div class='text-xl shadow-md bg-white border-slate-400 border-solid border rounded-full w-fit h-[40px] cursor-pointer {!nobutton && 'group-hover/button:scale-105 transition-transform group-active/button:scale-95'} {square && 'aspect-square'}'>
        {#if button}
            <button 
                class="flex gap-2 items-center justify-center h-full w-full {square ? 'p-0' : 'px-4'}"
                on:click={onclick}
            >
            <slot />
            </button> 
        {:else}
            <a 
                class="flex gap-2 items-center justify-center h-full w-full {square ? 'p-0' : 'px-4'}"
                target="_blank"
                {href}
            >
                <slot />
            </a>
        {/if}
    </div>
</div>