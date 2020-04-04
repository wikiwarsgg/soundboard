# Wikiwars Soundboard

## Usage

Open a terminal and run :

```sh
nvm use # Optional, install Node.js 13
yarn
```

Then, start a dev server :

```sh
yarn dev
```

## Manage sounds

You will need to :

- Add your files into folders under the `assets` folder ;
- List your files into `assets/sounds.json`.

First, copy `assets/sounds.json.sample` and add your files :

```sh
cp assets/sounds.json.sample assets/sounds.json
```

Imagine you have theses files :

```
public/assets/
|_folder-1/
| |_foo.mp3
| |_bar.mp3
|_folder-2/
  |_baz.mp3
```

Then you would need the following JSON :

`assets/sounds.json`

```json
{
  "folder-1": ["foo.mp3", "bar.mp3"],
  "folder-2": ["baz.mp3"]
}
```
