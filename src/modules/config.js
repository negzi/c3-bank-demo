
// cct.log.setLogLevel('data-stream-interface', 20)
// cct.log.setLogLevel('remote-data-proxy', 20)
// cct.log.setLogLevel('local-data-proxy', 20)
// cct.log.setLogLevel('data-source', 20)
// cct.log.setLogLevel('call-registry', 20)
// cct.log.setLogLevel('call', 20)

cct.log.setLogLevel('meeting', cct.log.ALL)
cct.log.color = true

setTimeout(() => {
  PDFJS.verbosity = PDFJS.VERBOSITY_LEVELS.errors
})

export const iceServers = [{
  urls: 'turn:static.verkstad.net:443?transport=tcp',
  username: 'openwebrtc',
  credential: 'secret',
}]

//export const serverUrl = 'http://localhost:8008'
export const serverUrl = 'https://demo.cct.ericsson.net'

export const screenSharingFrameRate = 5
export const chromeExtensionId = 'epajpkbdigdpepgncdpmilaoamkjgoah'
export const firefoxExtensionUrl = '../../static/ericsson_c3_screen_sharing-0.0.1-fx.xpi'
export const firefoxExtensionHash = 'sha1:3479ed305810108033e7a2735af786c262d1d350'

export const appIcons = {
  communicate: {
    id: 'communicate',
    name: 'video-camera',
    color: '#00285F',
  },
  present: {
    id: 'present',
    name: 'tv',
    color: '#00285F',
  },
  collaborate: {
    id: 'collaborate',
    name: 'file-text',
    color: '#00285F',
  },
  leave: {
    id: 'leave',
    name: 'phone',
    color: '#F00',
  },
}
