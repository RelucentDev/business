/**
 * Relucent Accreditation.
 *
 * @package   Relucent\Accreditation\React
 * @license   Proprietary
 * @copyright 2022 Relucent Ltd
 * @link      https://relucent.dev
 * @since     1.0.0
 */

import React, { ElementType, ComponentPropsWithoutRef } from "react";

interface AccreditationProps<Tag extends ElementType> {
  link?: ElementType;
  as?: Tag;
}

/**
 * @see https://stackoverflow.com/a/66568474/11928183
 */
type AccreditationAdditionalProps<Tag extends ElementType> = Omit<
  ComponentPropsWithoutRef<Tag>,
  keyof AccreditationProps<Tag>
>;

/**
 * Relucent Accreditation Display.
 * The "Made with ❤️ by Relucent" bar on non-whitepaper client websites.
 * For React-based sites.
 *
 * @since 1.1.17
 * @author Dom Webber <dom.webber@hotmail.com>
 */
export default function Accreditation<Tag extends ElementType = "div">({
  link,
  as,
  ...props
}: AccreditationProps<Tag> & AccreditationAdditionalProps<Tag>) {
  const Component: ElementType = as || "div";
  const LinkComponent: ElementType = link || "a";
  return (
    <Component {...props}>
      Made with ❤️ by{" "}
      <LinkComponent href="https://relucent.dev">Relucent</LinkComponent>
    </Component>
  );
}
