const LayoutPlaceholder = () => (
  <div className="flex flex-col p-5 flex-1 items-center justify-center rounded-xl border-4 border-indigo-100 border-dashed text-center bg-indigo-100/30">
    <h1 className="text-2xl font-bold text-slate-600">
      Aucun widget pour le moment
    </h1>
    <h1 className="text-md text-slate-400">
      Vous pouvez en ajouter en cliquant le bouton + en bas à droite de
      l&apos;écran.
    </h1>
  </div>
);

export default LayoutPlaceholder;
