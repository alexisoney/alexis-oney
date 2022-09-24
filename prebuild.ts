import 'dotenv/config'

import axios from 'axios'
import fs from 'fs'
import path from 'path'
import toIco from 'to-ico'
import urljoin from 'url-join'

import {ConfigStory} from '@/src/content-types/config'
import Storyblok from '@/src/libs/storyblok/storyblok'

generateFiles()

async function generateFiles() {
  for (const file of [
    'favicon-180.png',
    'favicon-196.png',
    'favicon.ico',
    'robots.txt',
    'sitemap.xml',
  ]) {
    await fs.unlink(`public/${file}`, () => undefined)
  }

  const config = await Storyblok.getConfig<ConfigStory>()
  const {favicon, site_url = ''} = config.content
  if (favicon && favicon.filename) await generateFavicon(favicon.filename)
  generateSitemap(site_url)
  generateRobots(site_url)
}

async function generateFavicon(source: string) {
  if (source) {
    const getUrl = (size: number) =>
      urljoin(source, `/m/${size}x${size}/filters:fill(transparent):format(png)`)

    const getPath = (fileName: string) => path.resolve(__dirname, 'public', fileName)

    const {data: icoSource} = await axios.get(getUrl(256), {responseType: 'arraybuffer'})
    const icoBuffer = Buffer.from(icoSource, 'utf-8')

    toIco([icoBuffer], {sizes: [16, 24, 32, 48, 64, 128, 256], resize: true}).then((result) => {
      fs.writeFileSync(getPath('favicon.ico'), result)
    })

    for (const size of [180, 196]) {
      await axios.get(getUrl(size), {responseType: 'arraybuffer'}).then(async ({data}) => {
        await fs.promises.writeFile(getPath(`favicon-${size}.png`), Buffer.from(data, 'utf-8'))
      })
    }
  }
}

async function generateSitemap(baseUrl: string) {
  const {paths} = await Storyblok.getStaticPaths({})

  const urls = paths
    .map((path) => {
      if (typeof path !== 'string' && Array.isArray(path.params.slug)) {
        return `  <url><loc>${urljoin(baseUrl, path.params.slug.join('/'))}</loc><lastmod>${
          new Date().toISOString().split('T')[0]
        }</lastmod></url>`
      }
    })
    .filter(Boolean)
    .join('\n')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`

  fs.writeFileSync(path.resolve(__dirname, './public/sitemap.xml'), sitemap, 'utf8')
}

async function generateRobots(baseUrl: string) {
  const robots = `# *
User-agent: *
${process.env.ALLOW_ROBOTS === 'true' ? 'Allow' : 'Disallow'}: /

# Host
Host: ${baseUrl}

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml`

  fs.writeFileSync(path.resolve(__dirname, './public/robots.txt'), robots, 'utf8')
}
