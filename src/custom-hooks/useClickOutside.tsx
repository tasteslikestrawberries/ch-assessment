import { useRef, useEffect, FC } from "react";

const useClickOutside = (
  ref: React.MutableRefObject<HTMLElement>,
  handleClickOutside: () => void
) => {
  useEffect(() => {
    const onMouseDownHandler = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handleClickOutside();
      }
    };
    document.addEventListener("mousedown", onMouseDownHandler);
    return () => {
      document.removeEventListener("mousedown", onMouseDownHandler);
    };
  }, [ref]);
};

interface IClickOutsideWrapperProps {
  handleClickOutside: () => void;
  children: React.ReactNode;
}

const ClickOutsideWrapper: FC<IClickOutsideWrapperProps> = ({
  handleClickOutside,
  children,
}) => {
  const ref = useRef<HTMLElement>();

  useClickOutside(ref, handleClickOutside);

  return (
    <div data-id="outsideClickWrapper" ref={ref as any}>
      {children}
    </div>
  );
};

export default ClickOutsideWrapper;
