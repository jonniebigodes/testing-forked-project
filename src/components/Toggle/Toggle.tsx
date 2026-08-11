import { useTheme } from '@emotion/react';
import type { ReactNode } from 'react';

export interface ToggleProps {
  onPressedChange?: (pressed: boolean) => void;
  pressed?: boolean;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  children?: ReactNode;
}

/**
 * This component is a two-state toggle switch that lets users switch a setting on or off. It accepts `pressed` and `onPressedChange` to control the pressed state, `disabled` to prevent interaction, `name` for use in forms, and optional `children` rendered as a label next to the switch. It is a controlled button that exposes `aria-pressed` so screen readers can announce its current state, and it animates the thumb position and dims the control when disabled.
 */
const Toggle = ({
  onPressedChange,
  pressed,
  disabled = false,
  name,
  children,
}: ToggleProps) => {
  const t = useTheme();

  const dotStyle = {
    position: 'absolute' as const,
    top: t.spacing[0.5],
    width: t.spacing[5],
    height: t.spacing[5],
    backgroundColor: t.color.white,
    borderRadius: '50%',
    transition: 'transform 0.2s ease',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div
      css={{ display: 'inline-flex', alignItems: 'center', gap: t.spacing[3] }}
    >
      <button
        type="button"
        aria-pressed={!!pressed}
        disabled={disabled}
        name={name}
        onClick={() => onPressedChange?.(!pressed)}
        css={{
          position: 'relative',
          width: t.spacing[10],
          height: t.spacing[6],
          backgroundColor: pressed ? t.color.blue500 : t.color.slate300,
          borderRadius: t.spacing[3],
          border: 'none',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.5 : 1,
          transition: 'background-color 0.2s ease',
          outline: 'none',
          flexShrink: 0,
          ...(!disabled && {
            '&:focus-visible': {
              boxShadow: `0 0 0 3px ${t.color.blueTr10}`,
            },
          }),
        }}
      >
        <div css={{ ...dotStyle, left: pressed ? '22px' : t.spacing[0.5] }} />
      </button>
      {children && (
        <span
          css={{
            fontSize: t.fontSize[14],
            color: disabled ? t.color.slate400 : t.color.slate700,
            userSelect: 'none',
          }}
        >
          {children}
        </span>
      )}
    </div>
  );
};

export default Toggle;
