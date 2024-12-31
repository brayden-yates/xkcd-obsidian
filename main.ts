import { Plugin } from 'obsidian';

export default class XkcdPlugin extends Plugin {
  async onload() {
    const apiUrl = 'https://xkcd.vercel.app/?comic=latest';

    const response = await fetch(apiUrl);
    const data = await response.json(); 

    const url = data.img;

    this.registerMarkdownCodeBlockProcessor('xkcd', (source, el, ctx) => {
      const image = document.createElement('img');
      image.src = url; 
      el.appendChild(image); 
    });
  }
}

