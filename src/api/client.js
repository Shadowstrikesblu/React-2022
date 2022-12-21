import { AffindaCredential, AffindaAPI } from '@affinda/affinda'
import { createReadStream } from 'fs'

const credential = new AffindaCredential('3729dafbe46d723518d704344b17a5af4b96165e')
const client = new AffindaAPI(credential)
const readStream = createReadStream('PATH_TO_RESUME.pdf')

client
  .createResume({ file: readStream })
  .then((result) => {
    console.log('Returned data:')
    console.dir(result)
  })
  .catch((err) => {
    console.log('An error occurred:')
    console.error(err)
  })
