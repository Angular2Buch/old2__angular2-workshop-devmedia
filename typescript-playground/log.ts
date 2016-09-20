export function Log(message: string) {
  return function(target, key = null, descriptor = null) {
    console.log(new Date(), 'Message:', message, 'Key:', key)
  }
}
