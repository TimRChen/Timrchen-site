const isProdEnv: boolean = /timrchen\.site/.test(window.location.host)
const TimDomain: string = isProdEnv ? 'http://api.timrchen.site:3000' : 'http://127.0.0.1:3000'

export default TimDomain
