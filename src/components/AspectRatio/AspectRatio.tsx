import type { ReactNode } from 'react';

export interface AspectRatioProps {
  /**
   * The aspect ratio of the container (e.g., 16/9, 4/3, 1)
   * Can be specified as a number directly (1.777 for 16:9) or as a division (16/9)
   */
  ratio: number;
  /**
   * Content to be rendered inside the aspect ratio container
   */
  children?: ReactNode;
}

/**
 * This component constrains its `children` to a fixed aspect ratio, such as 16/9 or 4/3, specified through the required `ratio` prop. It achieves this using the padding-bottom percentage technique on a relatively positioned wrapper, then absolutely positions and centers the content within it. This is useful for keeping media like images, videos, or embeds visually consistent regardless of their intrinsic dimensions.
 */
const AspectRatio = ({ ratio, children }: AspectRatioProps) => {
  return (
    <div
      css={{
        position: 'relative',
        width: '100%',
        paddingBottom: `${(1 / ratio) * 100}%`,
        overflow: 'hidden',
      }}
    >
      <div
        css={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default AspectRatio;
