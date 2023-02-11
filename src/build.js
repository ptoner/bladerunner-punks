import fs from "fs"

import packageConfig from 'large-nft/package.json' assert { type: "json" }


let indexHtml = fs.readFileSync('public/large/index.html').toString()


indexHtml = indexHtml.replace(/<script\s+type=['"]module['"]>([\s\S]*?)<\/script>/gi, `
<script type="module">
  window.footerText = "<span class='footer-link'><a href='#'>Privacy Policy</a></span><span class='footer-link'><a href='#'>Terms</a></span><span class='footer-link'><a href='#'>Disclaimer</a></span>"

  let version = ${JSON.stringify(packageConfig.version)}.replace('"', '').replace('"', '')
  admin.default(version)
</script>
`)

fs.writeFileSync('public/large/index.html', indexHtml)
