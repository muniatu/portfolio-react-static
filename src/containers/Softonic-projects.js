import React from 'react'
import { Link } from 'react-static'
//

export default () => (
    <div>
        <h1>Softonic Projects</h1>
        <ul>
            <li>
                <Link to={`/softonic-projects/chrome-plugin/`}>Chrome Plugin</Link>
            </li>
            <li>
                <Link to={`/softonic-projects/design-system/`}>Design System</Link>
            </li>
        </ul>
    </div>
)
