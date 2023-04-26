<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import ProjectsSection from "./ProjectsSection.svelte";
  import TechGradientSection from "./TechGradientSection.svelte";
  import { t } from '../i18n'

</script>
<Header />
<main class="w-screen overflow-x-hidden lg:overflow-visible">
    <section class="lg:flex lg:px-[14vw] lg:relative lg:items-center lg:h-[80vh]">
        <div class="px-8 mt-8 z-10 md:px-32 lg:px-0 lg:w-7/12">
            <h1 class="text-5xl leading-[60px] h-full font-montserrat font-extrabold md:text-center lg:text-left lg:relative">
                <span class="block">{$t("hero.greeting")}</span>
                <span class="block md:inline lg:block lg:whitespace-nowrap ">{$t("hero.name")}</span>
                <span class="md:block lg:inline lg:whitespace-nowrap ">
                    <span class="block md:inline">{'< Frontend'}</span>
                    <span class="block md:inline">{'Developer />'}</span>
                </span>
            </h1>
        </div>
        <TechGradientSection />
    </section>
    <ProjectsSection />
    
</main>
<Footer />