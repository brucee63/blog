## Quickstart initial setup
[Metronic site template setup](https://youtu.be/ptgwzvvAHy4)

## This template depends on Node.js 12.18.x LTS
[Node.js 12.18.4 download](https://nodejs.org/en/blog/release/v12.18.4/)

The following commands should be run from the **./tools** folder

Run a administrator
```
npm install --global windows-build-tools
```

We need to update npm, then install yarn globally. We can then use gulp or webpack
```
npm install --global npm@latest
npm install --global yarn
yarn
```

### Generate assets with Gulp
```
gulp --demo2
gulp localhost --demo2
```

### Building assets with WebPack
[Metronic site template setup](https://youtu.be/ZYuk98fUR-I)

These commands need to be run within the ./tools folder.
```
npm run build --demo2
npm run localhost --demo2

# to minify
npm run build --prod --demo2
```
This command should be run from the root **blog** folder
### HTML include/ template replacement
The Metronic theme requires the **index.html** and **layout.html** file to be template replaced. I've chosen to use Gulp to do this.
```
npm run build
```
