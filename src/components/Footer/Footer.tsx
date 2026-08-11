import { useTheme } from "@emotion/react";

export interface FooterProps {
  /**
   * Color of the footer background
   */
  color?: string;

  /**
   * Label text displayed in the footer
   */
  label?: string;

  /**
   * Array of link labels to populate the footer
   */
  children?: string[];

  /**
   * Renders the footer in inverted colors
   */
  inverted?: boolean;

  /**
   * Callback when a link is clicked
   */
  onLinkClick?: (link: string) => void;
}

/**
 * This component renders a page footer with a centered copyright label and an optional row of navigation links built from the `children` array of link labels. The `color` prop overrides the background color, while `inverted` swaps the color scheme for a lighter, higher-contrast look. Clicking a link invokes the `onLinkClick` callback with the clicked label, and the link row wraps onto multiple lines to stay responsive when space is limited.
 */
const Footer = ({
  color: customColor,
  label = "© 2025 Company Name. All rights reserved.",
  children = [],
  inverted = false,
  onLinkClick,
}: FooterProps) => {
  const t = useTheme();
  const baseColor = customColor ?? t.color.slate800;
  const backgroundColor = inverted ? t.color.white : t.color.yellow400;
  const textColor = inverted ? t.color.slate800 : t.color.white;
  const linkColor = inverted ? t.color.blue500 : t.color.blue200;
  const linkHoverColor = inverted ? t.color.blue600 : t.color.blue50;
  const borderColor = inverted ? t.color.slate200 : t.color.slate700;

  return (
    <footer
      css={{
        width: "100%",
        backgroundColor,
        borderTop: `1px solid ${borderColor}`,
        padding: `${t.spacing[6]} ${t.spacing[8]}`,
        marginTop: "auto",
      }}
    >
      <div
        css={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: t.spacing[4],
        }}
      >
        {children && children.length > 0 && (
          <nav
            css={{
              display: "flex",
              gap: t.spacing[6],
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {children.map((link, index) => (
              <a
                key={index}
                css={{
                  color: linkColor,
                  textDecoration: "none",
                  fontSize: t.fontSize[14],
                  cursor: "pointer",
                  transition: "color 0.2s ease",
                  "&:hover": {
                    color: linkHoverColor,
                    textDecoration: "underline",
                  },
                }}
                onClick={() => onLinkClick?.(link)}
              >
                {link}
              </a>
            ))}
          </nav>
        )}
        <p
          css={{
            color: textColor,
            fontSize: t.fontSize[14],
            textAlign: "center",
            margin: "0",
          }}
        >
          {label}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
