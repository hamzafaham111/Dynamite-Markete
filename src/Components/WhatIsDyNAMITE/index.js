import { Typography } from '@material-ui/core'
import React from 'react'
import useStyle from './Style';
import WhatIsDynamite from './WhatIsDynamite';
const WhatIsDynamite2 = () => {
            const classes = useStyle();
    return (
        <div className={classes.topMargin}>
        <WhatIsDynamite/>
        </div>
    )
}
export default WhatIsDynamite2;
