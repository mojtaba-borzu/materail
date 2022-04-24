const ToggleButton = ({
  isLimitAmount = false,
  toggleHandler,
  width = 34,
  height = 18,
  border = 1,
  radius = 10,
  contentPaddingX = 1,
  bgColorCircular = "ffffff",
  borderColorOn = "54DE8B",
  borderColorOff = "E6E6E6",
  borderColorHover = "cccccc",
  borderColorActive = "54DE8B",
  bgColorOn = "54DE8B",
  bgColorOff = "E6E6E6",
  bgColorDeactivate = "F2F2F2",
  bgColorActive = "7FE6A8",
  widthChild = height - border * 2 - contentPaddingX * 2,
  duration = 0.25,
}: {
  isLimitAmount: boolean;
  toggleHandler: any;
  width?: number;
  height?: number;
  border?: number;
  radius?: number;
  contentPaddingX?: number;
  bgColorCircular?: string;
  borderColorHover?: string;
  borderColorActive?: string;
  borderColorOn?: string;
  borderColorOff?: string;
  bgColorDeactivate?: string;
  bgColorActive?: string;
  bgColorOn?: string;
  bgColorOff?: string;
  widthChild?: number;
  duration?: number;
}) => {
  return (
    <div
      id="toggle-button-parent"
      onClick={toggleHandler}
      className={`border-solid flex items-center cursor-pointer `}
    >
      <div
        id="toggle-button-child"
        className="rounded-full shadow-toggleButtonShadow z-10  "
      ></div>
      <style jsx>{`
        #toggle-button-parent {
          border-color: ;
          transition-duration: ${duration}s;
          background-color: #${isLimitAmount ? bgColorOn : bgColorOff};
          border-radius: ${radius}px;
          width: ${width}px;
          height: ${height}px;
          padding: ${contentPaddingX}px;
          border: ${border}px solid #${isLimitAmount ? borderColorOn : borderColorOff};
        }

        #toggle-button-parent:hover {
          border: ${border}px solid #${isLimitAmount ? borderColorActive : borderColorHover};
        }

        #toggle-button-parent:active {
          background-color: #${isLimitAmount ? bgColorActive : bgColorDeactivate};
        }

        #toggle-button-child {
          transition-duration: ${duration}s;
          margin-left: ${isLimitAmount
            ? width - border * 2 - widthChild - contentPaddingX * 2
            : 0}px;
          width: ${widthChild}px;
          background-color: #${bgColorCircular};
          height: ${height - border * 2 - contentPaddingX * 2}px;
        }

        #toggle-button-child:hover {
          transition-duration: ${duration}s;
          transform: scale(1.1);
        }

        #toggle-button-child:active {
          transition-duration: ${duration}s;
          margin-left: ${isLimitAmount
            ? width - 1 - border * 2 - widthChild * 1.52 - contentPaddingX * 2
            : 0}px;
          width: ${widthChild * 1.5}px;
        }
      `}</style>
    </div>
  );
};
export default ToggleButton;
