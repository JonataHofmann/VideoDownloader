## Como executar

### Passo 1

> `git clone this_repository`<br/>
> `cd repository_path`<br/>
> `yarn install || npm install`<br/>

### Passo 2

Criar um arquivo .json no seguinte formato dentro da pasta onde os vídeos serão guardados

```json
[
  {
    "title": "Vídeo 1",
    "downloadExtension": ".mp4",
    "downloadURL": "http://video.com.br/video.mp4"
  },
  {
    "title": "Vídeo 2",
    "downloadExtension": ".mp4",
    "downloadURL": "http://video.com.br/video.mp4"
  }
]
```

### Passo 3

Executar:
`node src/index %caminho%`<br/>
`%caminho%` é o caminho onde o arquivo.json está localizado.
