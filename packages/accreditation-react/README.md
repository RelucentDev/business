# `@relucent-software/accreditation-react`

Our branding "Made with love by..." bar. Open sourced for transparency and clear intention.

## Usage

An example use case within NextJS 13.

```javascript
import Link from "next/link";
import { stringifyUrl } "query-string";
import Accreditation from "@relucent-software/accreditation-react";

function HomePage(
    return (
        // ...
        <Accreditation
            as="div"
            link={
                (href, children) =>
                    <Link
                        href={
                            // Example: Add UTM analytics parameters
                            stringifyUrl({
                                url: href,
                                query: {
                                    utm_source: "etc",
                                    utm_medium: "accreditation",
                                    utm_campaign: "client"
                                },
                            })
                        }
                    >
                        {children}
                    </Link>
            }
        />
        // ...
    )
)
```
