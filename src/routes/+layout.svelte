<script>
    import "../app.css";
</script>
  
<div class="w-screen h-screen flex justify-center items-center">
    <div class="w-full h-full relative z-0 overflow-hidden">
        <img src="/police-lights-night.jpg" alt="" class="w-full h-full blur-md brightness-50 object-fill">
        <div class="lights-container w-full h-full overflow-hidden">
            <div class="redlight"></div>
            <div class="bluelight"></div>
        </div>      
        <div class="absolute inset-0 flex flex-col justify-center items-center z-10 w-full h-full w-full">
            <main class="mt-auto">
                <slot></slot>
            </main>
            <div class="mt-auto">
                <p class="text-xs font-mono pb-2 px-4 text-center">This is an experiment by <a href="https://www.iancthompson.dev" class="underline">Ian Thompson</a>. View it on <a href="https://www.github.com/nicelion/lofi-scanner" class="underline">GitHub</a></p>
            </div>
        </div>
    </div>
</div>