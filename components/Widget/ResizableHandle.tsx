import { forwardRef } from "react";
import { GrBottomCorner } from "react-icons/gr";
import { Tooltip } from "react-tooltip";

const ResizableHandle = forwardRef(function Component(props: any, ref) {
  const { handleAxis, ...restProps } = props;
  return (
    <div
      ref={ref}
      handleaxis={handleAxis}
      {...restProps}
      className="absolute z-50 opacity-30 hover:opacity-100 cursor-se-resize duration-300 right-4 bottom-4"
    >
      <a
        data-tooltip-id="resize-widget"
        data-tooltip-content="Redimensionner ce widget"
      >
        <GrBottomCorner className="text-indigo-300" size={30} />
        <Tooltip
          style={{ backgroundColor: "#6366f1", color: "#fff" }}
          id="resize-widget"
        />
      </a>
    </div>
  );
});

export default ResizableHandle;
