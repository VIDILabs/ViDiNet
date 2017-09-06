# ViDiNet

## Development
Application launcher for the demonstrations that are displayed on the touch-table

To run the application for development:
If you have nvm (node version manager) start off with: "nvm use"
Otherwise make sure your node version is > 6.9.2

To launch the application: "npm run start"


## Deploy

Prequiste for bundling:

Make sure electron-packager is installed via npm globally (i.e npm install -g electron-packager)

- Make sure in terminal you are in the top directory of this repo
- electron-packager . --platform=<platform> --arch=<target arch>
- [windows deployment example] 
   - electron-packager . --platform=win32 --arch=x64

