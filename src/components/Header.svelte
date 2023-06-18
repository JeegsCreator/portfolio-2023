<script>
  import Button from "../components/Button.svelte";
  import FileIcon from "./icons/file-icon.svelte";
  import GithubIcon from "./icons/github-icon.svelte";
  import GlobalIcon from "./icons/global-icon.svelte";
  import LinkedinIcon from "./icons/linkedin-icon.svelte";

  import { t, locale, locales } from "../i18n";

  function changeLang () {
    const [ other ] = locales.filter(l => l !== $locale)
    locale.set(other)
    // console.log(other)
  }
</script>

<header>
  <nav class="flex justify-center items-center py-4 md:px-[14vw]">
    <p class="font-extrabold text-2xl whitespace-nowrap hidden md:inline">Jhonn Gutierrez</p>
    <ul class="flex justify-around w-full md:justify-end gap-2 md:gap-4 px-4">
      <li>
        <Button href='https://www.linkedin.com/in/jhonn-gutierrez-643592238/' square>
          <LinkedinIcon />
        </Button>
      </li>
      <li>
        <Button href='https://github.com/JhonnGutierrez' square>
          <GithubIcon />
        </Button>
      </li>
      <li>
        <Button href='https://drive.google.com/file/d/1A1KqrbNTbZ94DKTl2JzT_zLY70AwU5VX/view?usp=sharing'>
          <FileIcon />
          <p>Curriculum</p>
        </Button>
      </li>
      <li>
        <Button
          button
          onclick={changeLang}
        >
          <GlobalIcon />
          <p>{$locale}</p>
        </Button>
      </li>
    </ul>
  </nav>
</header>
