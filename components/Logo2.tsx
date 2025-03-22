import { useTheme } from 'next-themes';
import * as React from 'react';
import { SVGProps } from 'react';

const Logo2 = (props: SVGProps<SVGSVGElement>) => {
  const { theme } = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={120}
      height={31}
      fill={theme === 'dark' ? 'white' : 'black'}
      viewBox="50 130 275 100"
      {...props}
    >
      <path d="M355.504 179.947c-2.75 0-5.047-.476-6.89-1.437-1.844-.969-3.227-2.285-4.141-3.953-.906-1.676-1.36-3.594-1.36-5.75 0-2.164.454-4.082 1.36-5.75.914-1.676 2.297-2.992 4.14-3.953 1.844-.957 4.141-1.438 6.891-1.438 2.781 0 5.086.48 6.922 1.438 1.832.96 3.203 2.277 4.11 3.953.913 1.668 1.374 3.586 1.374 5.75 0 2.156-.46 4.074-1.375 5.75-.906 1.668-2.277 2.984-4.109 3.953-1.836.96-4.14 1.437-6.922 1.437Zm0-3.953c2.758 0 4.86-.597 6.297-1.797 1.437-1.207 2.156-3.003 2.156-5.39 0-2.414-.719-4.219-2.156-5.406-1.438-1.196-3.54-1.797-6.297-1.797-2.73 0-4.812.601-6.25 1.797-1.437 1.187-2.156 2.992-2.156 5.406 0 2.387.719 4.183 2.156 5.39 1.438 1.2 3.52 1.797 6.25 1.797Zm-4.687-2.765v-8.813h6.984c1 0 1.805.305 2.422.906.613.594.922 1.399.922 2.407 0 1.406-.563 2.382-1.688 2.922l1.578 2.578h-3.39l-1.282-2.172h-2.625v2.172Zm2.921-4.657h3.438c.219 0 .453-.035.703-.109.258-.07.39-.316.39-.734 0-.438-.132-.692-.39-.766a2.267 2.267 0 0 0-.703-.125h-3.438ZM26.732 205.916l-18-51.453h18.515l12.14 37.485 12.704-37.485h20.734l12.782 37.485 12.062-37.485h18.516l-17.938 51.453H73.044L62.466 173.87l-10.594 32.047ZM107.917 205.916l23-51.453h25.063l22.937 51.453h-18.969l-4.187-9.78h-24.625l-4.25 9.78Zm28.078-21.968h14.844l-7.422-17.204ZM193.495 205.916l-23-51.453h19.109l16.39 39.172 16.47-39.172h19.03l-22.937 51.453ZM248.078 205.916v-51.453h17.266v51.453ZM304.98 206.65c-11.324 0-19.546-2.21-24.671-6.64-5.118-4.437-7.672-11.066-7.672-19.89 0-8.77 2.554-15.36 7.672-19.766 5.125-4.414 13.347-6.625 24.671-6.625 10.29 0 18.094 1.89 23.407 5.672 5.312 3.773 8.21 9.601 8.703 17.484h-17.563c-.437-2.937-1.851-5.101-4.234-6.5-2.375-1.394-5.813-2.094-10.313-2.094-3.968 0-7.046.493-9.234 1.47-2.18.98-3.7 2.366-4.562 4.155-.856 1.782-1.282 3.852-1.282 6.203 0 2.356.426 4.438 1.282 6.25.863 1.813 2.382 3.227 4.562 4.235 2.188 1 5.266 1.5 9.234 1.5 4.5 0 7.938-.707 10.313-2.125 2.383-1.426 3.797-3.633 4.234-6.625h17.563c-.492 7.887-3.383 13.742-8.672 17.562-5.293 3.825-13.105 5.735-23.438 5.735Zm0 0" />
    </svg>
  );
};

export default Logo2;
