/**
 * Relucent Accreditation.
 *
 * @package   Relucent\Accreditation\React
 * @copyright 2022 Relucent Ltd
 * @link      https://relucent.dev
 * @since     1.0.0
 */

import React, { createElement, ReactNode, HTMLAttributes } from "react";

interface AccreditationProps extends HTMLAttributes<HTMLDivElement> {
    capitalise: boolean;
    linkComponent?: ({ href, children }: { href: string, children: ReactNode }) => ReactNode;
}

/**
 * Relucent Accreditation Display.
 * The "built with ❤️ by Relucent" bar on non-whitepaper client websites.
 * For React-based sites.
 *
 * @since 1.1.17
 * @author Dom Webber <dom.webber@hotmail.com>
 */
export default function Accreditation({ capitalise = true, linkComponent, ...additionalProps }: AccreditationProps) {
    if (!linkComponent) {
        linkComponent = ({ href, children }) => (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer external"
            >
                {children}
            </a>
        );
    }

    return (
        <div {...additionalProps}>{capitalise ? "Built" : "built"} with ❤️ by <linkComponent href="https://relucent.dev">Relucent</linkComponent></div>
    );
}
