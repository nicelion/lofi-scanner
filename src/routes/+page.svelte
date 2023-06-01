<script lang="ts">
	import { onMount } from "svelte";
	import type { Station } from "$lib/utils/types/Stations";
	import { Stations } from "$lib/utils/manifests/StationManifest";
	import type { Song } from "$lib/utils/types/Music";
	import { musicOptions } from "$lib/utils/manifests/MusicManifest";
	import { PlayState } from "$lib/utils/types/Enums";

    //   let music = document.getElementById('music');
    //     music.play();

    // let music

    // music.play()

    let playState: PlayState = PlayState.loading

    let playingBroadcastify = "no"
    let audioElement: HTMLAudioElement
    let musicElement: HTMLAudioElement

    let audioVolume = 50
    let musicVolume = 50

    let station: Station = Stations[Math.floor(Math.random() * Stations.length)];
    let song = musicOptions[Math.floor(Math.random() * musicOptions.length)];    

    const controlAudio = () => {
        if (playState == PlayState.playing) {
            audioElement.volume = 0
            musicElement.pause()
            playState = PlayState.stopped
        } else if (playState == PlayState.stopped) {
            playState = PlayState.playing
            audioElement.volume = 1
            musicElement.play()
        } else if (playState == PlayState.loading) {
            playState = PlayState.playing
            audioElement.volume = 0
            audioElement.play()
            musicElement.play()

            setTimeout(() => {
                audioElement.volume = 1
            }, 30 * 1000);
        }
    }

    const addAudioPlayers = () => {
        audioElement = new window.Audio(`https://broadcastify.cdnstream1.com/${station.id}`)
        audioElement.preload = 'metadata'
        audioElement.controls = false


        musicElement = new window.Audio(`/music/${song.name}.mp3`)
        musicElement.id = song.name
        musicElement.preload = 'metadata'
        musicElement.controls = false

        document.querySelector(".audio-player")?.appendChild(musicElement)
        document.querySelector(".audio-player")?.appendChild(audioElement)

    }

    const loadNextSong = () => {
        let nextSong = musicOptions[Math.floor(Math.random() * Stations.length)];
        let tempElement = new window.Audio(`/music/${nextSong.name}.mp3`)
        tempElement.preload = "metadata"
        tempElement.id = nextSong.name
        tempElement.controls = false

        document.querySelector(".audio-player")?.appendChild(tempElement)
        document.querySelector(".audio-player")?.removeChild(musicElement)

        musicElement = tempElement

        musicElement.play()
        musicElement.onended = () => {
            loadNextSong()
        }
        song = nextSong

    }

    onMount(async () => { 


        addAudioPlayers()

        musicElement.onended = () => {
            loadNextSong()
        }

    })

</script>

<div class="w-full ml-auto mr-auto bg-black bg-opacity-20 p-12 rounded-lg bg-blend-color feather-background">
    <div class="font-mono text-3xl text-white mb-8">
        <h1 class="font-bold">lofi-scanner</h1>
        <p class=" text-base max-w-xl">{station.name} | {station.location}</p>
    </div>
    <div class="text-white flex flex-col space-y-3 mb-9 items-center">
    <button class="btn w-1/3 text-white" on:click={() => {
        controlAudio()
    }}>
    {#if playState == PlayState.playing}
        Stop
    {:else}
        Play
    {/if}

    </button>
    </div>
    
    
    <div class="flex flex-col space-y-6 px-12 ">
        <div class=" flex align-middle space-x-4">
            <img src="/radio.svg" alt="" class="h-6 w-6">
            <input type=range min="0" max="100" class="range range-primary" bind:value={audioVolume} on:change={() => {
                audioElement.volume = audioVolume / 100
            }}/>
        </div>

        <div class=" flex align-middle space-x-4">
            <img src="/wave-sound.svg" alt="" class="h-6 w-6">

            <input type="range" min="0" max="100" class="range range-secondary" bind:value={musicVolume} on:change={() => {
                musicElement.volume = musicVolume / 100
            }}/>
        </div>
    </div>
    <div class="flex align-middle w-full justify-center items-center font-mono space-x-2 mt-8">
        <img src="/musical-note.svg" alt="" class="h-5 w-5">
        <a class="hover:underline " href={song.youtube}>{song.name}</a>
    </div>
</div>





<div class="audio-player" id="audio-player"></div>
<!-- <div class="h-screen w-screen ">
    <img src="/background.gif" alt="" class="w-full h-full brightness-50">
    <div class="">
        <h1 class="font-mono">dispatch-wave</h1>
    </div>
</div> -->

 <!-- <iframe src="https://broadcastify.cdnstream1.com/33549" frameborder="40">

</iframe> -->
<!-- <h1 class="text-3xl font-bold underline">
    dispatch-wave
</h1>

<div class=""></div>
--->
<!-- <audio id="music" preload="metadata" bind:this={music}>
    <source src="https://s1-bos.liveatc.net/ksea2_twr_e" type="audio/mpeg">
 </audio> -->