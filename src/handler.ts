export async function handleRequest(request: Request): Promise<Response> {
  const matched = new URL(request.url).pathname.match(/\/(\d+)/)

  if (!matched) {
    return new Response(
      JSON.stringify({
        msg: 'URL not valid, please use a valid error status code',
      }),
      { status: 418 },
    )
  }

  return new Response(request.body, { status: +matched[1] })
}
