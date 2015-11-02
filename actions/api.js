export function createApiMeta(url) {
  return () => ({
    api: {
      url: url
    }
  })
}
