/**
 * Relucent Accreditation.
 *
 * @package   Relucent\Accreditation\React
 * @license   Proprietary
 * @copyright 2022 Relucent Ltd
 * @link      https://relucent.dev
 * @since     1.0.0
 */

import React, { ReactNode, HTMLAttributes } from "react";

interface AccreditationProps extends HTMLAttributes<HTMLDivElement> {
  linkComponent?: ({
    href,
    children,
  }: {
    href: string;
    children: ReactNode;
  }) => ReactNode;
}

/**
 * Relucent Accreditation Display.
 * The "Made with ❤️ by Relucent" bar on non-whitepaper client websites.
 * For React-based sites.
 *
 * @since 1.1.17
 * @author Dom Webber <dom.webber@hotmail.com>
 */
export default function Accreditation({
  linkComponent,
  ...additionalProps
}: AccreditationProps) {
  return (
    <div {...additionalProps}>
      Made with ❤️ by{" "}
      <linkComponent href="https://relucent.dev">Relucent</linkComponent>
    </div>
  );
}
