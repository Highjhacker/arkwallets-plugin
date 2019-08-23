module.exports = {
    template: `
    <div>
      <WebFrame src="https://arkwallets.com" class="w-full h-full" />
    </div>
  `,

    components: {
        WebFrame: walletApi.components.WebFrame
    }
}