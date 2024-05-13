import React from "react";

export const LayoutPlaceholder = () => {
  return (
    <div className="flex flex-col p-5 flex-1 items-center justify-center rounded-xl border-4 border-indigo-200 border-dashed text-center bg-indigo-100/50">
      <h1 className="text-2xl font-bold text-slate-600">
        Aucun widget pour le moment
      </h1>
      <h1 className="text-md text-slate-400">
        Vous pouvez en ajouter en cliquant le bouton + en bas à droite de
        l&apos;écran.
      </h1>
    </div>
  );
};
