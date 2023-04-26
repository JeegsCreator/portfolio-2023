<script>
    import BackgroundGradient from "../components/BackgroundGradient.svelte";
    import LogoBox from "../components/LogoBox.svelte";
    import logos from '../components/logos'
</script>

<div class="relative lg:w-1/2 lg:right-0">
    <BackgroundGradient position='-top-20 md:px-36 md:-top-40 lg:px-0 lg:top-auto lg:scale-[160%]'/>

    <div class="md:px-36 lg:p-8">
        <div class="relative p-4 lg:p-0 w-full aspect-square lg:ml-10 ">
            <div class="absolute left-center-box top-[180px] lg:top-center-box ">
                <LogoBox href={logos.nextjs[2]} image={logos.nextjs[0]} name='next.js'/>
            </div>
            <div class="absolute left-center-box top-[35px] lg:top-0 ">
                <LogoBox href={logos.react[2]} image={logos.react[0]} name='react'/>
            </div>
            <div class="absolute left-center-box top-[320px] lg:bottom-0 lg:top-auto">
                <LogoBox href={logos.javascript[2]} image={logos.javascript[0]} name='javascript'/>
            </div>
            <div class="absolute left-12 top-[110px] lg:left-0 lg:top-[20%]">
                <LogoBox href={logos.typescript[2]} image={logos.typescript[0]} name='typescript'/>
            </div>
            <div class="absolute right-12 top-[250px] lg:right-0 lg:bottom-[20%] lg:top-auto">
                <LogoBox href={logos.supabase[2]} image={logos.supabase[0]} name='supabase'/>
            </div>
            <div class="absolute left-12 top-[250px] lg:left-0 lg:bottom-[20%] lg:top-auto">
                <LogoBox href={logos.tailwindCSS[2]} image={logos.tailwindCSS[0]} name='tailwindCSS'/>
            </div>
            <div class="absolute right-12 top-[110px] lg:right-0 lg:top-[20%]">
                <LogoBox href={logos.svelte[2]} image={logos.svelte[0]} name='svelte'/>
            </div>
        </div>
    </div>
</div>