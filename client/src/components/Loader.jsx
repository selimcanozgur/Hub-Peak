import { TbLoader3 } from "react-icons/tb";

function Loader({ className }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <TbLoader3
        className={`${className} text-green-600 text-7xl animate-spin`}
      />
      ;
    </div>
  );
}

export default Loader;
