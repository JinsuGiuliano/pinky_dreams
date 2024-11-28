npm run build
cp .svelte-kit/output/prerendered/pages/index.html .svelte-kit/output/client
zip -r .svelte-kit/output/client/deploy.zip .svelte-kit/output/client
mv .svelte-kit/output/client/deploy.zip deploy.zip