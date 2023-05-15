<script>
  import GithubIcon from "./icons/github-icon.svelte";
  import LinkIcon from "./icons/link-icon.svelte";
  import Button from "./Button.svelte";
  import logos from './logos'

  export let title
  export let image
  export let link
  export let repo
  export let technologies = []
</script>

<div class="bg-white shadow-lg border border-slate-200 w-full lg:flex lg:w-5/6 rounded-xl overflow-hidden">
  <div class="bg-point-gradient bg-center bg-[length:160%] w-full aspect-[47/32] lg:w-1/2">
    <img class="max-h-full max-w-full h-full" src={image} alt={`${title} screeshot`} />
  </div>
  <div class="px-4 py-8 lg:pl-12 lg:w-1/2 lg:flex lg:flex-col">
    <div class="flex justify-between gap-2 items-center pb-4">
      <h3 class="font-montserrat text-2xl lg:text-4xl">{title}</h3>
      <div class="flex gap-2">
        <Button square href={link}>
          <LinkIcon />
        </Button>
        <Button square href={repo}>
          <GithubIcon />
        </Button>
      </div>
    </div>
    <div class="pl-2 lg:pr-16 lg:flex lg:items-center lg:h-full">
        <slot/>
    </div>
    <div class="pt-4 flex flex-wrap gap-2 lg:mt-auto">
      {#each technologies as tech}
        <Button href={logos[tech][2]}>
          <img class="max-h-full py-2" src={logos[tech][0]} alt={`${logos[tech][1]}'s logo`}>
          <p class="font-bold text-base">{logos[tech][1]}</p>
        </Button>
      {/each}
    </div>
  </div>
</div>
