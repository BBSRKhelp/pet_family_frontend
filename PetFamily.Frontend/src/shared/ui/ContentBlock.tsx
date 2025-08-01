type Props = {
  children: React.ReactNode;
};

export function ContentBlock(props: Props) {
  return (
    <div className="w-full bg-white shadow-xl rounded-xl flex-1">
      {props.children}
    </div>
  );
}
