type TripleStringTuple = `${number},${"" | " "}${number},${"" | " "}${number}`
type ExtraOptionalItem = "" | `${"" | `,${"" | " "}${number}`}`

////////////////////////////////////////////////////////////////////////////////
// Css Colors
////////////////////////////////////////////////////////////////////////////////

export type RGB = `rgb(${TripleStringTuple})`
export type RGBA = `rgba(${TripleStringTuple}${ExtraOptionalItem})`
export type HEX = `#${string}`
export type HSL = `hsl(${TripleStringTuple})`
export type HSLA = `hsla(${TripleStringTuple}${ExtraOptionalItem})`
type ColorName =
	| "aliceblue"
	| "antiquewhite"
	| "aqua"
	| "aquamarine"
	| "azure"
	| "beige"
	| "bisque"
	| "black"
	| "blanchedalmond"
	| "blue"
	| "blueviolet"
	| "brown"
	| "burlywood"
	| "cadetblue"
	| "chartreuse"
	| "chocolate"
	| "coral"
	| "cornflowerblue"
	| "cornsilk"
	| "crimson"
	| "cyan"
	| "darkblue"
	| "darkcyan"
	| "darkgoldenrod"
	| "darkgray"
	| "darkgreen"
	| "darkkhaki"
	| "darkmagenta"
	| "darkolivegreen"
	| "darkorange"
	| "darkorchid"
	| "darkred"
	| "darksalmon"
	| "darkseagreen"
	| "darkslateblue"
	| "darkslategray"
	| "darkturquoise"
	| "darkviolet"
	| "deeppink"
	| "deepskyblue"
	| "dimgray"
	| "dodgerblue"
	| "firebrick"
	| "floralwhite"
	| "forestgreen"
	| "fuchsia"
	| "gainsboro"
	| "ghostwhite"
	| "gold"
	| "goldenrod"
	| "gray"
	| "green"
	| "greenyellow"
	| "honeydew"
	| "hotpink"
	| "indianred"
	| "indigo"
	| "ivory"
	| "khaki"
	| "lavender"
	| "lavenderblush"
	| "lawngreen"
	| "lemonchiffon"
	| "lightblue"
	| "lightcoral"
	| "lightcyan"
	| "lightgoldenrodyellow"
	| "lightgrey"
	| "lightgreen"
	| "lightpink"
	| "lightsalmon"
	| "lightseagreen"
	| "lightskyblue"
	| "lightslategray"
	| "lightsteelblue"
	| "lightyellow"
	| "lime"
	| "limegreen"
	| "linen"
	| "magenta"
	| "maroon"
	| "mediumaquamarine"
	| "mediumblue"
	| "mediumorchid"
	| "mediumpurple"
	| "mediumseagreen"
	| "mediumslateblue"
	| "mediumspringgreen"
	| "mediumturquoise"
	| "mediumvioletred"
	| "midnightblue"
	| "mintcream"
	| "mistyrose"
	| "moccasin"
	| "navajowhite"
	| "navy"
	| "oldlace"
	| "olive"
	| "olivedrab"
	| "orange"
	| "orangered"
	| "orchid"
	| "palegoldenrod"
	| "palegreen"
	| "paleturquoise"
	| "palevioletred"
	| "papayawhip"
	| "peachpuff"
	| "peru"
	| "pink"
	| "plum"
	| "powderblue"
	| "purple"
	| "rebeccapurple"
	| "red"
	| "rosybrown"
	| "royalblue"
	| "saddlebrown"
	| "salmon"
	| "sandybrown"
	| "seagreen"
	| "seashell"
	| "sienna"
	| "silver"
	| "skyblue"
	| "slateblue"
	| "slategray"
	| "snow"
	| "springgreen"
	| "steelblue"
	| "tan"
	| "teal"
	| "thistle"
	| "tomato"
	| "turquoise"
	| "violet"
	| "wheat"
	| "white"
	| "whitesmoke"
	| "yellow"
	| "yellowgreen"
	| "transparent"
	| "currentcolor"

export type CSSColor = RGB | RGBA | HEX | HSL | HSLA | Lowercase<ColorName>

////////////////////////////////////////////////////////////////////////////////
// CssUnits
////////////////////////////////////////////////////////////////////////////////

export type CSSUnit =
	| 0
	| `${
			| 0
			| `${number}${
					| "cm"
					| "mm"
					| "Q"
					| "in"
					| "pc"
					| "pt"
					| "px"
					| "em"
					| "ex"
					| "ch"
					| "rem"
					| "lh"
					| "rlh"
					| "vw"
					| "vh"
					| "vmin"
					| "vmax"
					| "vb"
					| "vi"
					| "svw"
					| "svh"
					| "lvw"
					| "lvh"
					| "dvw"
					| "dvh"
					| "%"}`}`
