import { ThemeContext } from './UseContext'
import { useContext } from 'react'

function Paragraph() {
    const theme = useContext(ThemeContext)
 
    return(
       
        <div>
            <p className={theme}>
                aehae ae fawefh ae haefhaehf ahefah feawef
                ahehaw ehfaw e
                aef aehf ae 
            </p>
        </div>
    )
}

export default Paragraph