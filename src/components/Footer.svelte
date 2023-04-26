<script>
    import FileIcon from "./icons/file-icon.svelte";
    import GithubIcon from "./icons/github-icon.svelte";
    import LinkedinIcon from "./icons/linkedin-icon.svelte";
    import Button from "./Button.svelte";

    import { t } from '../i18n'

</script>

<footer class="w-full relative flex flex-col-reverse bg-point-gradient bg-no-repeat pt-28 bg-center bg-[contain] ">
    <div class="border border-t-stone-500 py-10 bg-white">
        <div class="flex gap-2 md:gap-4 justify-center flex-wrap">
            <Button>
                <FileIcon href='https://drive.google.com/file/d/1-9dp7g28oNKzcBw-7GM-XGm4mfzClNy0/view?usp=sharing'/>
                <p>Curriculum</p>
            </Button>
            <Button href='https://www.linkedin.com/in/jhonn-gutierrez-643592238/'>
                <LinkedinIcon />
                <p>LinkedIn</p>
            </Button>
            <Button href='https://github.com/JhonnGutierrez' >
                <GithubIcon />
                <p>GitHub</p>
            </Button>
        </div>
        <div class="flex justify-center mt-8">
            <p>{$t("footer")}</p>
        </div>
    </div>
</footer>