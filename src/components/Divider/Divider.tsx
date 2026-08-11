import { useTheme } from '@emotion/react';

export interface DividerProps {
  /**
   * Color of the divider line
   */
  color?: string;

  /**
   * Renders the divider in inverted colors
   */
  inverted?: boolean;
}

/**
 * This component renders a simple horizontal divider line used to visually separate sections of content. It accepts an optional `color` prop to customize the line color, and an `inverted` prop that swaps the color scheme for use on dark backgrounds. The component is presentational and stateless, rendering a styled `hr` element wrapped in a container.
 */
const Divider = ({ color: customColor, inverted = false }: DividerProps) => {
  const t = useTheme();
  const dividerColor = inverted
    ? t.color.white
    : customColor ?? t.color.slate300;
  const backgroundColor = inverted ? t.color.slate800 : t.color.white;

  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        backgroundColor: inverted ? backgroundColor : 'transparent',
        padding: inverted ? `${t.spacing[4]} 0` : '0',
      }}
    >
      <hr
        css={{
          width: '100%',
          height: '1px',
          backgroundColor: dividerColor,
          border: 'none',
          margin: `${t.spacing[4]} 0`,
        }}
      />
    </div>
  );
};

export default Divider;
