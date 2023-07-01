# lofi-scanner

This project is inspired by [lofiatc](https://www.lofiatc.com/?icao=kjfk), but instead uses public safety radios. This is quite a simple project at this point. To be honest, I threw it together in a few hours and this is certainly not my best code. I welcome anyone to contribute! This could be a great first project to contribute to!

## Contributing

As I mentioned, I threw this together rather quickly and a LOT of improvements need to be made. There isn't much documentation either, but not a ton of code so you will probably get a good idea of what is happening just by looking at it.

I welcome ANYONE to submit a pull request to this project! It would be super fun to collaborate with some new folks. Add your local public safety scanner to the StationManifest.ts and it will appear in the rotation.

### Things you could add

- Add new stations
- Add ability to change stations
- Add ability to change songs
- Search for available stations
- Error handling for stations that are down
- Whatever you can think of!
- Someone please help me with support on iOS Safari

Any questions, message me on [Twitter @ thompson\_\_ian](https://www.twitter.com/thompson__ian) or email me at ianthompson@nicelion.com. Or create an issue here on GitHub.

## Run on your own

First, clone this repo to your machine.

### How to run on localhost

Install dependencies:

```sh
npm install
```

To run in dev mode mode:

```sh
npm start
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
