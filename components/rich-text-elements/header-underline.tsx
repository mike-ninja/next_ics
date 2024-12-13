type HeaderUnderlineProps = {
  children: React.ReactNode;
};

export default function HeaderUnderline({ children }: HeaderUnderlineProps) {
  return (
    <div className="mb-4 w-fit">
      {children}
      <hr className="border-yellow-400 border-t-[7px] mt-1 w-3/4 box_shadow" />
    </div>
  );
}
