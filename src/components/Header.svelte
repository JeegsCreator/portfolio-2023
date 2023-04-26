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
  <nav class="flex justify-center py-4 md:px-[14vw]">
    <ul class="flex justify-around w-full md:justify-between gap-4">
      <li>
        <Button href='https://drive.google.com/file/d/1-9dp7g28oNKzcBw-7GM-XGm4mfzClNy0/view?usp=sharing'>
          <FileIcon />
          <p>Curriculum</p>
        </Button>
      </li>
      <li class="lg:ml-auto" >
        <Button href='https://www.linkedin.com/in/jhonn-gutierrez-643592238/' square>
          <LinkedinIcon />
        </Button>
      </li>
      <li class="lg:mr-auto lg:pr-16" >
        <Button href='https://github.com/JhonnGutierrez' square>
          <GithubIcon />
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
