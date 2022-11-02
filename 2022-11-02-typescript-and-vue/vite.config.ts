import { markdownItShikiTwoslashSetup } from 'markdown-it-shiki-twoslash'

export default async () => {
  const shikiFactory = await markdownItShikiTwoslashSetup({})
  return {
    slidev: {
      markdown: {
        markdownItSetup(md) {
          md.use((markdownit, options) => {
            const highlight = markdownit.options.highlight
            shikiFactory(markdownit, options)
            const shiki = markdownit.options.highlight
            markdownit.options.highlight = (code, lang, attrs) => {
              if (attrs.includes('twoslash')) {
                try {
                  return shiki(code, lang, attrs)
                } catch (error) {
                  return highlight(`${error.message}`, '', '')
                }
              } else {
                return highlight(code, lang, attrs)
              }
            }
          })
        },
      },
    },
  }
}
