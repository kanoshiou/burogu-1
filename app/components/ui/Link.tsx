"use client"

import NextLink from "next/link"

export default function Link({ href, ...rest }: React.ComponentProps<"a">) {
	const useLink = href && href.startsWith("/")
	if (useLink)
		return (
			<NextLink
				// @ts-expect-error temporary allow using this component without route type checking
				href={href}
				{...rest}
				ref={undefined} // change this if you need, with React.forwardRef
			/>
		)
	return <a href={href} target="_blank" rel="noopener noreferrer" {...rest} />
}
