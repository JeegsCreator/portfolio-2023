<script>
  import Project from "../components/Project.svelte";
  import { t, tp } from "../i18n";
  import projects from "../projects";
</script>

<section class="mt-16 md:px-28">
  <h2 class="px-8 text-center text-4xl font-montserrat mb-8 lg:mb-12 lg:text-5xl">
    {$t("projects.title")}
  </h2>
  <div class="px-8 mb-8 flex flex-col gap-8 lg:items-center">
    {#each projects as p, index}
      <Project
        title={$tp(index, "title")}
        image={p.all.image}
        technologies={p.all.technologies}
        link={p.all.link}
        repo={p.all.repository}
      >
        <p>{$tp(index, "description")}</p>
      </Project>
    {/each}
  </div>
</section>
